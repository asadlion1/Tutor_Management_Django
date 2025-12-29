import { Student, Tutor, Session, Payment, DashboardStats } from '../types';
export const mockStudents: Student[] = [{
  id: '1',
  name: 'Alex Johnson',
  email: 'alex.j@example.com',
  grade: '10th',
  subjects: ['Math', 'Physics'],
  parentName: 'Sarah Johnson',
  parentEmail: 'sarah.j@example.com',
  parentPhone: '555-0101',
  balance: 120.0,
  status: 'active',
  joinedDate: '2023-09-01'
}, {
  id: '2',
  name: 'Emily Davis',
  email: 'emily.d@example.com',
  grade: '8th',
  subjects: ['English', 'History'],
  parentName: 'Michael Davis',
  parentEmail: 'm.davis@example.com',
  parentPhone: '555-0102',
  balance: 0.0,
  status: 'active',
  joinedDate: '2023-10-15'
}, {
  id: '3',
  name: 'Ryan Wilson',
  email: 'ryan.w@example.com',
  grade: '11th',
  subjects: ['Chemistry', 'Math'],
  parentName: 'David Wilson',
  parentEmail: 'd.wilson@example.com',
  parentPhone: '555-0103',
  balance: -50.0,
  // Credit
  status: 'active',
  joinedDate: '2023-08-20'
}, {
  id: '4',
  name: 'Sophie Martinez',
  email: 'sophie.m@example.com',
  grade: '9th',
  subjects: ['Biology'],
  parentName: 'Elena Martinez',
  parentEmail: 'elena.m@example.com',
  parentPhone: '555-0104',
  balance: 240.0,
  status: 'inactive',
  joinedDate: '2023-01-10'
}];
export const mockTutors: Tutor[] = [{
  id: '1',
  name: 'Dr. James Smith',
  email: 'james.smith@tms.com',
  subjects: ['Math', 'Physics', 'Chemistry'],
  hourlyRate: 60,
  status: 'active',
  availability: ['Mon 14-18', 'Wed 14-18', 'Fri 14-18'],
  totalHours: 145
}, {
  id: '2',
  name: 'Sarah Connor',
  email: 'sarah.c@tms.com',
  subjects: ['English', 'History'],
  hourlyRate: 45,
  status: 'active',
  availability: ['Tue 10-16', 'Thu 10-16'],
  totalHours: 89
}, {
  id: '3',
  name: 'Michael Chang',
  email: 'm.chang@tms.com',
  subjects: ['Math', 'Computer Science'],
  hourlyRate: 55,
  status: 'on-leave',
  availability: ['Sat 9-14'],
  totalHours: 210
}];
export const mockSessions: Session[] = [{
  id: '1',
  studentId: '1',
  studentName: 'Alex Johnson',
  tutorId: '1',
  tutorName: 'Dr. James Smith',
  subject: 'Math',
  startTime: new Date(new Date().setHours(14, 0, 0, 0)).toISOString(),
  // Today 2pm
  durationMinutes: 60,
  status: 'scheduled',
  location: 'center'
}, {
  id: '2',
  studentId: '2',
  studentName: 'Emily Davis',
  tutorId: '2',
  tutorName: 'Sarah Connor',
  subject: 'English',
  startTime: new Date(new Date().setHours(16, 30, 0, 0)).toISOString(),
  // Today 4:30pm
  durationMinutes: 90,
  status: 'scheduled',
  location: 'online'
}, {
  id: '3',
  studentId: '3',
  studentName: 'Ryan Wilson',
  tutorId: '1',
  tutorName: 'Dr. James Smith',
  subject: 'Chemistry',
  startTime: new Date(Date.now() - 86400000).toISOString(),
  // Yesterday
  durationMinutes: 60,
  status: 'completed',
  location: 'center',
  notes: 'Covered stoichiometry basics.'
}];
export const mockPayments: Payment[] = [{
  id: '1',
  studentId: '1',
  studentName: 'Alex Johnson',
  amount: 240,
  date: '2023-11-01',
  method: 'credit_card',
  status: 'paid',
  reference: 'INV-2023-001'
}, {
  id: '2',
  studentId: '2',
  studentName: 'Emily Davis',
  amount: 180,
  date: '2023-11-03',
  method: 'bank_transfer',
  status: 'paid',
  reference: 'INV-2023-002'
}];
export const mockStats: DashboardStats = {
  activeStudents: 42,
  sessionsThisWeek: 156,
  hoursDelivered: 480,
  revenueMonth: 12450
};