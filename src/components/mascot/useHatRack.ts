import { useState, useEffect, RefObject } from 'react';

const HAT_KEY = 'sitepet:hat';
export type HatKey = 'none' | 'bucket' | 'top' | 'cap' | 'sprout' | 'party';

export const useHatRack = (rackRef: RefObject<HTMLDivElement>, toggleRef: RefObject<HTMLButtonElement>) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentHat, setCurrentHat] = useState<HatKey>('none');

  useEffect(() => {
    try {
      const v = localStorage.getItem(HAT_KEY);
      if (v) setCurrentHat(v as HatKey);
    } catch {}
  }, []);

  useEffect(() => {
    const rack = rackRef.current;
    if (!rack) return;

    const positionRack = () => {
      const toc = document.querySelector<HTMLElement>('[data-toc]');
      if (!toc) {
        rack.style.display = 'none';
        return;
      }
      rack.style.display = '';
      const r = toc.getBoundingClientRect();
      if (r.width === 0) return;

      const TOGGLE_W = 26;
      const TOGGLE_H = 22;
      const left = r.left + r.width - TOGGLE_W - 12;
      const top = r.top - TOGGLE_H;
      rack.style.setProperty('--rack-x', `${Math.round(left)}px`);
      rack.style.setProperty('--rack-y', `${Math.round(top)}px`);
    };

    const handleResize = () => positionRack();
    const handleScroll = () => positionRack();

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Also listen to sidebar scrolls if they exist
    const sidebar = document.querySelector<HTMLElement>("[data-sidebar]") || document.querySelector<HTMLElement>("[data-toc]")?.parentElement;
    if (sidebar) sidebar.addEventListener("scroll", handleScroll, { passive: true });

    setTimeout(positionRack, 300);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      if (sidebar) sidebar.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!isMenuOpen) return;
      if (rackRef.current && rackRef.current.contains(e.target as Node)) return;
      setIsMenuOpen(false);
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  // Update SVG preview slot when hat changes
  useEffect(() => {
    const rack = rackRef.current;
    if (!rack) return;
    const slot = rack.querySelector<HTMLElement>('[data-rack-preview-slot]');
    if (!slot) return;
    
    slot.innerHTML = '';
    if (currentHat !== 'none') {
      const source = rack.querySelector<SVGElement>(`[data-hat-choice="${currentHat}"] svg`);
      if (source) {
        const clone = source.cloneNode(true) as SVGElement;
        slot.appendChild(clone);
      }
    }
    
    // Update the pet hat data attribute
    const pet = document.querySelector<HTMLElement>('[data-site-pet]');
    if (pet) {
      if (currentHat === 'none') {
        pet.removeAttribute('data-hat');
      } else {
        pet.setAttribute('data-hat', currentHat);
      }
    }
  }, [currentHat]);

  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMenuOpen(prev => !prev);
  };

  const selectHat = (hat: HatKey) => {
    setCurrentHat(hat);
    try {
      localStorage.setItem(HAT_KEY, hat);
    } catch {}
    setIsMenuOpen(false);
    
    // Add hop animation to pet on hat change
    const pet = document.querySelector<HTMLElement>('[data-site-pet]');
    if (pet && !window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      pet.setAttribute('data-hopping', '');
      setTimeout(() => pet.removeAttribute('data-hopping'), 520);
    }
  };

  return { toggleRef, isMenuOpen, toggleMenu, selectHat, currentHat };
};
