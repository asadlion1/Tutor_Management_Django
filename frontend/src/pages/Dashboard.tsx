import React, { useEffect, useState } from 'react';
import { Users, Calendar, Clock, DollarSign, Plus, UserPlus } from 'lucide-react';
import { KPICard } from '../components/dashboard/KPICard';
import { TodaysSessions } from '../components/dashboard/TodaysSessions';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { getDashboardStats, getTodaysSessions } from '../api/dashboard';
import { DashboardStats, Session } from '../types';
export function Dashboard() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [sessions, setSessions] = useState<Session[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [statsData, sessionsData] = await Promise.all([getDashboardStats(), getTodaysSessions()]);
        setStats(statsData);
        setSessions(sessionsData);
      } catch (error) {
        console.error('Failed to fetch dashboard data', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  if (loading) {
    return <div className="flex justify-center items-center h-96">
        Loading dashboard...
      </div>;
  }
  return <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
            Dashboard
          </h1>
          <p className="text-slate-500 dark:text-slate-400">
            Welcome back, here's what's happening today.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" leftIcon={<UserPlus className="h-4 w-4" />}>
            Add Student
          </Button>
          <Button size="sm" leftIcon={<Plus className="h-4 w-4" />}>
            New Session
          </Button>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <KPICard title="Active Students" value={stats?.activeStudents || 0} icon={Users} color="blue" trend={{
        value: 12,
        isPositive: true
      }} />
        <KPICard title="Sessions This Week" value={stats?.sessionsThisWeek || 0} icon={Calendar} color="purple" trend={{
        value: 4,
        isPositive: true
      }} />
        <KPICard title="Hours Delivered" value={stats?.hoursDelivered || 0} icon={Clock} color="orange" trend={{
        value: 2,
        isPositive: false
      }} />
        <KPICard title="Revenue (Month)" value={`$${stats?.revenueMonth.toLocaleString()}`} icon={DollarSign} color="green" trend={{
        value: 8,
        isPositive: true
      }} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Chart Area - Placeholder for now */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="min-h-[300px] flex flex-col">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
              Revenue Overview
            </h3>
            <div className="flex-1 flex items-end justify-between gap-2 px-2">
              {/* Simple CSS Bar Chart Placeholder */}
              {[40, 65, 45, 80, 55, 70, 90, 60, 75, 85, 95, 80].map((h, i) => <div key={i} className="w-full bg-primary-100 dark:bg-primary-900/30 rounded-t-sm relative group">
                  <div className="absolute bottom-0 left-0 right-0 bg-primary-500 rounded-t-sm transition-all duration-500 hover:bg-primary-600" style={{
                height: `${h}%`
              }}></div>
                  <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs py-1 px-2 rounded pointer-events-none">
                    ${h * 100}
                  </div>
                </div>)}
            </div>
            <div className="flex justify-between mt-2 text-xs text-slate-500">
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>May</span>
              <span>Jun</span>
              <span>Jul</span>
              <span>Aug</span>
              <span>Sep</span>
              <span>Oct</span>
              <span>Nov</span>
              <span>Dec</span>
            </div>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
              Quick Actions
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <button className="p-4 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/10 transition-all text-center group">
                <UserPlus className="h-6 w-6 mx-auto mb-2 text-slate-400 group-hover:text-primary-600" />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-primary-700">
                  Add Student
                </span>
              </button>
              <button className="p-4 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/10 transition-all text-center group">
                <Users className="h-6 w-6 mx-auto mb-2 text-slate-400 group-hover:text-primary-600" />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-primary-700">
                  Add Tutor
                </span>
              </button>
              <button className="p-4 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/10 transition-all text-center group">
                <Calendar className="h-6 w-6 mx-auto mb-2 text-slate-400 group-hover:text-primary-600" />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-primary-700">
                  Schedule
                </span>
              </button>
              <button className="p-4 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/10 transition-all text-center group">
                <DollarSign className="h-6 w-6 mx-auto mb-2 text-slate-400 group-hover:text-primary-600" />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-primary-700">
                  Payment
                </span>
              </button>
            </div>
          </Card>
        </div>

        {/* Sidebar Column */}
        <div className="space-y-6">
          <TodaysSessions sessions={sessions} />
        </div>
      </div>
    </div>;
}