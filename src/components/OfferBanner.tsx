import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon.tsx';

export const OfferBanner: React.FC = () => (
  <aside aria-labelledby="offer-banner-heading" className="relative mb-8 overflow-hidden rounded-2xl border border-[#C77DFF]/35 bg-gradient-to-br from-[#351448] via-[#21112F] to-[#151019] p-5 sm:p-6">
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-10 [background-image:radial-gradient(#E9D3FF_1px,transparent_1px)] [background-size:12px_12px]" />
    <div className="relative grid min-w-0 grid-cols-1 items-center gap-4 sm:grid-cols-[112px_minmax(0,1fr)] sm:gap-x-6 lg:grid-cols-[128px_minmax(0,1fr)_auto]">
      <div aria-hidden="true" className="relative flex h-20 w-24 -rotate-6 items-center justify-center sm:row-span-2 sm:h-28 sm:w-28 lg:row-span-1 lg:h-32 lg:w-32">
        <svg viewBox="0 0 160 144" className="absolute inset-0 h-full w-full drop-shadow-lg">
          <path d="M80 3 94 24 121 10 122 39 153 41 137 65 158 88 128 99 130 130 100 122 81 142 65 121 34 134 35 104 5 99 23 75 3 51 34 43 30 13 61 25Z" fill="#FFD36B" stroke="#25112F" strokeWidth="3" />
          <g fill="#291238" textAnchor="middle" fontFamily="inherit" fontWeight="900" fontSize="19">
            <text x="80" y="70" textLength="105" lengthAdjust="spacingAndGlyphs">LET’S TALK</text>
            <text x="80" y="92" textLength="92" lengthAdjust="spacingAndGlyphs">OFFERS!</text>
          </g>
        </svg>
      </div>
      <div className="min-w-0">
        <p className="mb-1 text-[10px] font-semibold uppercase tracking-[.18em] text-[#FFD36B] sm:text-xs">A little extra from Purple Cube</p>
        <h3 id="offer-banner-heading" className="text-xl font-bold leading-tight text-white sm:text-2xl">Your next favourite, with a little extra.</h3>
        <p className="mt-2 max-w-lg text-sm leading-relaxed text-[#D7E2EA]/80">Ask our studio about offers and custom bundles for your next order.</p>
      </div>
      <a href={`https://wa.me/919111190181?text=${encodeURIComponent('Hello Purple Cube! I would like to enquire about offers and custom bundles for my next order. Please share the details.')}`} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 w-full min-w-0 items-center justify-center gap-2 rounded-full bg-[#FFD36B] px-4 py-3 text-sm font-semibold text-[#291238] transition-colors hover:bg-[#FFE49B] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFD36B] sm:col-start-2 sm:w-fit lg:col-start-3 lg:row-start-1 [&_svg]:shrink-0">
        <WhatsAppIcon size={18} /> Enquire about offers <ArrowUpRight size={16} />
      </a>
    </div>
  </aside>
);
