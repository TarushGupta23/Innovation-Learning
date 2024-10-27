import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import ThemeButton from '../theme-button/ThemeButton'

const navigation = [
  { name: 'About', href: '#' },
  { name: 'Services', href: '#' },
  { name: 'Interactive', href: '#' },
  { name: 'Contact', href: '#' },
]

export default function Navbar(props) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return <header className="relative inset-x-0 top-0 z-90">
    <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8 sticky top-0">
      <div className="flex lg:flex-1">
        <a href="https://www.bis.gov.in/" className="-m-1.5 p-1.5">
          <span className="sr-only dark:text-slate-500">Bureau of Indian Standards</span>
          <img
            alt="Bis Logo"
            src="icons/logo.png"
            className="h-10 w-auto"
          />
        </a>
      </div>
      <div className="flex lg:hidden items-center gap-4" >
        <ThemeButton {...props} />
        <button
          type="button"
          onClick={() => setMobileMenuOpen(true)}
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-slate-400"
        >
          <span className="sr-only dark:text-slate-500">Open main menu</span>
          <Bars3Icon aria-hidden="true" className="h-6 w-6" />
        </button>
      </div>
      <div className="hidden lg:flex lg:gap-x-12" >
        {navigation.map((item) => (
          <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900 dark:text-slate-300">
            {item.name}
          </a>
        ))}
      </div>
      <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-4">
        <ThemeButton {...props} />
        <a href="/login" className="text-sm font-semibold leading-6 text-customBlue" >
          Log in <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </nav>
    <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
      <div className="fixed inset-0 z-50" />
      <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-slate-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <a href="https://www.bis.gov.in/" className="-m-1.5 p-1.5">
            <span className="sr-only dark:text-slate-500">Bureau of Indian Standards</span>
            <img
              alt="BIS Logo"
              src="icons/logo.png"
              className="h-10 w-auto"
            />
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-slate-400"
          >
            <span className="sr-only dark:text-slate-500">Close menu</span>
            <XMarkIcon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-400">
            <div className="space-y-2 py-6">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-100 dark:text-slate-300 dark:hover:bg-slate-800"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="py-6">
              <a
                href="/login"
                className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-100 dark:text-slate-300 dark:hover:bg-slate-800"
              >
                Log in
              </a>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
}