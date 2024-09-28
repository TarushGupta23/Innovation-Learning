import Card from "./Card";

export default function About() {
    return <section className="bg-white dark:bg-slate-900 z-0">
        <div className="relative isolate px-6 py-20 lg:px-8">
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

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8 p-4 text-black list-none flex-1">
                    <Card title="Standardization" text="We develop and publish Indian Standards across various industries to ensure uniformity and quality in products and services." />
                    <Card title="Certification" text="BIS provides certification to products, ensuring they meet the necessary safety and quality requirements." />
                    <Card title="Testing" text="Our laboratories conduct scientific and technical testing for a range of products, ensuring compliance with Indian Standards." />
                    <Card title="Awareness & Training" text="Through workshops, training, and awareness programs, we educate manufacturers, consumers, and stakeholders about the importance of standards in daily life." />
                </ul>
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