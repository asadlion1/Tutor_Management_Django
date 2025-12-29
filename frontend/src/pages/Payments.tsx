import React from 'react';
import { Plus, Download, Filter } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Table } from '../components/ui/Table';
import { Badge } from '../components/ui/Badge';
import { Card } from '../components/ui/Card';
import { mockPayments } from '../api/mockData';
import { Payment } from '../types';
export function Payments() {
  const columns = [{
    header: 'Date',
    accessor: 'date'
  }, {
    header: 'Student',
    accessor: 'studentName'
  }, {
    header: 'Amount',
    accessor: (p: Payment) => `$${p.amount.toFixed(2)}`
  }, {
    header: 'Method',
    accessor: (p: Payment) => <span className="capitalize">{p.method.replace('_', ' ')}</span>
  }, {
    header: 'Reference',
    accessor: 'reference'
  }, {
    header: 'Status',
    accessor: (p: Payment) => <Badge variant={p.status === 'paid' ? 'success' : 'warning'}>
          {p.status}
        </Badge>
  }];
  return <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
            Payments
          </h1>
          <p className="text-slate-500 dark:text-slate-400">
            Track revenue and manage invoices.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" leftIcon={<Download className="h-4 w-4" />}>
            Export
          </Button>
          <Button leftIcon={<Plus className="h-4 w-4" />}>
            Record Payment
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-primary-500 to-primary-600 text-white border-none">
          <p className="text-primary-100 font-medium">Total Revenue (Month)</p>
          <h3 className="text-3xl font-bold mt-2">$12,450.00</h3>
          <p className="text-sm text-primary-100 mt-2">+15% from last month</p>
        </Card>
        <Card>
          <p className="text-slate-500 dark:text-slate-400 font-medium">
            Outstanding Balance
          </p>
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white mt-2">
            $3,240.00
          </h3>
          <p className="text-sm text-red-600 mt-2">12 students overdue</p>
        </Card>
        <Card>
          <p className="text-slate-500 dark:text-slate-400 font-medium">
            Average Transaction
          </p>
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white mt-2">
            $185.00
          </h3>
          <p className="text-sm text-slate-500 mt-2">Based on last 30 days</p>
        </Card>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
        <div className="p-4 border-b border-slate-200 dark:border-slate-700 flex gap-4">
          <Button variant="outline" size="sm" leftIcon={<Filter className="h-4 w-4" />}>
            Filter
          </Button>
        </div>
        <Table data={mockPayments} columns={columns} keyField="id" />
      </div>
    </div>;
}