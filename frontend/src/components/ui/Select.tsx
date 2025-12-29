import React from 'react';
interface SelectOption {
  value: string;
  label: string;
}
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: SelectOption[];
  error?: string;
}
export function Select({
  label,
  options,
  error,
  className = '',
  id,
  ...props
}: SelectProps) {
  const selectId = id || props.name || Math.random().toString(36).substr(2, 9);
  return <div className="w-full">
      {label && <label htmlFor={selectId} className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
          {label}
        </label>}
      <select id={selectId} className={`
          block w-full rounded-md border-slate-300 dark:border-slate-600 
          bg-white dark:bg-slate-800 text-slate-900 dark:text-white
          shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm
          ${error ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : ''}
          ${className}
        `} {...props}>
        {options.map(option => <option key={option.value} value={option.value}>
            {option.label}
          </option>)}
      </select>
      {error && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{error}</p>}
    </div>;
}