import { mockTutors } from './mockData';
import { Tutor } from '../types';
export const getTutors = async (): Promise<Tutor[]> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockTutors;
};