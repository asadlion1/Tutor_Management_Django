import React from 'react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Session } from '../../types';
import { Clock, User, BookOpen } from 'lucide-react';
interface TodaysSessionsProps {
  sessions: Session[];
}
export function TodaysSessions({
  sessions
}: TodaysSessionsProps) {
  const formatTime = (isoString: string) => {
    return new Date(isoString).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit'
    });
  };
  return <Card className="h-full">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Today's Sessions
        </h3>
        <a href="/sessions" className="text-sm text-primary-600 hover:text-primary-700 font-medium">
          View all
        </a>
      </div>

      <div className="space-y-4">
        {sessions.length === 0 ? <p className="text-slate-500 text-center py-4">
            No sessions scheduled for today.
          </p> : sessions.map(session => <div key={session.id} className="flex items-start p-3 rounded-lg border border-slate-100 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
              <div className="flex-shrink-0 w-16 text-center pt-1">
                <span className="block text-sm font-bold text-slate-900 dark:text-white">
                  {formatTime(session.startTime)}
                </span>
                <span className="text-xs text-slate-500">
                  {session.durationMinutes}m
                </span>
              </div>

              <div className="ml-4 flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-medium text-slate-900 dark:text-white">
                    {session.studentName}
                  </h4>
                  <Badge variant={session.status === 'completed' ? 'success' : session.status === 'scheduled' ? 'default' : 'neutral'}>
                    {session.status}
                  </Badge>
                </div>

                <div className="mt-1 flex items-center space-x-4 text-xs text-slate-500 dark:text-slate-400">
                  <div className="flex items-center">
                    <User className="mr-1 h-3 w-3" />
                    {session.tutorName}
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="mr-1 h-3 w-3" />
                    {session.subject}
                  </div>
                </div>
              </div>
            </div>)}
      </div>
    </Card>;
}