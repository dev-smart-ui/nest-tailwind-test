"use client";

import { NavLinks } from "./nav-links";
import { useRef, useState, useEffect } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-color-header text-white p-4 w-full z-20">
      <nav className="container mx-auto flex items-center justify-between">
        <a href="/" className="text-lg font-bold">
          SmartUI
        </a>

        <ul className="hidden md:flex gap-3">
          <NavLinks onLinkClick={() => setIsOpen(false)} />
        </ul>

        <button
          onClick={() => setIsOpen(true)}
          className="block md:hidden text-white focus:outline-none"
          aria-label="Open navigation"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5M3.75 12h16.5m-16.5 6.75h16.5" />
          </svg>
        </button>
      </nav>

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-color-header text-white shadow-lg transition-transform transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } z-30`}
        ref={menuRef}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-white focus:outline-none"
          aria-label="Close navigation"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <ul className="mt-16 space-y-4 px-6">
          <NavLinks onLinkClick={() => setIsOpen(false)} />
        </ul>
      </div>

      {isOpen && <div onClick={() => setIsOpen(false)} className="fixed inset-0 bg-black bg-opacity-50 z-20"></div>}
    </header>
  );
}
