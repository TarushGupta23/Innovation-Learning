export default function HeroSection() {
  return (
        <section className="mx-auto max-w-3xl py-32 sm:py-48 lg:py-56 relative z-10 h-[100vh]">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 dark:text-slate-400 dark:ring-slate-300/20 dark:hover:ring-slate-300/30">
              Explore official Indian standards on our website,{' '}
              <a href="https://www.services.bis.gov.in/php/BIS_2.0/bisconnect/knowyourstandards/indian_standards/isdetails" className="font-semibold text-customBlue">
                <span aria-hidden="true" className="absolute inset-0" />
                visit Now <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-slate-100">
            {/* Bureau of Indian Standards */}
            Innovative Learning
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-slate-400">
            {/* Empowering India through standards. BIS ensures quality, safety, and reliability in products and services. Stay informed with the latest Indian Standards. */}
            Empowering India through learning. We ensure quality, safety, and reliability in services. Stay informed with the latest Information.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/games"
                className="rounded-md bg-customBlue px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-customBlueDark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-customBlueDark"
              >
                Explore Games
              </a>
              <a href="https://www.bis.gov.in/the-bureau/about-bis/" className="text-sm font-semibold leading-6 text-gray-900 dark:text-slate-100" >
                Learn more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </section>
  )
}
