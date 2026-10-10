// آیکون‌های خطی سبک برای بخش امکانات افزونهٔ تماشاگاه
const paths = {
  layers: (
    <>
      <path d="M12 3 3 8l9 5 9-5-9-5Z" />
      <path d="M3 13l9 5 9-5" />
    </>
  ),
  sparkle: (
    <>
      <path d="M12 3v6M12 15v6M3 12h6M15 12h6" />
      <path d="M12 9.5 12.8 11l1.5.8-1.5.8-.8 1.5-.8-1.5L9.7 12l1.5-.8L12 9.5Z" />
    </>
  ),
  video: (
    <>
      <rect x="3" y="6" width="13" height="12" rx="2.5" />
      <path d="m16 10 5-3v10l-5-3" />
    </>
  ),
  window: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2.5" />
      <path d="M3 9h18" />
      <circle cx="6.5" cy="6.5" r="0.6" fill="currentColor" />
    </>
  ),
  play: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M10 8.5 16 12l-6 3.5v-7Z" fill="currentColor" stroke="none" />
    </>
  ),
  filter: <path d="M3 5h18l-7 8v6l-4-2v-4L3 5Z" />,
  grid: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2.5" />
      <path d="M3 12h18M12 4v16" />
    </>
  ),
  expand: <path d="M4 9V5a1 1 0 0 1 1-1h4M20 15v4a1 1 0 0 1-1 1h-4M15 4h4a1 1 0 0 1 1 1v4M9 20H5a1 1 0 0 1-1-1v-4" />,
  settings: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2.5v2M12 19.5v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M2.5 12h2M19.5 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
    </>
  ),
  seo: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m20 20-3.6-3.6" />
    </>
  ),
  ads: (
    <>
      <rect x="3" y="4" width="18" height="14" rx="2.5" />
      <path d="M7 9h5M7 13h8M16.5 9v4" />
    </>
  ),
  palette: (
    <>
      <path d="M12 3a9 9 0 1 0 0 18c1.2 0 1.8-.9 1.8-1.8 0-.5-.2-.9-.5-1.3-.3-.4-.5-.8-.5-1.3 0-.9.8-1.6 1.7-1.6H16a5 5 0 0 0 5-5c0-3.9-4-7-9-7Z" />
      <circle cx="7.5" cy="12" r="1" fill="currentColor" stroke="none" />
      <circle cx="10" cy="8" r="1" fill="currentColor" stroke="none" />
      <circle cx="14.5" cy="7.5" r="1" fill="currentColor" stroke="none" />
    </>
  ),
}

export default function Icon({ name, size = 22 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name] || paths.sparkle}
    </svg>
  )
}
