import { SelectHTMLAttributes } from 'react';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
}

export function Select({ label, className = '', children, ...props }: SelectProps) {
  return (
    <div>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <select
        className={`w-full p-2 border rounded-md focus:ring-2 focus:ring-primary/20 focus:border-primary ${className}`}
        {...props}
      >
        {children}
      </select>
    </div>
  );
}