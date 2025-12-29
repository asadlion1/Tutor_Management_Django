import React, { useState } from 'react';
import { Plus, ChevronLeft, ChevronRight, Calendar as CalendarIcon, List } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { mockSessions } from '../api/mockData';
export function Sessions() {
  const [view, setView] = useState<'calendar' | 'list'>('calendar');
  const [currentDate, setCurrentDate] = useState(new Date());
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const timeSlots = Array.from({
    length: 11
  }, (_, i) => i + 9); // 9am to 7pm
  return <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
            Sessions
          </h1>
          <p className="text-slate-500 dark:text-slate-400">
            Schedule and manage tutoring sessions.
          </p>
        </div>
        <div className="flex gap-2">
          <div className="flex bg-slate-100 dark:bg-slate-800 rounded-lg p-1">
            <button onClick={() => setView('calendar')} className={`p-2 rounded-md text-sm font-medium transition-colors ${view === 'calendar' ? 'bg-white dark:bg-slate-700 shadow-sm text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400'}`}>
              <CalendarIcon className="h-4 w-4" />
            </button>
            <button onClick={() => setView('list')} className={`p-2 rounded-md text-sm font-medium transition-colors ${view === 'list' ? 'bg-white dark:bg-slate-700 shadow-sm text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400'}`}>
              <List className="h-4 w-4" />
            </button>
          </div>
          <Button leftIcon={<Plus className="h-4 w-4" />}>
            Create Session
          </Button>
        </div>
      </div>

      {view === 'calendar' && <Card className="overflow-hidden" noPadding>
          <div className="p-4 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
              {currentDate.toLocaleDateString('en-US', {
            month: 'long',
            year: 'numeric'
          })}
            </h2>
            <div className="flex gap-1">
              <button className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded">
                <ChevronLeft className="h-5 w-5 text-slate-500" />
              </button>
              <button className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded">
                <ChevronRight className="h-5 w-5 text-slate-500" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-8 divide-x divide-slate-200 dark:divide-slate-700 border-b border-slate-200 dark:border-slate-700">
            <div className="p-2 text-center text-xs font-medium text-slate-500">
              Time
            </div>
            {days.map(day => <div key={day} className="p-2 text-center text-sm font-semibold text-slate-900 dark:text-white">
                {day}
              </div>)}
          </div>

          <div className="divide-y divide-slate-200 dark:divide-slate-700">
            {timeSlots.map(hour => <div key={hour} className="grid grid-cols-8 divide-x divide-slate-200 dark:divide-slate-700 min-h-[60px]">
                <div className="p-2 text-right text-xs text-slate-500">
                  {hour > 12 ? `${hour - 12} PM` : `${hour} AM`}
                </div>
                {days.map((_, i) => <div key={i} className="relative group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    {/* Placeholder for session blocks */}
                    {i === 1 && hour === 14 && <div className="absolute top-1 left-1 right-1 bottom-1 bg-primary-100 dark:bg-primary-900/40 border border-primary-200 dark:border-primary-800 rounded p-1 text-xs overflow-hidden cursor-pointer">
                        <div className="font-semibold text-primary-700 dark:text-primary-300">
                          Math
                        </div>
                        <div className="text-primary-600 dark:text-primary-400 truncate">
                          Alex J.
                        </div>
                      </div>}
                  </div>)}
              </div>)}
          </div>
        </Card>}

      {view === 'list' && <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
          <div className="p-8 text-center text-slate-500">
            List view implementation placeholder
          </div>
        </div>}
    </div>;
}