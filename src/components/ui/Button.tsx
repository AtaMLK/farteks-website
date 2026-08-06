import Link from "next/link";
import { cn } from "../../lib/utils";
import { ButtonProps } from "../../types";

const variants = {
  primary: "bg-[#392B87] text-white hover:bg-[#2a1f63]",

  secondary: "bg-[#E5322D] text-white hover:bg-[#cc2a24]",

  outline:
    "border border-[#392B87] text-[#392B87] hover:bg-[#392B87] hover:text-white",
};

export function Button({
  children,
  href,
  variant = "primary",
  className,
  onClick,
}: ButtonProps) {
  const classes = cn(
    "inline-flex h-14 items-center justify-center rounded-2xl px-8 font-semibold transition-all duration-300",
    variants[variant],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
