import React from "react";

function Button({
  children,
  type = "button",
  bgColor = "bg-blue-600",
  textColor = "text-white",
  className = "",
  ...props
}) {
  return (
    <div>
      <button
        className={` px-2 py-4 ${bgColor} ${children}${className} ${textColor} ${type} `}
        {...props}
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
