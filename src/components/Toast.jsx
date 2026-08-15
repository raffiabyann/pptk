import React, { createContext, useContext, useState } from 'react';

const ToastContext = createContext(null);

export function ToastProvider({ children }) {
  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'info') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 3000);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 animate-bounce">
          <div className="bg-[#001a42] text-white border-2 border-[#E85A00] p-4 shadow-[4px_4px_0px_0px_#E85A00] flex items-center gap-3 font-['JetBrains_Mono'] text-xs font-bold chamfered-box">
            <span className="material-symbols-outlined text-[#E85A00] text-lg">
              {toast.type === 'success' ? 'check_circle' : 'info'}
            </span>
            <span>{toast.message}</span>
          </div>
        </div>
      )}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    return { showToast: (msg) => console.log(msg) };
  }
  return context;
}
