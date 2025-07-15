
'use client';

import React from 'react';
import { Spotlight } from "../components/ui/Spotlight";
import { BackgroundBeams } from "../components/ui/background-beams";
import Link from "next/link";
import Image from "next/image";

const ComponentName = () => {
    const handleClick = () => {
        console.log("hello");
    };

    return (
        <div className="relative bg-[#040916] w-full overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    className="w-full h-full object-cover opacity-10"
                    src="https://d33wubrfki0l68.cloudfront.net/1e0fc04f38f5896d10ff66824a62e466839567f8/699b5/images/hero/3/background-pattern.png"
                    alt="background pattern"
                    width={1920}
                    height={1080}
                />
            </div>

            <Spotlight
                className="-top-40 left-0 md:-top-20 md:left-60"
                fill="gray"
            />

            {/* Content */}
            <section className="relative py-14 sm:py-16 lg:pt-20 lg:pb-36 w-full bg-[#0f1117]">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="grid grid-cols-1 gap-y-8 lg:items-center lg:grid-cols-2 sm:gap-y-20 xl:grid-cols-5">
                        <div className="text-center xl:col-span-2 lg:text-left md:px-16 lg:px-0">
                            <div className="max-w-sm mx-auto sm:max-w-md md:max-w-full">
                                <h1 className="text-5xl font-bold leading-tight text-[#e0e0e0] sm:text-6xl lg:text-6xl font-pj">
                                    Code Anywhere, Build Anything with <span className="text-[#3d8bfd]">Codehub</span>
                                </h1>

                                <div className="mt-8 lg:mt-12 lg:flex lg:items-center">
                                    <div className="flex justify-center flex-shrink-0 -space-x-4 overflow-hidden lg:justify-start">
                                        {[
                                            "https://d33wubrfki0l68.cloudfront.net/3bfa6da479d6b9188c58f2d9a8d33350290ee2ef/301f1/images/hero/3/avatar-male.png",
                                            "https://d33wubrfki0l68.cloudfront.net/b52fa09a115db3a80ceb2d52c275fadbf84cf8fc/7fd8a/images/hero/3/avatar-female-1.png",
                                            "https://d33wubrfki0l68.cloudfront.net/8a2efb13f103a5ae2909e244380d73087a9c2fc4/31ed6/images/hero/3/avatar-female-2.png"
                                        ].map((src, idx) => (
                                            <Image
                                                key={idx}
                                                className="inline-block rounded-full w-14 h-14 ring-2 ring-[#2a2d34]"
                                                src={src}
                                                alt={`avatar-${idx}`}
                                                width={56}
                                                height={56}
                                            />
                                        ))}
                                    </div>

                                    <p className="mt-4 text-lg text-[#a0a0a0] lg:mt-0 lg:ml-4 font-pj">
                                        Join <span className="font-bold text-[#e0e0e0]">4600+ Developers</span> and start getting feedback now
                                    </p>
                                </div>
                            </div>

                            {/* Buttons */}
                            <div className="mt-8  sm:flex sm:items-center sm:justify-center lg:justify-start sm:space-x-5 lg:mt-12">
                                <Link
                                    href="/about"
                                    onClick={handleClick}
                                    className="inline-flex mr-4 items-center px-8 py-4 text-lg font-bold text-[#ffffff] bg-[#3d8bfd] rounded-xl transition-colors hover:bg-[#4f9cfd] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4f9cfd] font-pj cursor-pointer"
                                >
                                    Get Started
                                </Link>

                                <Link
                                    href="/about"
                                    onClick={handleClick}
                                    className="inline-flex items-center px-4 py-4 mt-4 text-lg font-bold bg-[#23262e] text-[#e0e0e0] rounded-xl transition-colors hover:bg-[#1e2128] hover:text-[#ffffff] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4f9cfd] sm:mt-0 font-pj cursor-pointer"
                                >
                                    <svg
                                        className="w-5 h-5 mr-2"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2.5}
                                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                                        />
                                    </svg>
                                    Learn More
                                </Link>
                            </div>
                        </div>

                        {/* Right Illustration */}
                        <div className="xl:col-span-3">
                            <Image
                                className="w-full mx-auto scale-110 rounded-lg"
                                src="https://d33wubrfki0l68.cloudfront.net/29c501c64b21014b3f2e225abe02fe31fd8f3a5c/f866d/images/hero/3/illustration.png"
                                alt="code feedback illustration"
                                width={800}
                                height={600}
                            />
                        </div>
                    </div>

                </div>
                <BackgroundBeams className='pointer-events-none absolute z-0' />
            </section>


        </div>
    );
};

export default ComponentName;