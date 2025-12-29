import { mockStudents } from './mockData';
import { Student } from '../types';
export const getStudents = async (): Promise<Student[]> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockStudents;
};
export const getStudent = async (id: string): Promise<Student | undefined> => {
  await new Promise(resolve => setTimeout(resolve, 300));
  return mockStudents.find(s => s.id === id);
};