import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, GraduationCap, Calendar, ClipboardCheck, CreditCard, BarChart3, Settings, X } from 'lucide-react';
interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}
export function Sidebar({
  isOpen,
  onClose
}: SidebarProps) {
  const navigation = [{
    name: 'Dashboard',
    href: '/',
    icon: LayoutDashboard
  }, {
    name: 'Students',
    href: '/students',
    icon: Users
  }, {
    name: 'Tutors',
    href: '/tutors',
    icon: GraduationCap
  }, {
    name: 'Sessions',
    href: '/sessions',
    icon: Calendar
  }, {
    name: 'Attendance',
    href: '/attendance',
    icon: ClipboardCheck
  }, {
    name: 'Payments',
    href: '/payments',
    icon: CreditCard
  }, {
    name: 'Reports',
    href: '/reports',
    icon: BarChart3
  }, {
    name: 'Settings',
    href: '/settings',
    icon: Settings
  }];
  return <>
      {/* Mobile overlay */}
      <div className={`fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-sm transition-opacity lg:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={onClose} />

      {/* Sidebar container */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 transform bg-white dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700 transition-transform duration-200 ease-in-out lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex h-16 items-center justify-between px-6 border-b border-slate-200 dark:border-slate-700">
          <span className="text-xl font-bold text-primary-600 dark:text-primary-400">
            TutorMaster
          </span>
          <button onClick={onClose} className="lg:hidden text-slate-500 hover:text-slate-700 dark:text-slate-400">
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="flex-1 space-y-1 px-3 py-4 overflow-y-auto">
          {navigation.map(item => <NavLink key={item.name} to={item.href} onClick={() => window.innerWidth < 1024 && onClose()} className={({
          isActive
        }) => `
                group flex items-center px-3 py-2.5 text-sm font-medium rounded-md transition-colors
                ${isActive ? 'bg-primary-50 text-primary-700 dark:bg-primary-900/20 dark:text-primary-400' : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white'}
              `}>
              <item.icon className={`mr-3 h-5 w-5 flex-shrink-0 transition-colors
                  ${window.location.pathname === item.href ? 'text-primary-600 dark:text-primary-400' : 'text-slate-400 group-hover:text-slate-500 dark:text-slate-500 dark:group-hover:text-slate-300'}
                `} />
              {item.name}
            </NavLink>)}
        </nav>

        <div className="p-4 border-t border-slate-200 dark:border-slate-700">
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold">
              A
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-slate-700 dark:text-slate-200">
                Admin User
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                admin@tms.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </>;
}