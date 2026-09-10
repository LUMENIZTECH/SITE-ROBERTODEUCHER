type Props = { className?: string; tone?: "navy" | "light" };

export function LogoMark({ className = "h-10 w-10", tone = "navy" }: Props) {
  return <img src="/img/logo-mark.png" alt="" className={className} aria-hidden="true" />;
}

export function Logo({
  className = "h-16 w-16",
  withBackground = false,
}: {
  tone?: "navy" | "light";
  className?: string;
  withBackground?: boolean;
}) {
  return (
    <img
      src={withBackground ? "/img/logo-white.png" : "/img/logo-transparent.png"}
      alt="Roberto Deucher — mão de obras e construção civil"
      className={className}
    />
  );
}
