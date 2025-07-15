
'use client';
import React from 'react';
import { Facebook, Twitter, Instagram, Github } from 'lucide-react';

const Footer = () => {
    return (
        <section className="py-10 sm:pt-16 lg:pt-24 w-full bg-[#0f1117] text-[#e0e0e0]">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
                    {/* Logo + Social */}
                    <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
                        <img
                            className="w-auto h-9"
                            src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg"
                            alt="Company Logo"
                        />
                        <p className="text-base leading-relaxed mt-7">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                        </p>

                        <ul className="flex items-center space-x-3 mt-9">
                            <li>
                                <a href="#" aria-label="Twitter">
                                    <Twitter className="w-5 h-5 text-[#e0e0e0] hover:text-blue-500 transition-colors" />
                                </a>
                            </li>
                            <li>
                                <a href="#" aria-label="Facebook">
                                    <Facebook className="w-5 h-5 text-[#e0e0e0] hover:text-blue-500 transition-colors" />
                                </a>
                            </li>
                            <li>
                                <a href="#" aria-label="Instagram">
                                    <Instagram className="w-5 h-5 text-[#e0e0e0] hover:text-blue-500 transition-colors" />
                                </a>
                            </li>
                            <li>
                                <a href="#" aria-label="GitHub">
                                    <Github className="w-5 h-5 text-[#e0e0e0] hover:text-blue-500 transition-colors" />
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Company</p>
                        <ul className="mt-6 space-y-4">
                            {["About", "Features", "Works", "Career"].map((item) => (
                                <li key={item}>
                                    <a
                                        href="#"
                                        className="flex text-base text-[#e0e0e0] hover:text-blue-500 transition-colors"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Help Links */}
                    <div>
                        <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Help</p>
                        <ul className="mt-6 space-y-4">
                            {["Customer Support", "Delivery Details", "Terms & Conditions", "Privacy Policy"].map((item) => (
                                <li key={item}>
                                    <a
                                        href="#"
                                        className="flex text-base text-[#e0e0e0] hover:text-blue-500 transition-colors"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter Placeholder */}
                    <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
                        <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Subscribe to newsletter</p>
                        {/* Add newsletter form here when ready */}
                    </div>
                </div>

                <hr className="mt-16 mb-10 border-gray-600" />

                <p className="text-sm text-center text-[#e0e0e0]">
                    © {new Date().getFullYear()} All Rights Reserved by Postcraft
                </p>
            </div>
        </section>
    );
};

export default Footer;
