import React, { forwardRef, InputHTMLAttributes } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}
const Input = forwardRef<HTMLInputElement, InputProps>(({
  className,
  type,
  label,
  error,
  ...props
}, ref) => {
  return <div className="w-full space-y-2">
        {label && <label className="text-xs font-medium text-zinc-400 uppercase tracking-wider">
            {label}
          </label>}
        <input type={type} className={cn('flex h-12 w-full border border-zinc-800 bg-zinc-950 px-4 py-2 text-sm text-zinc-100 ring-offset-black file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-500 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200', error && 'border-red-900 focus-visible:ring-red-900', className)} ref={ref} {...props} />
        {error && <p className="text-xs text-red-500">{error}</p>}
      </div>;
});
Input.displayName = 'Input';
export { Input };