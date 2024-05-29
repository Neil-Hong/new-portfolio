import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";


//from aceternity ui
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}