import type { ReactNode } from "react";

interface CheckboxProps {
  id: string;
  checked: boolean;
  onChange: () => void;
  children: ReactNode;
  className?: string;
}

export const Checkbox = ({
  id,
  checked,
  onChange,
  children,
  className = "",
}: CheckboxProps) => {
  return (
    <label htmlFor={id} className={`inline-flex items-center ${className}`}>
      <input
        id={id}
        type="checkbox"
        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        checked={checked}
        onChange={onChange}
      />
      <span className="ml-2 text-sm text-gray-700">{children}</span>
    </label>
  );
};
