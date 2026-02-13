export function LogoMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Stylised tree / wood grain mark */}
      <rect x="4" y="22" width="24" height="3" rx="1.5" fill="currentColor" opacity="0.3" />
      <path
        d="M16 3L8 14h5v6H7l9 6 9-6h-6v-6h5L16 3z"
        fill="currentColor"
      />
    </svg>
  );
}
