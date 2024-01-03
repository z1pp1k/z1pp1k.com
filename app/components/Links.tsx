import Link from 'next/link'
import { FiArrowUpRight } from 'react-icons/fi'
import {
  BsDiscord,
  BsSpotify,
  BsGithub,
  BsTwitter,
  BsYoutube,
  BsTwitch,
} from 'react-icons/bs'
import LinkItem from './LinkItem'

const SOCIALS = [
  {
    icon: <BsDiscord size={30}></BsDiscord>,
    href: 'https://discord.com/users/236600476639035402',
    name: 'Discord',
  },
  {
    icon: <BsSpotify size={30}></BsSpotify>,
    href: 'https://open.spotify.com/user/61zeezoyp5p2tojwp3oftskgq?si=7c63d97f21954ed9',
    name: 'Spotify',
  },
  {
    icon: <BsGithub size={30}></BsGithub>,
    href: 'https://github.com/z1pp1K',
    name: 'GitHub',
  },
  {
    icon: <BsTwitter size={30}></BsTwitter>,
    href: 'https://twitter.com/z1pp1k',
    name: 'Twitter',
  },
  {
    icon: <BsYoutube size={30}></BsYoutube>,
    href: 'https://www.youtube.com/channel/UC3R3gYklqYBgg6OoC1ztNoQ',
    name: 'YouTube',
  },
  {
    icon: <BsTwitch size={30}></BsTwitch>,
    href: 'https://twitch.tv/z1pp1k',
    name: 'Twitch',
  },
]

export default function Links() {
  return (
    <div
      className="animate-in my-10 flex flex-col gap-3 px-6 text-zinc-500 hover:text-zinc-300 hover:dark:text-zinc-700"
      style={{ '--index': 4 } as React.CSSProperties}
    >
      {SOCIALS.map((t, i) => (
        <LinkItem icon={t.icon} name={t.name} href={t.href} key={i} />
      ))}
    </div>
  )
}
