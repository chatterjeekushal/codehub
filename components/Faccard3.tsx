
"use client";

import Image from "next/image";
import Link from "next/link";

export default function Card() {
    return (
        <div className="relative flex flex-col md:flex-row-reverse w-full bg-[#9eee9e] shadow-sm  overflow-hidden md:h-90 sm:h-auto 2xl:mt-3 2xl:h-full">

            {/* Content Section - FIRST on mobile */}
            <div className="p-6 lg:px-20 leading-3 flex flex-col justify-evenly w-full md:w-3/5">
                <div>
                    <div className="mb-4 rounded-full py-0.5 px-2.5 text-xs text-black shadow-sm w-fit">
                        ANYWHERE & ANYTIME
                    </div>
                    <h4 className="mb-3 text-2xl sm:text-3xl md:text-4xl text-black font-bold">
                        Enhances collaboration with developers in real time via github.
                    </h4>
                    <p className="mb-6 text-black leading-relaxed font-sans sm:text-base">
                        Master the art of coding efficiency with our comprehensive guide to VS Code shortcuts.
                        Whether you&apos;re a beginner or a seasoned developer, these tips will help you navigate
                        your code editor like a pro, saving you time and boosting your productivity.
                    </p>

                </div>
                <Link href="#" className="text-black font-semibold text-sm hover:underline flex items-center w-fit ">
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </Link>
            </div>

            {/* Image Section - SECOND on mobile */}
            <div className="relative w-full md:w-2/5 h-64 md:h-auto xl:mt-6 xl:h-auto 2xl:h-100">
                <Image
                    src="https://res.cloudinary.com/db4ax3ufm/image/upload/v1752388536/inline_code_editor/Adobe_Express_-_file_q91kdd.png"
                    alt="code editor illustration"
                    fill
                    className="object-cover md:object-center"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 40vw"
                    priority
                />
            </div>
        </div>
    );
}
