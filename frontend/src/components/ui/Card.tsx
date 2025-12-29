import React from 'react';
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  noPadding?: boolean;
}
export function Card({
  children,
  className = '',
  noPadding = false,
  ...props
}: CardProps) {
  return <div className={`bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm ${noPadding ? '' : 'p-6'} ${className}`} {...props}>
      {children}
    </div>;
}