"use client";

import type { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "secondary-light";

interface BaseButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
}

type ButtonAsButton = BaseButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type ButtonAsLink = BaseButtonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-moss text-cream border-transparent hover:bg-forest shadow-sm hover:shadow-md",
  secondary:
    "bg-transparent text-moss border-moss/80 hover:bg-moss hover:text-cream hover:border-moss",
  "secondary-light":
    "bg-transparent text-cream border-cream/30 hover:bg-cream/10 hover:border-cream/50 hover:text-cream",
};

export function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const isDisabled =
    "disabled" in props && (props as ButtonAsButton).disabled;

  const baseClasses = `inline-flex items-center justify-center rounded-lg border px-6 py-3 text-sm font-medium transition-all duration-200 cursor-pointer ${variantClasses[variant]} ${isDisabled ? "opacity-50 cursor-not-allowed pointer-events-none" : "hover:scale-[1.02] active:scale-[0.98]"} ${className}`;

  if ("href" in props && props.href) {
    const { href, ...rest } = props as ButtonAsLink;
    return (
      <a href={href} className={baseClasses} {...rest}>
        {children}
      </a>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button className={baseClasses} {...buttonProps}>
      {children}
    </button>
  );
}
