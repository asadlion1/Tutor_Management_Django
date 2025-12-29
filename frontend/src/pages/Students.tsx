import React, { useEffect, useState } from 'react';
import { Plus, Search, Filter, MoreHorizontal } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Table } from '../components/ui/Table';
import { Badge } from '../components/ui/Badge';
import { getStudents } from '../api/students';
import { Student } from '../types';
export function Students() {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const data = await getStudents();
        setStudents(data);
      } catch (error) {
        console.error('Failed to fetch students', error);
      } finally {
        setLoading(false);
      }
    };
    fetchStudents();
  }, []);
  const filteredStudents = students.filter(student => student.name.toLowerCase().includes(searchTerm.toLowerCase()) || student.email.toLowerCase().includes(searchTerm.toLowerCase()));
  const columns = [{
    header: 'Name',
    accessor: (s: Student) => <div>
          <div className="font-medium text-slate-900 dark:text-white">
            {s.name}
          </div>
          <div className="text-xs text-slate-500">{s.email}</div>
        </div>
  }, {
    header: 'Grade',
    accessor: 'grade'
  }, {
    header: 'Subjects',
    accessor: (s: Student) => s.subjects.join(', ')
  }, {
    header: 'Parent',
    accessor: (s: Student) => <div>
          <div className="text-sm text-slate-900 dark:text-slate-200">
            {s.parentName}
          </div>
          <div className="text-xs text-slate-500">{s.parentPhone}</div>
        </div>
  }, {
    header: 'Balance',
    accessor: (s: Student) => <span className={s.balance > 0 ? 'text-red-600 font-medium' : 'text-green-600 font-medium'}>
          ${s.balance.toFixed(2)}
        </span>
  }, {
    header: 'Status',
    accessor: (s: Student) => <Badge variant={s.status === 'active' ? 'success' : 'neutral'}>
          {s.status}
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
            Students
          </h1>
          <p className="text-slate-500 dark:text-slate-400">
            Manage your students and enrollments.
          </p>
        </div>
        <Button leftIcon={<Plus className="h-4 w-4" />}>Add Student</Button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
        <div className="flex-1">
          <Input placeholder="Search students..." icon={<Search className="h-4 w-4" />} value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" leftIcon={<Filter className="h-4 w-4" />}>
            Filter
          </Button>
        </div>
      </div>

      <Table data={filteredStudents} columns={columns} keyField="id" isLoading={loading} />
    </div>;
}