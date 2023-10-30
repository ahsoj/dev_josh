import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export default function twmesh(...classValue: ClassValue[]) {
  return twMerge(clsx(classValue));
}
