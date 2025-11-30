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
    <button
      type={type}
      className={`
        ${bgColor} ${textColor}
        px-5 py-2 
        rounded-lg 
        font-semibold 
        tracking-wide
        transition-all 
        duration-200 
        hover:opacity-90 
        active:scale-95
        shadow-md
        hover:shadow-lg
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
