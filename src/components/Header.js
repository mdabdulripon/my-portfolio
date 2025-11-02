import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-zinc-950/60 bg-zinc-950/80 border-b border-zinc-800">
      <div className="mx-auto max-w-6xl px-6 md:px-10 py-4 flex items-center justify-between">
        <Link to="/" className="font-semibold tracking-tight text-zinc-100">
          Abdul Awal Ripon
        </Link>
        <nav className="hidden md:flex gap-6 text-sm">
          <Link
            to="/experience"
            className="hover:text-brand-500 link-underline"
          >
            Experience
          </Link>
          <Link to="/projects" className="hover:text-brand-500 link-underline">
            Projects
          </Link>
        </nav>
        <Link
          to="contact"
          className="md:inline-flex hidden px-3 py-1.5 rounded-xl border border-brand-500/30 text-brand-500 hover:shadow-glow transition"
        >
          Contact
        </Link>
      </div>
    </header>
  );
}
