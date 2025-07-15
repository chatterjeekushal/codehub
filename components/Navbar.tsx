
'use client';

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SearchBar from "@/components/ui/Search";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => setIsOpen(!isOpen);

    return (
        <nav className="fixed w-full z-20 top-0 start-0 bg-[#0f1117]/80 backdrop-blur border-b border-[#2a2d34]">
            <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2">
                    <Image
                        src="https://flowbite.com/docs/images/logo.svg"
                        alt="Logo"
                        width={32}
                        height={32}
                        className="h-8 w-8"
                        priority
                    />
                    <span className="text-xl font-semibold text-[#e0e0e0]">Flowbite</span>
                </Link>

                {/* Desktop Search */}
                <div className="hidden md:block flex-1 mx-8 max-w-lg">
                    <SearchBar />
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6 items-center text-[#e0e0e0]">
                    {["Home", "About", "Services", "Contact"].map((item) => (
                        <Link
                            key={item}
                            href="/"
                            className="hover:text-[#3d8bfd] transition-colors duration-200"
                        >
                            {item}
                        </Link>
                    ))}
                    <button
                        className="px-4 py-2 rounded-lg bg-[#3d8bfd] text-[#ffffff] hover:bg-[#4f9cfd] transition-all duration-200 focus:outline-none focus:ring focus:ring-[#4f9cfd]/50"
                    >
                        Get Started
                    </button>
                </div>

                {/* Hamburger Button */}
                <button
                    onClick={toggleNavbar}
                    className="md:hidden p-2 rounded-lg hover:bg-[#181a20] transition-colors focus:outline-none"
                    aria-label="Toggle Menu"
                >
                    {isOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#e0e0e0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#e0e0e0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden px-4 pb-4 space-y-4 bg-[#181a20]/95 backdrop-blur border-t border-[#2a2d34]">
                    <SearchBar />
                    <nav className="flex flex-col space-y-2">
                        {["Home", "About", "Services", "Contact"].map((item) => (
                            <Link
                                key={item}
                                href="/"
                                className="block px-4 py-2 rounded-md text-[#e0e0e0] hover:bg-[#1e2128] transition-colors duration-200"
                            >
                                {item}
                            </Link>
                        ))}
                        <button
                            className="w-full px-4 py-2 rounded-md bg-[#3d8bfd] text-[#ffffff] hover:bg-[#4f9cfd] transition-all duration-200 focus:outline-none focus:ring focus:ring-[#4f9cfd]/50"
                        >
                            Get Started
                        </button>
                    </nav>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
