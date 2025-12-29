import { mockStats, mockSessions } from './mockData';
import { DashboardStats, Session } from '../types';
export const getDashboardStats = async (): Promise<DashboardStats> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockStats;
};
export const getTodaysSessions = async (): Promise<Session[]> => {
  await new Promise(resolve => setTimeout(resolve, 600));
  // In a real app, we would filter by date. Here we just return mock sessions.
  return mockSessions;
};