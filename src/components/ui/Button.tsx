import Link from "next/link";
import { cn } from "@/lib/cn";

const variants = {
  primary:
    "bg-violet text-white hover:bg-violet-deep focus-visible:outline-violet-deep",
  secondary:
    "bg-white text-graphite border border-lavender-strong hover:bg-lavender",
  ghost: "bg-transparent text-graphite hover:bg-lavender",
  inverse: "bg-white text-graphite hover:bg-lavender",
  outlineDark:
    "bg-transparent text-white border border-white/35 hover:bg-white/10",
} as const;

type CommonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: keyof typeof variants;
};

type ButtonAsButton = CommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className"> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps & { href: string };

export function Button({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonAsButton | ButtonAsLink) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold tracking-tight transition",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
    variants[variant],
    className,
  );

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
