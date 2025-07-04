import type { ReactNode } from "react";

interface IconButtonProps {
  onClick: () => void;
  icon: ReactNode; 
  className?: string;
  color?: string;
}

export const IconButton = ({
  onClick,
  icon,
  className = "",
  color = "text-[#00AAFF]",
}: IconButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${color} hover:text-blue-700 transition-colors ${className}`}
    >
      {icon}
    </button>
  );
};