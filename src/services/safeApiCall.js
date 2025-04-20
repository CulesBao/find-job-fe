import { snackbar } from "../utils/SnackbarUtils";

export default async (apiFunction) => {
  try {
    const response = await apiFunction();
    if (
      !(
        response.data.message == "Get provices successfully" ||
        response.data.message == "Get districts successfully" ||
        response.data.message == "Get my account successfully" ||
        response.data.message == "Get employer jobs successfully" ||
        response.data.message == "Filter jobs successfully"
      )
    )
      snackbar.success(response.data.message || "Success!");
    return {
      error: false,
      status: response.status,
      data: response.data.data,
    };
  } catch (error) {
    if (error.response) {
      // Server responded with a status code (4xx or 5xx)
      console.error("Error response:", error.response);

      const status = error.response.status;
      const message = error.response.data?.message || "An error occurred.";

      if (status < 500) {
        snackbar.warning(message);
      } else {
        snackbar.error("A server error occurred. Please try again later.");
      }
      return {
        error: true,
        status,
        data: error.response.data,
      };
    } else if (error.request) {
      // Request was made but no response received
      console.error("No response received:", error.request);
      snackbar.error("Failed to connect to the server.");
    } else {
      // Something happened in setting up the request
      console.error("Error setting up the request:", error.message);
      snackbar.error("An unexpected error occurred. Please try again.");
    }

    return null;
  }
};
