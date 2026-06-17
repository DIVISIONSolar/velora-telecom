export default function LogoMark({ size = 28 }: { size?: number }) {
  const height = Math.round(size * 0.9);
  return (
    <svg width={size} height={height} viewBox="0 0 100 90" fill="none" aria-hidden="true">
      <path d="M14 12 L47 64" stroke="#F0F4FF" strokeWidth="14" strokeLinecap="round" />
      <circle cx="47" cy="68" r="6" fill="#00C2FF" />
      <rect x="55" y="48" width="11" height="16" rx="4" fill="#00C2FF" />
      <rect x="71" y="32" width="11" height="32" rx="4" fill="#00C2FF" />
      <rect x="87" y="12" width="11" height="52" rx="4" fill="#00C2FF" />
    </svg>
  );
}
