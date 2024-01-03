import Image from 'next/image'
import Navbar from '../components/Navbar'
import Links from '../components/Links'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
}

export default function Page() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-screen-md">
        <Navbar></Navbar>
        <header className="mt-12 px-6">
          <h1 className="animate-in text-4xl font-semibold text-black dark:text-white">
            About me
          </h1>
          <p className="animate-in text-zinc-500">Some information about me.</p>
          <p className="animate-in mt-10 text-black dark:text-white">
            I am a fourth-year student at the High School of Information
            Technology, and I spend the majority of my time designing and
            programming.
          </p>
        </header>
        <Links></Links>
      </div>
    </main>
  )
}
