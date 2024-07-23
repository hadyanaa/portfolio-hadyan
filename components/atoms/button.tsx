import React, { FC, ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

const Button: FC<ButtonProps> = ({ onClick, children, className }) => {
  return (
    <div className='border-gray text-gray'>
      <button
        className={`border hover:bg-blue/20 py-2 px-4 rounded-xl ${className} transition duration-200`}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
