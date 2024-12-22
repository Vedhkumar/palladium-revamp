import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  fill: boolean;
  link: string;
};

function Button({ link, children, fill = true }: ButtonProps) {
  return fill ? (
    <button
      className={`rounded-full max-sm:w-full text-center py-4 px-6 bg-primary text-white my-2  sm:mr-5`}
    >
      <a href={link} target="_blank">
        {children}
      </a>
    </button>
  ) : (
    <button
      className={`rounded-full max-sm:w-full text-center py-4 px-6 text-primary border-primary border-[1.5px] my-2 `}
    >
      <a href={link} target="_blank">
        {children}
      </a>
    </button>
  );
}

export default Button;
