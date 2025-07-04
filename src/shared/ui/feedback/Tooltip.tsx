import { useState } from "react";

interface TooltipProps {
  content: string;
  children: React.ReactNode;
  position?: "top" | "bottom" | "left" | "right";
}

export const Tooltip = ({ content, children, position = "top" }: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const positionClasses = {
    top: "bottom-full left-1/2 transform -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 transform -translate-x-1/2 mt-2",
    left: "right-full top-1/2 transform -translate-y-1/2 mr-2",
    right: "left-full top-1/2 transform -translate-y-1/2 ml-2",
  };

  const arrowClasses = {
    top: "absolute w-2 h-2 bg-gray-800 rotate-45 left-1/2 -bottom-1 -translate-x-1/2",
    bottom: "absolute w-2 h-2 bg-gray-800 rotate-45 left-1/2 -top-1 -translate-x-1/2",
    left: "absolute w-2 h-2 bg-gray-800 rotate-45 right-1 -top-1/2 translate-y-1/2",
    right: "absolute w-2 h-2 bg-gray-800 rotate-45 left-1 -top-1/2 translate-y-1/2",
  };

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        className="relative"
      >
        {children}
      </div>
      {isVisible && (
        <div className={`absolute z-50 w-max max-w-xs px-2 py-1 text-xs text-white bg-gray-800 rounded-md ${positionClasses[position]}`}>
          {content}
          <div className={arrowClasses[position]} />
        </div>
      )}
    </div>
  );
};