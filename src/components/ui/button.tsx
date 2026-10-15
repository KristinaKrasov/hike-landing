import type { ButtonHTMLAttributes } from "react";

export function Button({ className = "", ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground disabled:cursor-not-allowed disabled:opacity-60 [&_svg]:size-4 ${className}`}
      {...props}
    />
  );
}
