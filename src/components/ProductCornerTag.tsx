import React from 'react';

export const ProductCornerTag: React.FC<{ label: string }> = ({ label }) => {
  const gradientId = React.useId();
  const isOffer = /off|offer|deal/i.test(label);
  const discount = label.match(/^(\d+%)\s+off$/i)?.[1];

  if (!isOffer) {
    return <span className="pointer-events-none absolute right-2 top-2 z-10 max-w-[calc(100%_-_16px)] rounded-full border border-[#E9D3FF]/35 bg-[#351448]/95 px-2.5 py-1 text-[10px] font-semibold leading-tight text-[#F4E8FF] shadow-md sm:text-xs">{label}</span>;
  }

  return (
    <span className="pointer-events-none absolute right-0 top-0 z-10 h-20 w-20 sm:h-24 sm:w-24">
      <span className="sr-only">{label}</span>
      <svg aria-hidden="true" viewBox="0 0 96 96" className="h-full w-full drop-shadow-md">
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#FF375F" />
            <stop offset="1" stopColor="#BE123C" />
          </linearGradient>
        </defs>
        <path d="M0 0H96V96Z" fill={`url(#${gradientId})`} />
        <path d="M1 1 95 95" fill="none" stroke="#FDA4AF" strokeOpacity=".65" />
        <path d="M86 86H96V96Z" fill="#881337" />
        <g transform="translate(64 28) rotate(45)" fill="white" textAnchor="middle" fontFamily="inherit" fontWeight="900">
          {discount ? <>
            <text y="4" fontSize="21" textLength="48" lengthAdjust="spacingAndGlyphs">{discount}</text>
            <text y="17" fontSize="10" letterSpacing="2">OFF</text>
          </> : <text y="4" fontSize="12" textLength="57" lengthAdjust="spacingAndGlyphs">{label.toUpperCase()}</text>}
        </g>
      </svg>
    </span>
  );
};
