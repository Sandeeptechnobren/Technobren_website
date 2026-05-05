type Props = {
  children: React.ReactNode;
  className?: string;
};

export function Eyebrow({ children, className = "" }: Props) {
  return <span className={"eyebrow " + className}>{children}</span>;
}
