import Image from 'next/image'
import Link from 'next/link'
import Navbar from './components/Navbar'
import { Discord } from './components/Discord'
import { FiArrowUpRight } from 'react-icons/fi'
import { BsDiscord, BsSpotify } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
export default function Page() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-screen-md">
        <Navbar></Navbar>
        <header className="mt-12 px-6">
          <h1 className="animate-in text-4xl font-bold text-black dark:text-white">
            z1pp1k
          </h1>
          <p className="animate-in text-zinc-500 dark:text-zinc-500">
            I write code and make design.
          </p>
          <div className="animate-in mt-6 flex flex-col items-start justify-center gap-4 sm:flex-row sm:items-center sm:justify-start">
            <Image
              className="rounded-full border"
              src="/logo2.png"
              width={90}
              height={90}
              alt="logo with letter Z with black background"
            />
            <div className="space-y-2 text-zinc-500 hover:text-zinc-300 dark:hover:text-zinc-700">
              <Link
                className="flex items-center gap-2 transition-all duration-300 hover:text-zinc-500"
                href="https://discord.com/users/236600476639035402"
                target="_blank"
              >
                <BsDiscord size={30}></BsDiscord>
                <Discord></Discord>
              </Link>
            </div>
          </div>
          <p className="animate-in mt-10 text-black dark:text-white">
            Welcome to my personal website. I am interested in web developing
            for a long time, you can find out there some information about me.
          </p>

          <div className="animate-in mt-10 flex flex-col gap-2 text-zinc-500 hover:text-zinc-300 sm:flex-row sm:gap-4 dark:hover:text-zinc-700">
            <Link
              className="flex items-center gap-2 transition-all duration-300 hover:text-zinc-500"
              href="mailto:z1pp1k@pm.me"
            >
              <MdEmail size={25}></MdEmail>
              <span>Email me</span>
            </Link>
            <Link
              className="flex items-center gap-2 transition-all duration-300 hover:text-zinc-500"
              href="/about"
            >
              <FiArrowUpRight size={25}></FiArrowUpRight>
              <span>Other links</span>
            </Link>
          </div>
        </header>
      </div>
    </main>
  )
}
