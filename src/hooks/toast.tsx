import { useState } from 'react';

interface ToastProps {
  title: string;
  message: string;
  type: 'error' | 'info' | 'success';
}

const useToast = () => {
  const [toast, setToast] = useState<ToastProps | null>(null);

  const showToast = (props: ToastProps) => {
    setToast({
      title: props.title,
      message: props.message,
      type: props.type,
    });

    // Par exemple, on peut décider de cacher le toast après 3 secondes
    setTimeout(() => {
      setToast(null);
    }, 3000);
  };

  const ToastComponent = () => {
    if (!toast) return null;

    // Définition des couleurs de fond en fonction du type de toast
    const bgColor = {
      error: 'bg-red-500',
      info: 'bg-blue-500',
      success: 'bg-green-500',
    }[toast.type];

    return (
      <div className={`fixed bottom-0 right-0 m-4 p-4 text-white rounded-lg shadow-lg ${bgColor}`}>
        <h3 className="font-bold">{toast.title}</h3>
        <p>{toast.message}</p>
      </div>
    );
  };

  return { showToast, ToastComponent };
};

export default useToast;