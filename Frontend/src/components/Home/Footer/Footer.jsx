export default function Footer() {
    return <footer className="relative z-50">
        <div className="relative isolate">
            <div className="flex flex-col gap-4 dark:text-slate-300 z-90 text-gray-600 items-center p-8 bg-gray-50 dark:bg-slate-800">

                <ul className="w-full flex list-none flex-col lg:flex-row gap-4">
                    <li className="flex-[2] gap-4 flex flex-col items-start">
                        <img src="/icons/logo.png" alt="bis logo" className="h-16" />
                        <p className="">Bureau of Indian Standards (BIS) is the National Standard Body of India, established under the BIS Act for the harmonious development of standardization, marking, and quality certification of goods.</p>
                    </li>

                    <li className="flex-1">
                        <h3 className="text-xl font-bold dark:text-slate-100 text-gray-900">Quick Links</h3>
                        <ol className="list-none">
                            <li>BIS Standards</li>
                            <li>Certification</li>
                            <li>Consumer Affairs</li>
                            <li>Downloads</li>
                            <li>FAQs</li>
                        </ol>
                    </li>

                    <li className="flex-1">
                        <h3 className="text-xl font-bold dark:text-slate-100 text-gray-900">Contact Us</h3>
                        <ol>
                            <li>Bureau of Indian Standards,</li>
                            <li>Manak Bhavan, 9 Bahadur Shah Zafar Marg,</li>
                            <li>New Delhi - 110002</li>
                            <li>Phone: +91-11-2323-0131</li>
                            <li>Email: info@bis.gov.in</li>
                        </ol>
                    </li>

                    <li className="flex-1">
                        <h3 className="text-xl font-bold dark:text-slate-100 text-gray-900">Follow Us</h3>
                        <ol>
                            <li>Twitter: @BIS_India</li>
                            <li>LinkedIn: Bureau of Indian Standards</li>
                            <li>YouTube: BIS India Channel</li>
                        </ol>
                    </li>
                </ul>

                <p className="text-center dark:text-gray-100 text-gray-900">© 2024 Bureau of Indian Standards. All rights reserved.</p>
            </div>
        </div>
    </footer>
}