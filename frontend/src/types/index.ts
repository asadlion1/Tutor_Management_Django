export interface Student {
  id: string;
  name: string;
  email: string;
  grade: string;
  subjects: string[];
  parentName: string;
  parentEmail: string;
  parentPhone: string;
  balance: number;
  status: 'active' | 'inactive';
  joinedDate: string;
}
export interface Tutor {
  id: string;
  name: string;
  email: string;
  subjects: string[];
  hourlyRate: number;
  status: 'active' | 'inactive' | 'on-leave';
  availability: string[]; // e.g., "Mon 9-5"
  totalHours: number;
}
export interface Session {
  id: string;
  studentId: string;
  studentName: string;
  tutorId: string;
  tutorName: string;
  subject: string;
  startTime: string; // ISO string
  durationMinutes: number;
  status: 'scheduled' | 'completed' | 'cancelled' | 'no-show';
  location: 'online' | 'center';
  notes?: string;
}
export interface Payment {
  id: string;
  studentId: string;
  studentName: string;
  amount: number;
  date: string;
  method: 'credit_card' | 'bank_transfer' | 'cash';
  status: 'paid' | 'pending' | 'failed';
  reference?: string;
}
export interface DashboardStats {
  activeStudents: number;
  sessionsThisWeek: number;
  hoursDelivered: number;
  revenueMonth: number;
}