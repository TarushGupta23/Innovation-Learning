export default function About() {
    return <section className="bg-white dark:bg-slate-900">
        <div className="relative isolate px-6 pt-14 lg:px-8">
            <div
                aria-hidden="true"
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            >
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-customRed to-customBlue opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                />
            </div>

            <div className="flex relative p-14 gap-20 items-center">
                <div className="flex flex-col gap-8 flex-1">
                    <div>
                        <h1 className="text-3xl font-bold">About Us</h1>
                        <p className="text-justify my-2">
                            The Bureau of Indian Standards (BIS) is the National Standards Body of India, established under the BIS Act 2016, for the harmonious development of standardization, marking, and quality certification of goods. BIS plays a pivotal role in ensuring that the quality of products, services, and systems across various sectors meets internationally recognized standards, enhancing India's competitiveness in the global market.
                        </p>
                    </div>
                    
                    <div>
                        <h2 className="text-3xl font-bold">Our Mission</h2>
                        <p className="text-justify my-2">
                            At BIS, we aim to protect the interests of consumers, promote industry growth, and support government policies through the development of quality standards. Our goal is to ensure the availability of quality products and services for the public, contributing to the safety, economy, and technological advancement of the nation.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold">Why Standards Matter</h2>
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

                <div className="grid grid-cols-2 gap-8 p-4">
                    <div className="bg-white shadow-xl h-60 w-80 rounded-md">

                    </div>
                    <div className="bg-white shadow-xl h-60 w-80 rounded-md"></div>
                    <div className="bg-white shadow-xl h-60 w-80 rounded-md"></div>
                    <div className="bg-white shadow-xl h-60 w-80 rounded-md"></div>
                </div>
            </div>
            
            {/* <div
                aria-hidden="true"
                className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            >
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-customBlue to-customRed opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                />
            </div> */}
        </div>
    </section>
}