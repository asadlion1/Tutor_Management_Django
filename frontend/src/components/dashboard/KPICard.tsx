import React from 'react';
import { Card } from '../ui/Card';
import { BoxIcon } from 'lucide-react';
interface KPICardProps {
  title: string;
  value: string | number;
  icon: BoxIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  color?: 'primary' | 'green' | 'blue' | 'purple' | 'orange';
}
export function KPICard({
  title,
  value,
  icon: Icon,
  trend,
  color = 'primary'
}: KPICardProps) {
  const colorClasses = {
    primary: 'bg-primary-50 text-primary-600 dark:bg-primary-900/20 dark:text-primary-400',
    green: 'bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400',
    blue: 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400',
    purple: 'bg-purple-50 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400',
    orange: 'bg-orange-50 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400'
  };
  return <Card className="flex items-start justify-between">
      <div>
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
          {title}
        </p>
        <h3 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">
          {value}
        </h3>
        {trend && <p className={`mt-2 text-sm flex items-center ${trend.isPositive ? 'text-green-600' : 'text-red-600'}`}>
            <span className="font-medium">
              {trend.isPositive ? '+' : ''}
              {trend.value}%
            </span>
            <span className="ml-1 text-slate-500 dark:text-slate-400">
              from last month
            </span>
          </p>}
      </div>
      <div className={`p-3 rounded-lg ${colorClasses[color]}`}>
        <Icon className="h-6 w-6" />
      </div>
    </Card>;
}