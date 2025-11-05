'use client'
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

const NavLink = ({ href, children, onClick }) => (
  <Link href={href} onClick={onClick} className="px-4 py-2 rounded-xl hover:bg-white/70 hover:shadow-soft transition">
    {children}
  </Link>
);

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="header-wrap">
      <div className="container flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-3">
          <div className="transition duration-300" style={{transform: scrolled ? 'scale(0.9)' : 'scale(1)', opacity: scrolled ? 0.95 : 1}}>
            <Image src="/logo.png" alt="Beauty by Briers" width={scrolled ? 160 : 220} height={scrolled ? 40 : 56} priority />
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/services">Services</NavLink>
          <NavLink href="/gallery">Gallery</NavLink>
          <NavLink href="/about">About</NavLink>
          <a href="#contact" className="btn ml-2">Contact</a>
        </nav>
        <button className="md:hidden p-2 rounded-xl hover:bg-white/70" onClick={() => setOpen(!open)}><Menu /></button>
      </div>
      {open && (
        <div className="md:hidden container pb-4">
          <div className="card p-2 flex flex-col">
            <NavLink href="/" onClick={() => setOpen(false)}>Home</NavLink>
            <NavLink href="/services" onClick={() => setOpen(false)}>Services</NavLink>
            <NavLink href="/gallery" onClick={() => setOpen(false)}>Gallery</NavLink>
            <NavLink href="/about" onClick={() => setOpen(false)}>About</NavLink>
            <a href="#contact" className="btn mt-2" onClick={() => setOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}
