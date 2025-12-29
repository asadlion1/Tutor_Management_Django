import React, { useEffect } from 'react';
import { X } from 'lucide-react';
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}
export function Modal({
  isOpen,
  onClose,
  title,
  children,
  maxWidth = 'md'
}: ModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);
  if (!isOpen) return null;
  const maxWidthClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl'
  };
  return <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4 text-center sm:p-0">
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity" onClick={onClose} aria-hidden="true" />

        <div className={`relative transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 text-left shadow-xl transition-all sm:my-8 w-full ${maxWidthClasses[maxWidth]}`}>
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-700 px-4 py-3 sm:px-6">
            <h3 className="text-lg font-medium leading-6 text-slate-900 dark:text-white">
              {title}
            </h3>
            <button type="button" className="rounded-md bg-white dark:bg-slate-800 text-slate-400 hover:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2" onClick={onClose}>
              <span className="sr-only">Close</span>
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          <div className="px-4 py-5 sm:p-6">{children}</div>
        </div>
      </div>
    </div>;
}