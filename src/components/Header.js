import React from "react";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-zinc-950/60 bg-zinc-950/80 border-b border-zinc-800">
      <div className="mx-auto max-w-6xl px-6 md:px-10 py-4 flex items-center justify-between">
        <a href="#" className="font-semibold tracking-tight text-zinc-100">
          Abdul Awal Ripon
        </a>
        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#about" className="hover:text-brand-500 link-underline">
            About
          </a>
          <a href="#experience" className="hover:text-brand-500 link-underline">
            Experience
          </a>
          <a href="#projects" className="hover:text-brand-500 link-underline">
            Projects
          </a>
          <a href="#contact" className="hover:text-brand-500 link-underline">
            Contact
          </a>
        </nav>
        <a
          href="#contact"
          className="md:inline-flex hidden px-3 py-1.5 rounded-xl border border-brand-500/30 text-brand-500 hover:shadow-glow transition"
        >
          Say hi
        </a>
      </div>
    </header>
  );
}
