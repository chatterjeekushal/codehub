
"use client";

import Image from "next/image";
import Link from "next/link";

export default function Card() {
    return (
        <div className="relative flex flex-col md:flex-row w-full  bg-[#020408] shadow-sm  overflow-hidden md:h-90  sm:h-auto">
            {/* Content Section */}
            <div className="p-6 lg:px-20 leading-3 flex flex-col justify-between w-full md:w-3/5">
                <div>
                    <div className="mb-4 rounded-full py-0.5 px-2.5 text-xs text-gray-400 shadow-sm w-fit">
                        ANYWHERE & ANYTIME
                    </div>
                    <h4 className="mb-3 text-2xl sm:text-3xl md:text-4xl font-semibold text-[#e0e0e0]">
                        Coding made easy harness the power of an{" "}
                        <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text">
                            online code editor
                        </span>{" "}
                        in your browser
                    </h4>

                    <p className="mb-6 text-gray-300 leading-relaxed font-normal text-sm sm:text-base">
                        Experience the convenience of coding directly in your browser with our
                        powerful code editor. No installations, no hassle – just pure coding
                        freedom. Whether you're a beginner or an experienced developer, our
                        editor is designed to enhance your coding experience.


                    </p>
                </div>
                <Link
                    href="#"
                    className="text-[#e0e0e0] font-semibold text-sm hover:underline flex items-center w-fit"
                >
                    Learn More
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-2 h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                    </svg>
                </Link>
            </div>

            {/* Image Section */}
            <div className="relative w-full md:w-2/5 h-64 md:h-auto">
                <Image
                    src="https://res.cloudinary.com/db4ax3ufm/image/upload/v1752134122/inline_code_editor/Adobe_Express_-_file_1_bczxtr.png"
                    alt="code editor illustration"
                    fill
                    className="object-cover md:object-top"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 40vw"
                    priority
                />
            </div>
        </div>
    );
}
