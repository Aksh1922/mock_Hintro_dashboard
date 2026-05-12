'use client';

// Sidebar Icons
export function DashboardIcon({ active = false }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 4C2 2.89543 2.89543 2 4 2H16C17.1046 2 18 2.89543 18 4V16C18 17.1046 17.1046 18 16 18H4C2.89543 18 2 17.1046 2 16V4Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path d="M2 7H18" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function CallsIcon({ active = false }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 2H7C7.55228 2 8 2.44772 8 3V7C8 7.55228 7.55228 8 7 8H3C2.44772 8 2 7.55228 2 7V3C2 2.44772 2.44772 2 3 2Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M13 2H17C17.5523 2 18 2.44772 18 3V7C18 7.55228 17.5523 8 17 8H13C12.4477 8 12 7.55228 12 7V3C12 2.44772 12.4477 2 13 2Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M3 12H7C7.55228 12 8 12.4477 8 13V17C8 17.5523 7.55228 18 7 18H3C2.44772 18 2 17.5523 2 17V13C2 12.4477 2.44772 12 3 12Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M13 12H17C17.5523 12 18 12.4477 18 13V17C18 17.5523 17.5523 18 17 18H13C12.4477 18 12 17.5523 12 17V13C12 12.4477 12.4477 12 13 12Z"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

export function AnalyticsIcon({ active = false }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M2 16H18" stroke="currentColor" strokeWidth="2" />
      <path d="M5 12V16" stroke="currentColor" strokeWidth="2" />
      <path d="M10 8V16" stroke="currentColor" strokeWidth="2" />
      <path d="M15 4V16" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function FeedbackIcon({ active = false }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 4C2 2.89543 2.89543 2 4 2H16C17.1046 2 18 2.89543 18 4V14C18 15.1046 17.1046 16 16 16H5L2 18V4Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
}

export function SettingsIcon({ active = false }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 2L12 6H16L13 9L14 13L10 10L6 13L7 9L4 6H8L10 2Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
}

// Topbar Icons
export function MenuIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3 5H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M3 19H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function BellIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ChevronDownIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 7.5L10 12.5L15 7.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LogoutIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 6L18 11M18 11L13 16M18 11H8C6.89543 11 6 10.1046 6 9V3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CloseIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 6L6 18M6 6L18 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Action Icons
export function StarIcon({ filled = false }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill={filled ? 'currentColor' : 'none'}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 2L12.39 7.26H18L13.81 11.25L15.39 16.5L10 12.51L4.61 16.5L6.19 11.25L2 7.26H7.61L10 2Z"
        stroke="currentColor"
        strokeWidth="1"
      />
    </svg>
  );
}

export function CheckIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 6L8 15L3 10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function UserIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="16" cy="10" r="5" fill="currentColor" />
      <path
        d="M22 28C22 24.134 19.314 21 16 21C12.686 21 10 24.134 10 28"
        fill="currentColor"
      />
    </svg>
  );
}

export function PhoneIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 4C2 2.89543 2.89543 2 4 2H5.37143C5.87638 2 6.32169 2.38078 6.39631 2.87466L7.22369 8.11548C7.31353 8.72502 7.02181 9.3246 6.45914 9.62607L5.27098 10.2779C5.75343 11.3944 7.56827 13.8641 9.20804 14.9155L10.3962 14.2637C10.9589 13.9622 11.7286 14.1255 12.1121 14.7042L14.0565 17.7852C14.3914 18.3159 14.2131 19.0448 13.6822 19.3798C11.9876 20.5294 9.40861 21.3818 6.5 19.1029C3.44761 16.6715 1.75 11.6652 1.75 8C1.75 5.64264 2.25946 4 2 4Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function ClockIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 4V8L11 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function UserGroupIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 4C10 5.10457 9.10457 6 8 6C6.89543 6 6 5.10457 6 4C6 2.89543 6.89543 2 8 2C9.10457 2 10 2.89543 10 4Z"
        fill="currentColor"
      />
      <path d="M4 7C4 8.10457 3.10457 9 2 9C0.89543 9 0 8.10457 0 7C0 5.89543 0.89543 5 2 5C3.10457 5 4 5.89543 4 7Z" fill="currentColor" />
      <path d="M14 7C14 8.10457 13.1046 9 12 9C10.8954 9 10 8.10457 10 7C10 5.89543 10.8954 5 12 5C13.1046 5 14 5.89543 14 7Z" fill="currentColor" />
      <path
        d="M12.5 10.5C13.3284 10.5 14 11.1716 14 12V14C14 14.5523 13.5523 15 13 15H3C2.44772 15 2 14.5523 2 14V12C2 11.1716 2.67157 10.5 3.5 10.5C4.5 11.5 6 12 8 12C10 12 11.5 11.5 12.5 10.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function RatingIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 1.5L10.39 6.76H16L11.81 10.75L13.39 15.5L8 11.51L2.61 15.5L4.19 10.75L0 6.76H5.61L8 1.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function CalendarIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="2.25" y="3.25" width="11.5" height="10.5" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M5 1.75V4.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M11 1.75V4.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M2.75 6.25H13.25" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
