"use client";
import ToastContext from "@/context/ToastContext";
import React from "react";

const Toast = () => {
  const { show, type, message } = React.useContext(ToastContext);

  return (
    <>
      {show && (
        <div
          className={`position-fixed bottom-0 end-0 m-2 zindex-1050 ${getToastClass(
            type
          )}`}
        >
          {type === "success" && <Success message={message} />}
          {type === "error" && <Error message={message} />}
          {type === "warning" && <Warning message={message} />}
          {type === "info" && <Info message={message} />}
        </div>
      )}
    </>
  );
};

const getToastClass = (type) => {
  switch (type) {
    case "success":
      return "bg-success border-success";
    case "error":
      return "bg-danger border-danger";
    case "warning":
      return "bg-warning border-warning";
    case "info":
      return "bg-info border-info";
    default:
      return "";
  }
};

const Success = ({ message }) => {
  return (
    <div className="d-flex align-items-center bg-success border-start border-success py-2 px-3 shadow-sm mb-2 text-white">
      <div className="bg-white text-success rounded-circle mx-3">
        <svg
          width="1.8em"
          height="1.8em"
          viewBox="0 0 16 16"
          className="bi bi-check"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"
          />
        </svg>
      </div>
      <div>{message}</div>
    </div>
  );
};

const Info = ({ message }) => {
  return (
    <div className="d-flex align-items-center bg-info border-start border-info py-2 px-3 shadow-sm mb-2 text-white">
      <div className="bg-white text-info rounded-circle mx-3">
        <svg
          width="1.8em"
          height="1.8em"
          viewBox="0 0 16 16"
          className="bi bi-info"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588z" />
          <circle cx="8" cy="4.5" r="1" />
        </svg>
      </div>
      <div>{message}</div>
    </div>
  );
};

const Warning = ({ message }) => {
  return (
    <div className="d-flex align-items-center bg-warning border-start border-warning py-2 px-3 shadow-sm mb-2 text-dark">
      <div className="bg-white text-warning rounded-circle mx-3">
        <svg
          width="1.8em"
          height="1.8em"
          viewBox="0 0 16 16"
          className="bi bi-info"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588z" />
          <circle cx="8" cy="4.5" r="1" />
        </svg>
      </div>
      <div>{message}</div>
    </div>
  );
};

const Error = ({ message }) => {
  return (
    <div className="d-flex align-items-center bg-danger border-start border-danger py-2 px-3 shadow-sm mb-2 text-white">
      <div className="bg-white text-danger rounded-circle mx-3">
        <svg
          width="1.8em"
          height="1.8em"
          viewBox="0 0 16 16"
          className="bi bi-info"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588z" />
          <circle cx="8" cy="4.5" r="1" />
        </svg>
      </div>
      <div>{message}</div>
    </div>
  );
};

export default Toast;
