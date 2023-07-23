import { toast } from "react-toastify";

export const notifySuccess = (message: string) => {
  toast.success(message, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 2000,
    closeOnClick: true,
    pauseOnHover: true,
  });
};

export const notifyFailed = (message: string) => {
  toast.error(message, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 2000,
    closeOnClick: true,
    pauseOnHover: true,
  });
};

export const notifyLoading = (message: string) => {
  toast.loading(message, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 1000,
    closeOnClick: true,
    pauseOnHover: true,
  });
};
