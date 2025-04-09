// utils/SnackbarUtils.ts
import { useSnackbar, VariantType, WithSnackbarProps } from "notistack";

let useSnackbarRef;

export const SnackbarUtilsConfigurator = () => {
  useSnackbarRef = useSnackbar();
  return null;
};

export const snackbar = {
  success(msg) {
    useSnackbarRef.enqueueSnackbar(msg, { variant: "success" });
  },
  error(msg) {
    useSnackbarRef.enqueueSnackbar(msg, { variant: "error" });
  },
  info(msg) {
    useSnackbarRef.enqueueSnackbar(msg, { variant: "info" });
  },
  warning(msg) {
    useSnackbarRef.enqueueSnackbar(msg, { variant: "warning" });
  },
};
