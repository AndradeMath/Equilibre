type BrandLeafProps = {
  className?: string;
};

export function BrandLeaf({ className = "" }: BrandLeafProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 120 140"
      fill="none"
      className={`brand-leaf ${className}`}
    >
      <path
        d="M58 127c3-30 3-51 1-81"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
      />
      <path
        d="M56 70C26 70 13 51 15 20c27-1 48 10 47 43"
        fill="currentColor"
      />
      <path
        d="M60 52C59 25 76 8 108 7c1 31-13 51-45 54"
        fill="currentColor"
      />
      <path
        d="M25 29c13 6 22 15 31 30m42-42C82 26 72 37 63 55"
        stroke="#fff8f4"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity=".88"
      />
      <path
        d="M58 69c-2 23-2 38 0 56"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
