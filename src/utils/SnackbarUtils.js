// utils/SnackbarUtils.ts
import { useSnackbar } from "notistack";

let useSnackbarRef;

export const SnackbarUtilsConfigurator = () => {
  useSnackbarRef = useSnackbar();
  return null;
};

export const snackbar = {
  success(msg) {
    useSnackbarRef.enqueueSnackbar(msg, {
      variant: "success",
      autoHideDuration: 2000,
      anchorOrigin: { vertical: "top", horizontal: "right" },
    });
  },
  error(msg) {
    useSnackbarRef.enqueueSnackbar(msg, {
      variant: "error",
      autoHideDuration: 2000,
      anchorOrigin: { vertical: "top", horizontal: "right" },
    });
  },
  info(msg) {
    useSnackbarRef.enqueueSnackbar(msg, {
      variant: "info",
      autoHideDuration: 2000,
      anchorOrigin: { vertical: "top", horizontal: "right" },
    });
  },
  warning(msg) {
    useSnackbarRef.enqueueSnackbar(msg, {
      variant: "warning",
      autoHideDuration: 2000,
      anchorOrigin: { vertical: "top", horizontal: "right" },
    });
  },
};
