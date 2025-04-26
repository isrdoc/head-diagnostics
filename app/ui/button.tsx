import clsx from "clsx";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  href?: string;
}

export function Button({ children, className, href, ...rest }: ButtonProps) {
  const baseStyles =
    "inline-flex items-center text-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-bold text-white bg-[#6276B7] hover:bg-[#7286C7] transition-colors";

  if (href) {
    return (
      <Link href={href} className={clsx(baseStyles, className)}>
        {children}
      </Link>
    );
  }

  return (
    <button {...rest} className={clsx(baseStyles, className)}>
      {children}
    </button>
  );
}
