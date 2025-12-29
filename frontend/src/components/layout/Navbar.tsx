import React from 'react';
import { Menu, Search, Bell, Sun, Moon, Plus } from 'lucide-react';
import { useDarkMode } from '../../hooks/useDarkMode';
import { Button } from '../ui/Button';
interface NavbarProps {
  onMenuClick: () => void;
}
export function Navbar({
  onMenuClick
}: NavbarProps) {
  const {
    isDark,
    toggle
  } = useDarkMode();
  return <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 sm:px-6 lg:px-8">
      <div className="flex items-center gap-4">
        <button type="button" className="lg:hidden -ml-2 p-2 text-slate-500 hover:text-slate-700 dark:text-slate-400" onClick={onMenuClick}>
          <Menu className="h-6 w-6" />
        </button>

        <div className="hidden md:flex relative max-w-md w-full">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Search className="h-5 w-5 text-slate-400" />
          </div>
          <input type="text" className="block w-full rounded-md border-0 py-1.5 pl-10 pr-3 text-slate-900 ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6 dark:bg-slate-900 dark:ring-slate-700 dark:text-white" placeholder="Search students, tutors..." />
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        <Button size="sm" className="hidden sm:flex" leftIcon={<Plus className="h-4 w-4" />}>
          Create Session
        </Button>
        <button className="sm:hidden p-2 text-primary-600 bg-primary-50 rounded-full">
          <Plus className="h-5 w-5" />
        </button>

        <div className="h-6 w-px bg-slate-200 dark:bg-slate-700 mx-1" />

        <button onClick={toggle} className="p-2 text-slate-500 hover:bg-slate-100 rounded-full dark:text-slate-400 dark:hover:bg-slate-700 transition-colors" aria-label="Toggle dark mode">
          {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </button>

        <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full dark:text-slate-400 dark:hover:bg-slate-700 transition-colors relative">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-slate-800" />
        </button>
      </div>
    </header>;
}