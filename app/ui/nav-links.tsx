"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export function NavLinks({ onLinkClick }: { onLinkClick: () => void }) {
  const pathname = usePathname();

  return (
    <>
      {links.map(({ href, label }) => (
        <li key={label}>
          <Link
            onClick={onLinkClick}
            className={`hover:underline ${pathname === href ? "text-color-active" : ""}`}
            href={href}
          >
            {label}
          </Link>
        </li>
      ))}
    </>
  );
}
