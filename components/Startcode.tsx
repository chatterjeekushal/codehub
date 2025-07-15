
"use client";

import React from "react";
import Image from "next/image";

function Startcode() {
    return (
        <div className="flex flex-col items-start justify-start w-full h-auto px-4 py-8 md:py-12 md:items-center md:justify-center bg-[#0f1117] text-[#e0e0e0]">
            <div className="w-full max-w-6xl 2xl:max-w-7xl text-left relative">

                <h1 className="text-3xl md:text-5xl font-bold text-gray-200 mb-8 leading-snug mt-3 md:mt-0">
                    <span>Start coding with </span>
                    <span className="text-blue-400">one click,</span>
                    <br />
                    <span>No setup required</span>
                </h1>

                <div className="relative w-full mx-auto flex items-center justify-center mb-8">
                    {/* Glow Effect */}
                    <div className="absolute bottom-4 w-3/4 h-24 bg-[#0077b6] blur-3xl opacity-30 rounded-full z-0" />

                    {/* Image */}
                    <Image
                        src="https://res.cloudinary.com/db4ax3ufm/image/upload/v1752420010/inline_code_editor/Adobe_Express_-_file_1_asmpnb.png"
                        alt="Start coding with one click"
                        width={1920}
                        height={1080}
                        className="rounded-lg shadow-lg w-full h-auto object-cover relative z-10"
                        priority
                    />
                </div>
            </div>
        </div>
    );
}

export default Startcode;
