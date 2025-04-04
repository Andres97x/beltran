import { ClassValue } from './types';

function classNames(...args: ClassValue[]): string {
  return args
    .flatMap(arg => {
      if (typeof arg === 'string') return arg;
      if (Array.isArray(arg)) return classNames(...arg);
      if (arg && typeof arg === 'object') {
        return Object.entries(arg)
          .filter(([_, value]) => Boolean(value))
          .map(([key]) => key);
      }
      return [];
    })
    .filter(Boolean)
    .join(' ');
}

export default classNames;
