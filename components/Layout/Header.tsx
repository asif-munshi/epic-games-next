import { Button } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="flex w-full items-center justify-between bg-[#18181c] px-4 py-5 md:px-6">
      <div className="h-8">
        <Link href="/">
          <Image
            src="/logo-transparent.svg"
            alt="logo"
            width={32}
            height={32}
          />
        </Link>
      </div>
      <div className="flex h-8 flex-row gap-2">
        <Button color="default" className="h-full rounded-lg px-0 text-white">
          <Link
            href="/"
            className="flex h-full items-center px-3 text-sm font-medium"
          >
            Login
          </Link>
        </Button>
        <Button color="primary" className="h-full rounded-lg bg-[#26bbff] px-0">
          <Link
            href="/"
            className="flex h-full items-center px-3 text-sm font-medium text-[#101014]"
          >
            Get Started
          </Link>
        </Button>
      </div>
    </header>
  )
}

export default Header
