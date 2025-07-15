

import React from 'react';
import Image from 'next/image';

function Growing() {
    return (
        <div className="flex flex-col items-center justify-center w-full h-auto px-4 py-12 bg-[#0f1117] text-[#e0e0e0]">
            <h1 className="text-center text-4xl md:text-6xl font-bold mb-8">
                Every day the <span className='text-blue-400'>metabox</span> <br /> is always growing
            </h1>
            <div className="flex flex-row gap-4 mb-4">
                <button className="bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
                    Learn More
                </button>
                <button className="bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
                    Try Now, It’s Free
                </button>
            </div>
            <div className="w-full max-w-5xl mt-5 md:mt-5">
                <Image
                    src="https://res.cloudinary.com/db4ax3ufm/image/upload/v1752477430/inline_code_editor/Adobe_Express_-_file_1_lrvpav.png"
                    alt="Growing Metabox"
                    width={1920}
                    height={1080}
                    className="rounded-lg shadow-lg w-full h-auto object-cover"
                    priority
                />
            </div>
        </div>
    );
}

export default Growing;
