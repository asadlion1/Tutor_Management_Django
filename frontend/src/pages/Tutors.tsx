import React, { useEffect, useState } from 'react';
import { Plus, Search, MoreHorizontal, Star } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Table } from '../components/ui/Table';
import { Badge } from '../components/ui/Badge';
import { getTutors } from '../api/tutors';
import { Tutor } from '../types';
export function Tutors() {
  const [tutors, setTutors] = useState<Tutor[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchTutors = async () => {
      try {
        const data = await getTutors();
        setTutors(data);
      } catch (error) {
        console.error('Failed to fetch tutors', error);
      } finally {
        setLoading(false);
      }
    };
    fetchTutors();
  }, []);
  const columns = [{
    header: 'Name',
    accessor: (t: Tutor) => <div>
          <div className="font-medium text-slate-900 dark:text-white">
            {t.name}
          </div>
          <div className="text-xs text-slate-500">{t.email}</div>
        </div>
  }, {
    header: 'Subjects',
    accessor: (t: Tutor) => <div className="flex flex-wrap gap-1">
          {t.subjects.map(s => <span key={s} className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-300">
              {s}
            </span>)}
        </div>
  }, {
    header: 'Rate',
    accessor: (t: Tutor) => `$${t.hourlyRate}/hr`
  }, {
    header: 'Total Hours',
    accessor: 'totalHours'
  }, {
    header: 'Status',
    accessor: (t: Tutor) => <Badge variant={t.status === 'active' ? 'success' : t.status === 'on-leave' ? 'warning' : 'neutral'}>
          {t.status.replace('-', ' ')}
        </Badge>
  }, {
    header: 'Actions',
    accessor: () => <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
          <MoreHorizontal className="h-5 w-5" />
        </button>
  }];
  return <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
            Tutors
          </h1>
          <p className="text-slate-500 dark:text-slate-400">
            Manage tutor profiles and availability.
          </p>
        </div>
        <Button leftIcon={<Plus className="h-4 w-4" />}>Add Tutor</Button>
      </div>

      <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
        <Input placeholder="Search tutors..." icon={<Search className="h-4 w-4" />} />
      </div>

      <Table data={tutors} columns={columns} keyField="id" isLoading={loading} />
    </div>;
}