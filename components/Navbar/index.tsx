import React from "react";
import { useRouter } from 'next/router'
import ThemeToggleButton from "./themeToggleButton";
import DropdownMenu from "./dropDownMenu";
import { NavItems } from "../../utils/types/nav"
import { FaGithub, FaGitlab, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import Image from 'next/image'

interface Props {
  path: string
}

const navItems: NavItems = [
  {
    name: 'Home',
    href: '/'
  },
  {
    name: 'Posts',
    href: '/posts'
  },
]


const Navbar: React.FC<Props> = ({ path }) => {
  const router = useRouter();
  const handleOnClick = () => router.push('/')
  return (
    <div className='px-3 py-1 sm:py-4 max-w-screen-lg mx-auto w-full text-black flex gap-7 items-center justify-between sticky top-0 left-0 z-50 backdrop-blur'>
      <div className='dark:text-white font-bold text-md sm:text-lg md:text-xl lg:text-xl cursor-pointer' onClick={handleOnClick}>
        Hsing Ying Li
      </div>
      <div className="flex gap-6">
        <ul className="hidden md:inline-flex md:items-center">
          {navItems.map((item) => {
            const bgColor = path.includes(item.href) ? 'teal-500' : 'transparent'
            return (
              <li key={item.name} className={`bg-${bgColor} inline text-black text-md dark:text-white ml-4 p-2 rounded-lg cursor-pointer`}>
                {item.name}
              </li>)
          })}
        </ul>
        <div className="text-xl flex items-center gap-3 dark:text-gray-100">
          <Link href='https://www.github.com/hsingyingli' passHref>
            <a target="_blank" rel="noopener noreferrer">
              <FaGithub className='cursor-pointer' />
            </a>
          </Link>
          <Link href='https://www.gitlab.com/hsingyingli' passHref>
            <a target="_blank" rel="noopener noreferrer">
              <FaGitlab className='cursor-pointer' />
            </a>
          </Link>
          <Link href='https://www.linkedin.com/in/hsing-li-9219a61b8' passHref>
            <a target="_blank" rel="noopener noreferrer">
              <FaLinkedin className='cursor-pointer' />
            </a>
          </Link>
        </div>
        <ThemeToggleButton />
        <div className="md:hidden">
          <DropdownMenu navItems={navItems} />
        </div>
      </div>
    </div>
  )
}


export default Navbar
