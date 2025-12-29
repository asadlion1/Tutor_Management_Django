import React from 'react';
interface Column<T> {
  header: string;
  accessor: keyof T | ((item: T) => React.ReactNode);
  className?: string;
}
interface TableProps<T> {
  data: T[];
  columns: Column<T>[];
  keyField: keyof T;
  onRowClick?: (item: T) => void;
  isLoading?: boolean;
}
export function Table<T>({
  data,
  columns,
  keyField,
  onRowClick,
  isLoading
}: TableProps<T>) {
  if (isLoading) {
    return <div className="w-full p-8 text-center text-slate-500 dark:text-slate-400">
        Loading data...
      </div>;
  }
  if (data.length === 0) {
    return <div className="w-full p-8 text-center text-slate-500 dark:text-slate-400">
        No data available
      </div>;
  }
  return <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-700">
      <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-700">
        <thead className="bg-slate-50 dark:bg-slate-800">
          <tr>
            {columns.map((col, index) => <th key={index} scope="col" className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400 ${col.className || ''}`}>
                {col.header}
              </th>)}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200 dark:divide-slate-700 bg-white dark:bg-slate-900">
          {data.map(item => <tr key={String(item[keyField])} onClick={() => onRowClick && onRowClick(item)} className={onRowClick ? 'cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors' : ''}>
              {columns.map((col, index) => <td key={index} className={`px-6 py-4 whitespace-nowrap text-sm text-slate-900 dark:text-slate-200 ${col.className || ''}`}>
                  {typeof col.accessor === 'function' ? col.accessor(item) : item[col.accessor] as React.ReactNode}
                </td>)}
            </tr>)}
        </tbody>
      </table>
    </div>;
}