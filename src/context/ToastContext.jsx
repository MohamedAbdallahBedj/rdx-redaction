"use client";
import React from "react";

const ToastContext = React.createContext();

export const ToastProvider = ({ children }) => {
  const [show, setShow] = React.useState(true);
  const [type, setType] = React.useState();
  const [message, setMessage] = React.useState();

  React.useEffect(() => {
    // Hide notification after 3 seconds
    const time = setTimeout(() => {
      setShow(false);
    }, 2500);

    return () => clearTimeout(time);
  }, [show]);

  const notificationHandler = (args) => {
    setType(args.type);
    setMessage(args.message);
    setShow(true);
  };

  return (
    <ToastContext.Provider value={{ notificationHandler, show, type, message }}>
      {children}
    </ToastContext.Provider>
  );
};
export default ToastContext;
