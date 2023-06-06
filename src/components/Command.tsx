import React from "react";

const Command: React.FC<
  React.PropsWithChildren & JSX.IntrinsicElements["span"]
> = ({ children, className, ...props }) => {
  return (
    <span
      className={`"w-[200px] text-cyan-300 ${className}`}
      style={{ textShadow: "0 0 5px rgb(103 232 249)" }}
      {...props}
    >
      {children}
    </span>
  );
};

export default Command;
