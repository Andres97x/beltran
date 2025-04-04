export type ClassValue =
  | string
  | null
  | undefined
  | boolean
  | { [key: string]: boolean | undefined | null }
  | ClassValue[]; // Allow nested arrays of ClassValue
