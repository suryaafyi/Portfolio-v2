import React, { useRef } from 'react';
import { useHatRack } from './useHatRack';
import './SitePetStyles.css';

export const HatRack = () => {
  const rackRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const { isMenuOpen, toggleMenu, selectHat, currentHat } = useHatRack(rackRef, toggleRef);

  return (
    <div 
      ref={rackRef} 
      data-hat-rack 
      data-has-hat={currentHat !== 'none' ? '' : undefined} 
      className="hat-rack" 
      aria-label="Hat rack"
    >
      <button
        ref={toggleRef}
        type="button"
        data-rack-toggle
        className="hat-rack__toggle"
        aria-label="Choose a hat"
        onClick={toggleMenu}
      >
        <svg
          className="hat-rack__icon hat-rack__icon--default"
          width="26"
          height="22"
          viewBox="0 0 40 34"
          aria-hidden="true"
        >
          {/* shelf */}
          <rect x="2" y="26" width="36" height="2.2" rx="1" fill="#6b6553" />
          {/* shelf brackets */}
          <rect x="5" y="28" width="2" height="6" rx="0.7" fill="#6b6553" />
          <rect x="33" y="28" width="2" height="6" rx="0.7" fill="#6b6553" />
          {/* sprout sitting on the shelf */}
          <rect x="19" y="12" width="2" height="14" fill="#2a8f50" />
          <ellipse cx="13" cy="7" rx="9" ry="4.8" fill="#3ca564" transform="rotate(28 13 7)" />
          <ellipse cx="28" cy="7" rx="9" ry="4.8" fill="#3ca564" transform="rotate(-28 28 7)" />
        </svg>
        <span data-rack-preview-slot className="hat-rack__preview-slot" aria-hidden="true">
           {/* Preview injected by JS based on selected hat */}
        </span>
      </button>

      <div 
        className="hat-rack__menu" 
        data-rack-options 
        aria-hidden="true" 
        data-open={isMenuOpen ? '' : undefined} 
      >
        <button 
          type="button" 
          className="hat-rack__opt" 
          data-selected={currentHat === 'none' ? '' : undefined} 
          data-hat-choice="none" 
          aria-label="No hat" 
          onClick={(e) => { e.stopPropagation(); selectHat('none'); }}
        >
          <span className="hat-rack__none">∅</span>
        </button>
        <button 
          type="button" 
          className="hat-rack__opt" 
          data-selected={currentHat === 'bucket' ? '' : undefined} 
          data-hat-choice="bucket" 
          aria-label="Bucket hat" 
          onClick={(e) => { e.stopPropagation(); selectHat('bucket'); }}
        >
          <svg width="28" height="15" viewBox="-4 -9 48 17" aria-hidden="true">
            <rect x="10" y="-5" width="24" height="10" rx="3" fill="#e8c84a" />
            <rect x="-1" y="2" width="46" height="6" rx="3" fill="#e8c84a" />
          </svg>
        </button>
        <button 
          type="button" 
          className="hat-rack__opt" 
          data-selected={currentHat === 'top' ? '' : undefined} 
          data-hat-choice="top" 
          aria-label="Top hat" 
          onClick={(e) => { e.stopPropagation(); selectHat('top'); }}
        >
          <svg width="26" height="18" viewBox="0 -14 44 19" aria-hidden="true">
            <rect x="13" y="-12" width="18" height="14" rx="2.5" fill="#1a1a1a" />
            <rect x="4" y="0" width="36" height="5" rx="2.5" fill="#1a1a1a" />
          </svg>
        </button>
        <button 
          type="button" 
          className="hat-rack__opt" 
          data-selected={currentHat === 'cap' ? '' : undefined} 
          data-hat-choice="cap" 
          aria-label="Baseball cap" 
          onClick={(e) => { e.stopPropagation(); selectHat('cap'); }}
        >
          <svg width="28" height="15" viewBox="0 -6 44 15" aria-hidden="true">
            <rect x="8" y="-4" width="28" height="10" rx="4" fill="#168b9d" />
            <rect x="22" y="4" width="20" height="5" rx="2.5" fill="#168b9d" />
          </svg>
        </button>
        <button 
          type="button" 
          className="hat-rack__opt" 
          data-selected={currentHat === 'sprout' ? '' : undefined} 
          data-hat-choice="sprout" 
          aria-label="Sprout" 
          onClick={(e) => { e.stopPropagation(); selectHat('sprout'); }}
        >
          <svg width="30" height="22" viewBox="8 -14 26 20" aria-hidden="true">
            <rect x="21.2" y="-6" width="1.6" height="12" fill="#2a8f50" />
            <ellipse cx="17" cy="-7" rx="5" ry="2.8" fill="#3ca564" transform="rotate(28 17 -7)" />
            <ellipse cx="27" cy="-7" rx="5" ry="2.8" fill="#3ca564" transform="rotate(-28 27 -7)" />
          </svg>
        </button>
        <button 
          type="button" 
          className="hat-rack__opt" 
          data-selected={currentHat === 'party' ? '' : undefined} 
          data-hat-choice="party" 
          aria-label="Party hat" 
          onClick={(e) => { e.stopPropagation(); selectHat('party'); }}
        >
          <svg width="26" height="18" viewBox="10 -14 26 16" aria-hidden="true">
            <polygon points="22.5,-12 14,0 31,0" fill="#bf5a7a" />
            <rect x="14" y="0" width="17" height="2" rx="1" fill="#bf5a7a" />
            <circle cx="22.5" cy="-12" r="2" fill="#168b9d" />
          </svg>
        </button>
      </div>
    </div>
  );
};
