import React from 'react'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-200">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        {children}
      </div>
    </div>
  )
}
