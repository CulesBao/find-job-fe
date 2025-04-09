import { snackbar } from "@../utils/SnackbarUtils";

export default async (apiFunction) => {
  try {
    const response = await apiFunction();
    snackbar.success(response.data.message || "Success!");
    return response.data;
  } catch (error) {
    if (error.request) {
      console.error("No response received:", error.request);
      snackbar.error(
        "Failed to connect to the server. Please check your internet connection."
      );
    } else if (error.response && error.response.status < 500) {
      console.error("Error response:", error.response);
      snackbar.warning(
        error.response.data.message || "An error occurred. Please try again."
      );
    } else {
      console.error("Error message:", error.message);
      snackbar.error("An unexpected error occurred. Please try again.");
    }
    return null; // Return null or handle the error as needed
  }
};
