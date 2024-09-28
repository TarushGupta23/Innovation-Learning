export default function Games() {
    return <section className="bg-white dark:bg-slate-900 z-0">
        <div className="relative isolate px-6 py-20 lg:px-8">

            <div className="flex relative p-14 gap-20 items-center flex-col-reverse lg:flex-row">
                <div className="flex flex-col gap-8 flex-1 dark:text-slate-300 text-gray-600">
                    <div>
                        <h1 className="text-3xl font-bold dark:text-slate-100 text-gray-900">About Us</h1>
                        <p className="text-justify my-2">
                            The Bureau of Indian Standards (BIS) is the National Standards Body of India, established under the BIS Act 2016, for the harmonious development of standardization, marking, and quality certification of goods. BIS plays a pivotal role in ensuring that the quality of products, services, and systems across various sectors meets internationally recognized standards, enhancing India's competitiveness in the global market.
                        </p>
                    </div>
                    
                    <div>
                        <h2 className="text-3xl font-bold dark:text-slate-100 text-gray-900">Our Mission</h2>
                        <p className="text-justify my-2">
                            At BIS, we aim to protect the interests of consumers, promote industry growth, and support government policies through the development of quality standards. Our goal is to ensure the availability of quality products and services for the public, contributing to the safety, economy, and technological advancement of the nation.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold dark:text-slate-100 text-gray-900">Why Standards Matter</h2>
                        <p className="text-justify my-2">
                            Standards ensure reliability, safety, and sustainability. They help to:
                            <ul className="list-disc px-8">
                                <li>Protect consumers by ensuring products are safe and reliable.</li>
                                <li>Facilitate trade by providing a common language between suppliers and consumers.</li>
                                <li>Encourage innovation by setting benchmarks for performance and quality.</li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>

            <div
                aria-hidden="true"
                className="absolute inset-x-0 top-full -z-10 -translate-y-full overflow-hidden blur-3xl"
            >
                <div
                    style={{
                        clipPath:
                            'polygon(50% 98%, 90% 80%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 32% 42%, 100.2% 12.5%, 0.5% 7.7%, -20.1% 54.9%, 17.9% 100%)',
                    }}
                    className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-customBlue to-customRed opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                />
            </div>
        </div>
    </section>
}