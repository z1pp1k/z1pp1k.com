'use client'
import NavLink from './NavLink'
import Image from 'next/image'
import Link from 'next/link'
export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4">
      <Link href="/">
        <Image
          className="invert dark:invert-0"
          src="/logo.png"
          width={50}
          height={50}
          alt="logo with letter Z"
        />
      </Link>

      <div className="flex items-center">
        <NavLink href="/about">About</NavLink>
        <NavLink href="/uses">Uses</NavLink>
      </div>
    </nav>
  )
}
