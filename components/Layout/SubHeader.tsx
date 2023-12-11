import { Input } from '@nextui-org/react'

const SubHeader = () => {
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
                  'dark:bg-default/60',
                  'backdrop-blur-xl',
                  'backdrop-saturate-200',
                  'hover:bg-default-200/70',
                  'dark:hover:bg-default/70',
                  'group-data-[focused=true]:bg-default-200/50',
                  'dark:group-data-[focused=true]:bg-default/60',
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
        <div>2</div>
        <div>3</div>
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
