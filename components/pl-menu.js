import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  BookmarkSquareIcon,
  CalendarIcon,
  LifebuoyIcon,
  ShieldCheckIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import Image from 'next/image'

const resources = [
  {
    name: 'Help Center',
    description: 'Get all of your questions answered in our forums or contact support.',
    href: '#',
    icon: LifebuoyIcon,
  },
  {
    name: 'Guides',
    description: 'Learn how to maximize our platform to get the most out of it.',
    href: '#',
    icon: BookmarkSquareIcon,
  },
  {
    name: 'Events',
    description: 'See what meet-ups and other events we might be planning near you.',
    href: '#',
    icon: CalendarIcon,
  },
  { name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#', icon: ShieldCheckIcon },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div className="relative bg-gray-50">
      <Popover className="relative bg-white shadow">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link href="/">
              <a>
                <span className="sr-only">The Plants Project</span>
                
                <Image
                  className="h-48 w-auto sm:h-10 green"
                  src="https://plants-react-live.vercel.app/plants.svg"
                  alt="Plants Project Live"
                  height={100}
                  width={250}
                />
                </a>
              </Link>
            </div>
            <div className="-my-2 -mr-2 md:hidden">
              <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500">
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden space-x-10 md:flex">
              

              <Link href="/" className="text-base font-medium text-gray-500 hover:text-gray-900">
                HOME
              </Link>
              <Link href="/" className="text-base font-medium text-gray-500 hover:text-gray-900">
                MENTOR
              </Link>
              <Link href="/plants-deux" className="text-base font-medium text-gray-500 hover:text-gray-900">
                SUBMISSIONS
              </Link>
              <Link href="/database" className="text-base font-medium text-gray-500 hover:text-gray-900">
                DATABASE
              </Link>

              
            </Popover.Group>
            <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
              <Link href="/" passHref>
              <button
    
                className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-green px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700"
              >
                QUIZ
              </button>
              </Link>
            </div>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
          >
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pt-5 pb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <Image
                      className="h-8 w-auto"
                      src="https://plants-react-live.vercel.app/plants.svg"
                      alt="Plants Project Live"
                      width={250}
                      height={100}
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500">
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
               
              </div>
              <div className="space-y-6 py-6 px-5">
                <div className="grid grid-cols-2 gap-y-4 gap-x-8 uppercase">
                  <Link href="/" className="text-base font-medium text-gray-900 hover:text-gray-700">
                    HOME
                  </Link>

                  <Link href="/" className="text-base font-medium text-gray-900 hover:text-gray-700">
                    MENTOR
                  </Link>

                  <Link href="/" className="text-base font-medium text-gray-900 hover:text-gray-700">
                    SUBMISSIONS
                  </Link>

                  <Link href="/" className="text-base font-medium text-gray-900 hover:text-gray-700">
                    DATABASE
                  </Link>
                  
                </div>
                <div>
                  <Link href="/" passHref>
                  <button
                    
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-green px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700"
                  >
                    QUIZ
                  </button>
                  </Link>
                  
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>

      
    </div>
  )
}
