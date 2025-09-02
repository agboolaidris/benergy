import { Toaster } from "react-hot-toast";

export const ToastContainer = () => {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 3000,
        error: {
          className: "!bg-rose-700 w-82 text-sm font-bold !text-white",
        },
        success: {
          className: "!bg-lime-900 w-82 text-sm font-bold !text-white",
        },
      }}
    />
  );
};
