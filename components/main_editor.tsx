
"use client";

import Image from "next/image";
import React from "react";

export default function MainEditor() {
    return (
        <section className="flex flex-col items-center justify-center w-full bg-[#0f1117]">
            {/* Full-screen responsive image */}
            <div className="relative w-full aspect-[16/9] md:h-screen bg-[#0f1117]">
                <Image
                    src="https://res.cloudinary.com/db4ax3ufm/image/upload/v1752132256/inline_code_editor/macblack_1_db05ug.png"
                    alt="Inline Code Editor Fullscreen Preview"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                />
            </div>

            {/* Responsive paragraph */}
            <div className="max-w-2xl px-4 py-6 sm:py-8 md:py-10 text-center">
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed">
                    <span className="text-[#1E90FF] font-semibold">Inline Code Editor</span> is a powerful and intuitive code editor designed to enhance your coding experience. With its sleek interface and robust features, it allows you to write, edit, and debug code seamlessly. Whether you&apos;re a beginner or an experienced developer, <span className="text-[#1E90FF] font-semibold">Inline Code Editor</span> provides the tools you need to streamline your workflow and boost productivity.
                </p>
            </div>
        </section>
    );
}
