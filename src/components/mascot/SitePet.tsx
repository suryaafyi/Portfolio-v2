import React from 'react';
import './SitePetStyles.css';
import { useSitePet } from './useSitePet';

export const SitePet = () => {
  const { petRef } = useSitePet();

  return (
    <div ref={petRef as any} data-site-pet aria-hidden="true" className="site-pet" data-cursor="grab">
      <div className="site-pet__bubble" data-pet-bubble aria-hidden="true"></div>
      <div className="site-pet__emotes" data-pet-emotes aria-hidden="true"></div>
      <button
        type="button"
        data-pet-hit
        className="site-pet__hit"
        aria-label="Pet the pet"
      >
        <span className="site-pet__bob">
          <svg width="44" height="56" viewBox="0 0 44 56" className="site-pet__svg pointer-events-none" fill="none">
            {/* soft contact shadow so the pet reads as grounded */}
            <ellipse
              className="site-pet__shadow"
              cx="22"
              cy="53.5"
              rx="14"
              ry="1.8"
              fill="#1a1a1a"
              opacity="0.16"
            />

            {/* single slab body */}
            <rect x="4" y="6" width="36" height="38" rx="5" fill="#e8432d" />
            {/* subtle top highlight for depth */}
            <rect x="4" y="6" width="36" height="2" rx="1" fill="#f0ede8" opacity="0.12" />

            {/* slit eyes — thin, evenly spaced. Group transforms for glance + blink. */}
            <g className="site-pet__eyes" style={{ '--eye-x': '0', '--eye-y': '0' } as any}>
              <rect className="site-pet__eye" x="14" y="22" width="4" height="5" rx="1" fill="#1a1a1a" />
              <rect className="site-pet__eye" x="26" y="22" width="4" height="5" rx="1" fill="#1a1a1a" />
            </g>

            {/* legs — short blocky extrusions flush with the body */}
            <rect
              className="site-pet__leg site-pet__leg--left"
              x="10"
              y="42"
              width="8"
              height="10"
              rx="1.5"
              fill="#c73520"
            />
            <rect
              className="site-pet__leg site-pet__leg--right"
              x="26"
              y="42"
              width="8"
              height="10"
              rx="1.5"
              fill="#c73520"
            />

            {/* Hats */}
            <g className="pet-hat" data-hat-variant="bucket">
              <rect x="10" y="-7" width="24" height="10" rx="3" fill="#e8c84a" />
              <rect x="-1" y="0" width="46" height="6" rx="3" fill="#e8c84a" />
            </g>
            <g className="pet-hat" data-hat-variant="top">
              <rect x="13" y="-11" width="18" height="14" rx="2.5" fill="#1a1a1a" />
              <rect x="4" y="1" width="36" height="5" rx="2.5" fill="#1a1a1a" />
            </g>
            <g className="pet-hat" data-hat-variant="cap">
              <rect x="8" y="-4" width="28" height="10" rx="4" fill="#168b9d" />
              <rect x="22" y="4" width="20" height="5" rx="2.5" fill="#168b9d" />
            </g>
            <g className="pet-hat" data-hat-variant="sprout">
              <rect x="21.2" y="-6" width="1.6" height="12" fill="#2a8f50" />
              <ellipse cx="17" cy="-7" rx="5" ry="2.8" fill="#3ca564" transform="rotate(28 17 -7)" />
              <ellipse cx="27" cy="-7" rx="5" ry="2.8" fill="#3ca564" transform="rotate(-28 27 -7)" />
            </g>
            <g className="pet-hat" data-hat-variant="party">
              <polygon points="22.5,-8 14,4 31,4" fill="#bf5a7a" />
              <rect x="14" y="4" width="17" height="2" rx="1" fill="#bf5a7a" />
              <circle cx="22.5" cy="-8" r="2" fill="#168b9d" />
            </g>
          </svg>
        </span>
      </button>
    </div>
  );
};
