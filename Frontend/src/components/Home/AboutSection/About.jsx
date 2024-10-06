import Card from "./Card";

export default function About() {
    return <section className="relative z-50 min-h-[100vh">
        <div className="relative isolate px-6 py-20 lg:px-8">
            <div className="flex relative m-14 gap-20 items-center flex-col-reverse lg:flex-row z-50">
                <div className="flex flex-col gap-8 flex-1 dark:text-slate-300 z-90 text-gray-600">
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
        </div>
    </section>
}