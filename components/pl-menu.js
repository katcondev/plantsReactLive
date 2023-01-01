import Image from 'next/image'

const navigation = [
    { name: 'PERSONALITY QUIZ', href: '/quiz' },
    { name: 'PLANT SUBMISSIONS', href: '/submissions' },
    { name: 'DATABASE', href: '/database' },
  ]
  
  export default function PlMenu() {
    return (
      <header className="bg-gray-dark">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
          <div className="flex w-full items-center justify-between border-b border-green py-6 lg:border-none">
            <div className="flex items-center">
              <a href="/">
                <span className="sr-only">Plants Project Live</span>
                <Image className="h-10 w-auto" src="https://katcontrerasdev.github.io/thePlantsProject/assets/images/logo.svg" width={112} height={112} alt="logo" />
              </a>
              <div className="ml-10 hidden space-x-8 lg:block">
                {navigation.map((link) => (
                  <a key={link.name} href={link.href} className="text-base font-medium text-white hover:text-indigo-50">
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="ml-10 space-x-4">
              <a
                href="/quiz"
                className="inline-block rounded-md border border-transparent bg-green py-2 px-4 text-base font-medium text-white hover:bg-opacity-75"
              >
                LEARN
              </a>
              <a
                href="/mentor"
                className="inline-block rounded-md border border-transparent bg-white py-2 px-4 text-base font-medium text-green hover:bg-green hover:text-gray"
              >
                MENTOR
              </a>
            </div>
          </div>
          <div className="flex flex-wrap justify-center space-x-6 py-4 lg:hidden">
            {navigation.map((link) => (
              <a key={link.name} href={link.href} className="text-base font-medium text-white hover:text-indigo-50">
                {link.name}
              </a>
            ))}
          </div>
        </nav>
      </header>
    )
  }
  