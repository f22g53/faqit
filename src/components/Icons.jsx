import React from 'react'

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export const LogoIcon = (props) => (
  <svg className="logo-icon" width="32" height="32" viewBox="0 0 32 32" {...stroke} {...props}>
    <path d="M4 14 L16 5 L28 14" />
    <path d="M7 13 L7 27 L25 27 L25 13" />
    <line x1="13" y1="27" x2="13" y2="18" />
    <line x1="19" y1="18" x2="19" y2="27" />
    <line x1="13" y1="18" x2="19" y2="18" />
  </svg>
)

export const ArrowRight = ({ size = 18, ...props }) => (
  <svg className="arrow" width={size} height={size} viewBox="0 0 24 24" {...stroke} {...props}>
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
)

export const ArrowLeft = ({ size = 18, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...stroke} {...props}>
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
)

export const PhoneIcon = ({ size = 16, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...stroke} {...props}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)

export const MapPinIcon = ({ size = 15, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...stroke} {...props}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

export const BedIcon = ({ size = 16, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...stroke} {...props}>
    <path d="M2 4v16" />
    <path d="M2 8h18a2 2 0 0 1 2 2v10" />
    <path d="M2 17h20" />
    <path d="M6 8V4h8a2 2 0 0 1 2 2v2" />
  </svg>
)

export const BathIcon = ({ size = 16, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...stroke} {...props}>
    <path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.7 3 4 3.7 4 4.5V12" />
    <path d="M2 12h20v3a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-3z" />
    <path d="M6 19l-1 2M20 19l1 2" />
  </svg>
)

export const AreaIcon = ({ size = 16, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...stroke} {...props}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M3 9h18M9 3v18" />
  </svg>
)

export const HeartIcon = ({ size = 18, filled = false, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
)

export const CheckIcon = ({ size = 16, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...stroke} {...props}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

export const KeyIcon = ({ size = 28, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...stroke} {...props}>
    <circle cx="8" cy="15" r="4" />
    <path d="M10.85 12.15 19 4" />
    <path d="M18 5l2 2M15 8l2 2" />
  </svg>
)

export const CloseIcon = ({ size = 24, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...stroke} {...props}>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
)

export const HomeServiceIcon = (props) => (
  <svg className="service-card-icon" width="48" height="48" viewBox="0 0 48 48" {...stroke} {...props}>
    <path d="M6 22 L24 8 L42 22" />
    <path d="M10 20 L10 40 L38 40 L38 20" />
    <rect x="20" y="28" width="8" height="12" />
  </svg>
)

export const ChartServiceIcon = (props) => (
  <svg className="service-card-icon" width="48" height="48" viewBox="0 0 48 48" {...stroke} {...props}>
    <path d="M8 40 L8 10" />
    <path d="M8 40 L42 40" />
    <path d="M14 34 L22 24 L28 30 L38 14" />
    <circle cx="22" cy="24" r="2" />
    <circle cx="28" cy="30" r="2" />
  </svg>
)

export const MegaphoneServiceIcon = (props) => (
  <svg className="service-card-icon" width="48" height="48" viewBox="0 0 48 48" {...stroke} {...props}>
    <path d="M10 20 L10 30 L16 30 L30 38 L30 12 L16 20 Z" />
    <path d="M34 18 Q40 24 34 32" />
    <line x1="16" y1="30" x2="16" y2="38" />
  </svg>
)

export const CompassServiceIcon = (props) => (
  <svg className="service-card-icon" width="48" height="48" viewBox="0 0 48 48" {...stroke} {...props}>
    <circle cx="24" cy="24" r="18" />
    <polygon points="24 14 28 24 24 34 20 24" />
  </svg>
)

export const CalculatorServiceIcon = (props) => (
  <svg className="service-card-icon" width="48" height="48" viewBox="0 0 48 48" {...stroke} {...props}>
    <rect x="10" y="6" width="28" height="36" rx="3" />
    <line x1="15" y1="13" x2="33" y2="13" />
    <line x1="15" y1="20" x2="15" y2="20" />
    <line x1="21" y1="20" x2="21" y2="20" />
    <line x1="27" y1="20" x2="27" y2="20" />
    <line x1="33" y1="20" x2="33" y2="20" />
    <line x1="15" y1="28" x2="15" y2="28" />
    <line x1="21" y1="28" x2="21" y2="28" />
    <line x1="27" y1="28" x2="27" y2="28" />
    <line x1="33" y1="28" x2="33" y2="28" />
    <line x1="15" y1="36" x2="27" y2="36" />
  </svg>
)

export const MapServiceIcon = (props) => (
  <svg className="service-card-icon" width="48" height="48" viewBox="0 0 48 48" {...stroke} {...props}>
    <path d="M6 14 L18 10 L30 14 L42 10 L42 34 L30 38 L18 34 L6 38 Z" />
    <line x1="18" y1="10" x2="18" y2="34" />
    <line x1="30" y1="14" x2="30" y2="38" />
  </svg>
)

export const MailIcon = ({ size = 16, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...stroke} {...props}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M2 7l10 6 10-6" />
  </svg>
)

export const InstagramIcon = ({ size = 18, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...stroke} {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
  </svg>
)

export const LinkedinIcon = ({ size = 18, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...stroke} {...props}>
    <rect x="2" y="2" width="20" height="20" rx="3" />
    <line x1="7" y1="10" x2="7" y2="17" />
    <circle cx="7" cy="7" r="0.5" fill="currentColor" />
    <path d="M11 17 L11 10 M11 13 Q11 10 14 10 Q17 10 17 13 L17 17" />
  </svg>
)

export const TwitterIcon = ({ size = 18, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...stroke} {...props}>
    <path d="M22 5.5a8.3 8.3 0 0 1-2.4.7 4.2 4.2 0 0 0 1.8-2.3 8.4 8.4 0 0 1-2.6 1 4.2 4.2 0 0 0-7.2 3.8A11.9 11.9 0 0 1 3 4.5a4.2 4.2 0 0 0 1.3 5.6 4.2 4.2 0 0 1-1.9-.5 4.2 4.2 0 0 0 3.4 4.1 4.2 4.2 0 0 1-1.9.1 4.2 4.2 0 0 0 3.9 2.9A8.4 8.4 0 0 1 2 18.6a11.9 11.9 0 0 0 6.4 1.9c7.7 0 11.9-6.4 11.9-11.9v-.5A8.5 8.5 0 0 0 22 5.5z" />
  </svg>
)

export const FacebookIcon = ({ size = 18, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...stroke} {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)

export const serviceIcons = {
  home: HomeServiceIcon,
  chart: ChartServiceIcon,
  megaphone: MegaphoneServiceIcon,
  compass: CompassServiceIcon,
  calculator: CalculatorServiceIcon,
  map: MapServiceIcon,
}
