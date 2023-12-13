'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown } from 'lucide-react'
import { Input } from '@nextui-org/react'
import { cn } from '@/lib/utils'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import {
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from '@nextui-org/react'

const subHeaderLinks = [
  { id: 1, content: 'Discover', key: 'discover', href: '/', path: /^[/]$/ },
  { id: 2, content: 'Browse', key: 'browse', href: '/browse', path: '/browse' },
  { id: 3, content: 'News', key: 'news', href: '/news', path: '/news' },
]

const SubHeader = () => {
  const pathname = usePathname()

  return (
    <div className="sticky top-0 z-[999] h-[100px] w-full bg-[#121212]">
      <div className="relative z-[999] mx-auto flex h-full w-3/4 max-w-[1600px] justify-between">
        <div className="flex h-full shrink-0 items-center">
          <div className="my-2 flex h-10 w-[230px] min-w-[230px] items-center rounded-3xl bg-[#202020]">
            <Input
              radius="full"
              classNames={{
                input: [
                  'bg-transparent',
                  'text-black/90 dark:text-white/90',
                  'placeholder:text-default-700/50 dark:placeholder:text-white/30',
                  'placeholder:font-normal text-[13px]',
                  'tracking-wide',
                ],
                innerWrapper: ['bg-transparent', 'pb-0'],
                inputWrapper: [
                  'shadow-xl',
                  'bg-default-200/50',
                  'dark:bg-default/20',
                  'backdrop-blur-xl',
                  'backdrop-saturate-200',
                  'hover:bg-default-200/70',
                  'dark:hover:bg-default/70',
                  'group-data-[focused=true]:bg-default-200/50',
                  'dark:group-data-[focused=true]:bg-default/70',
                  '!cursor-text',
                  'h-[40px]',
                  'p-0',
                ],
              }}
              placeholder="Search store"
              startContent={
                <SearchIcon className="pointer-events-none ml-[13.62px] mr-[7.62px] h-[12.75px] w-[12.75px] flex-shrink-0 text-black/50 text-slate-400 dark:text-white/90" />
              }
            />
          </div>
        </div>
        <div className="ml-5 flex h-full w-full shrink flex-row items-center">
          <span className="hidden xl:block">
            <NavigationMenu>
              <NavigationMenuList>
                {subHeaderLinks.map((link) => (
                  <NavigationMenuItem key={link.id}>
                    <Link
                      href={link.href}
                      legacyBehavior
                      passHref
                      className="transition-opacity delay-0 duration-150 ease-in-out"
                    >
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle({
                          className: [
                            pathname.match(link.path)
                              ? 'bg-transparent text-white hover:cursor-default hover:bg-transparent focus:bg-transparent'
                              : 'bg-transparent text-[#858585] hover:bg-transparent focus:bg-transparent',
                          ],
                        })}
                      >
                        {link.content}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </span>
          {/* Dropdown 1280px */}
          <span className="hidden lg:block xl:hidden">
            <Dropdown>
              <DropdownTrigger>
                <Button
                  color="default"
                  variant="bordered"
                  className="border-none capitalize hover:bg-transparent"
                  endContent={<ChevronDown className={`h-4 w-4`} />}
                >
                  {pathname.match(/^[/]$/)
                    ? 'Discover'
                    : pathname.match('/browse')
                      ? 'Browse'
                      : pathname.match('/news')
                        ? 'News'
                        : null}
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Dropdown Navigation" variant="light">
                <DropdownItem
                  key="discover"
                  href="/"
                  className={cn(
                    pathname.match(/^[/]$/)
                      ? 'text-white hover:transition-none'
                      : 'text-[#858585]'
                  )}
                >
                  Discover
                </DropdownItem>
                <DropdownItem
                  key="browse"
                  href="/browse"
                  className={cn(
                    pathname.match('/browse')
                      ? 'text-white hover:transition-none'
                      : 'text-[#858585]'
                  )}
                >
                  Browse
                </DropdownItem>
                <DropdownItem
                  key="news"
                  href="/news"
                  className={cn(
                    pathname.match('/news')
                      ? 'text-white hover:transition-none'
                      : 'text-[#858585]'
                  )}
                >
                  News
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </span>
          {/* Dropdown 1024px */}
          <span className="lg:hidden"></span>
        </div>
        <div className="ml-5 flex h-full grow-0 flex-row items-center"></div>
      </div>
    </div>
  )
}

export default SubHeader

export const SearchIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 21 20"
    preserveAspectRatio="xMidYMid meet"
    aria-hidden="true"
    fill="none"
    {...props}
  >
    <g
      transform="scale(1 -1) rotate(-45 -11.93502884 -2)"
      stroke="currentColor"
      strokeWidth="1.65"
      fill="none"
      fillRule="evenodd"
    >
      <circle cx="7.70710678" cy="7.70710678" r="7"></circle>
      <path d="M15.2071068 8.62132034h5.6923881" strokeLinecap="square"></path>
    </g>
  </svg>
)
