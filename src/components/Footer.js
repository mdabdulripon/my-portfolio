import React from 'react'

export default function Footer() {
  return (
    <footer className="py-10 text-sm text-zinc-400">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <p>Built with React + Vite + Tailwind • © {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}
