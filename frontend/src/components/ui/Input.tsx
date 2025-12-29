import React from 'react';
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}
export function Input({
  label,
  error,
  icon,
  className = '',
  id,
  ...props
}: InputProps) {
  const inputId = id || props.name || Math.random().toString(36).substr(2, 9);
  return <div className="w-full">
      {label && <label htmlFor={inputId} className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
          {label}
        </label>}
      <div className="relative">
        {icon && <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
            {icon}
          </div>}
        <input id={inputId} className={`
            block w-full rounded-md border-slate-300 dark:border-slate-600 
            bg-white dark:bg-slate-800 text-slate-900 dark:text-white
            shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm
            disabled:bg-slate-50 disabled:text-slate-500 dark:disabled:bg-slate-900
            ${icon ? 'pl-10' : 'pl-3'} 
            ${error ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : ''}
            ${className}
          `} {...props} />
      </div>
      {error && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{error}</p>}
    </div>;
}