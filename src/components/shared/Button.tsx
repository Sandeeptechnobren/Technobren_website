import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { clsx } from "clsx";
import { ArrowRight } from "./ArrowRight";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-semibold transition-all duration-300 h-[46px] text-base",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-white border border-transparent rounded-[30px] px-[30px] hover:bg-transparent hover:text-primary hover:border-primary",
        link: "bg-transparent text-primary px-0",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

type CommonProps = VariantProps<typeof buttonVariants> & {
  children: React.ReactNode;
  className?: string;
  withArrow?: boolean;
};

type LinkBtnProps = CommonProps & {
  href: string;
  type?: never;
  onClick?: never;
  disabled?: never;
};

type ButtonBtnProps = CommonProps & {
  href?: never;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
};

type ButtonProps = LinkBtnProps | ButtonBtnProps;

export function Button({
  variant,
  className,
  withArrow = true,
  children,
  ...props
}: ButtonProps) {
  const cls = clsx(buttonVariants({ variant }), className);
  const content = (
    <>
      {children}
      {withArrow && <ArrowRight className="w-5 ml-2.5" />}
    </>
  );

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={cls}>
        {content}
      </Link>
    );
  }
  return (
    <button
      type={props.type ?? "button"}
      onClick={props.onClick}
      disabled={props.disabled}
      className={cls}
    >
      {content}
    </button>
  );
}
