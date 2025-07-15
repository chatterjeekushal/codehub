
"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="bg-gradient-to-br from-purple-400 font-sans via-blue-400  w-full">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none text-black md:text-5xl xl:text-6xl">
                        Place to develop various source code.
                    </h1>
                    <p className="max-w-2xl mb-6 font-light text-black/80 lg:mb-8 md:text-lg lg:text-xl">
                        From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.
                    </p>
                    <div className="flex flex-wrap gap-3">

                        <Link
                            href="#"
                            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-[#e0e0e0] bg-black/80 rounded-lg hover:bg-gray-900 focus:ring-4 focus:ring-gray-100 dark:text-white dark:bg-transparent dark:border-white/40 dark:hover:bg-white/10 dark:focus:ring-white/20"
                        >
                            Try now it&apos;s free
                            <svg
                                className="w-5 h-5 ml-2 -mr-1"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </Link>

                    </div>
                </div>

                {/* Image Section */}
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex relative">
                    <Image
                        src="https://res.cloudinary.com/db4ax3ufm/image/upload/v1752420530/inline_code_editor/Adobe_Express_-_file_2_hvvkwi.png"
                        alt="mockup"
                        width={1029}
                        height={900}
                        className="object-contain w-full h-auto"
                        priority
                    />
                </div>

            </div>
        </section>
    );
}
