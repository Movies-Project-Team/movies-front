import { TYPE, useToast } from "vue-toastification";
import type { ToastOptions } from "vue-toastification/dist/types/types";

type ToastProps = {
    description?: string;
    title?: string;
};

const useToasting = () => {
  const toast = useToast();

  const showToast = ({ title, description }: ToastProps, options: ToastOptions = {}) => {
    const content = `${title}\n${description}`;
    toast(content, options);
  };

  const success = ({ title = 'Success!', description = '' }) => {
    showToast({ title, description }, { type: TYPE.SUCCESS });
  };

  const error = ({ title = 'Error!', description = '' }) => {
    showToast({ title, description }, { type: TYPE.ERROR });
  };

  const info = ({ title = 'Info!', description = '' }) => {
    showToast({ title, description }, { type: TYPE.INFO });
  };

  const warning = ({ title = 'Warning!', description = '' }) => {
    showToast({ title, description }, { type: TYPE.WARNING });
  };

  return {
    success,
    error,
    info,
    warning,
  };
};

export default useToasting;
