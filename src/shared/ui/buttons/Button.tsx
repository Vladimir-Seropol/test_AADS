import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  variant?: "primary" | "secondary" | "outline" | "destructive";
  className?: string;
}

export const Button = ({
  children,
  onClick,
  variant = "primary",
  className = "",
}: ButtonProps) => {
  const baseStyles =
    "px-4 py-2 rounded-md text-sm font-medium transition-colors";

  const variantStyles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary:
      "bg-white text-gray-800 hover:bg-gray-50 border border-gray-300 shadow-sm",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-50",
    destructive: "bg-red-600 text-white hover:bg-red-700",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );
};
