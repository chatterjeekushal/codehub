
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Image from 'next/image';

export default function TestimonialSlider() {
    const testimonials = [
        {
            id: 1,
            rating: "4.9",
            text: "Pagedone has made it possible for me to stay on top of my portfolio and make informed decisions quickly and easily.",
            name: "Jane D",
            role: "CEO",
            image: "https://pagedone.io/asset/uploads/1696229969.png"
        },
        {
            id: 2,
            rating: "4.9",
            text: "Thanks to pagedone, I feel more informed and confident about my investment decisions than ever before.",
            name: "Harsh P.",
            role: "Product Designer",
            image: "https://pagedone.io/asset/uploads/1696229994.png"
        },
        {
            id: 3,
            rating: "4.9",
            text: "The customer service team at pagedone went above and beyond to help me resolve a billing issue.",
            name: "Alex K.",
            role: "Design Lead",
            image: "https://pagedone.io/asset/uploads/1696230027.png"
        },
        {
            id: 4,
            rating: "4.9",
            text: "Pagedone has made it possible for me to stay on top of my portfolio and make informed decisions quickly and easily.",
            name: "Jane D",
            role: "CEO",
            image: "https://pagedone.io/asset/uploads/1696229969.png"
        },
        {
            id: 5,
            rating: "4.9",
            text: "Thanks to pagedone, I feel more informed and confident about my investment decisions than ever before.",
            name: "Harsh P.",
            role: "Product Designer",
            image: "https://pagedone.io/asset/uploads/1696229994.png"
        }
    ];

    return (
        <section className="py-12 md:py-24 bg-[#0f1117] text-[#e0e0e0] w-full">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-8 md:mb-16">
                    <span className="text-sm text-gray-400 font-medium text-center block mb-2">TESTIMONIAL</span>
                    <h2 className="text-4xl md:text-4xl text-center font-bold text-[#e0e0e0]">
                        What our happy user says about <span className='text-blue-400'>metabox</span>
                    </h2>
                </div>

                <Swiper
                    modules={[Autoplay, Pagination]}
                    slidesPerView={1}
                    spaceBetween={32}
                    loop={true}
                    centeredSlides={true}
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    breakpoints={{
                        640: { slidesPerView: 1, spaceBetween: 32 },
                        768: { slidesPerView: 2, spaceBetween: 32 },
                        1024: { slidesPerView: 3, spaceBetween: 32 },
                    }}
                    className="pb-12"
                >
                    {testimonials.map((testimonial) => (
                        <SwiperSlide key={testimonial.id}>
                            <div className="group bg-gray-800 border border-gray-700 rounded-xl p-6 transition-all duration-500 hover:border-indigo-600 hover:shadow-sm h-full">
                                <div>
                                    <div className="flex items-center mb-4 md:mb-7 gap-2 text-amber-500 transition-all duration-500">
                                        <svg className="w-5 h-5" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                        <span className="text-base font-semibold text-indigo-400">{testimonial.rating}</span>
                                    </div>
                                    <p className="text-sm md:text-base text-[#e0e0e0] leading-6 transition-all duration-500 pb-6 md:pb-8 group-hover:text-gray-300">
                                        {testimonial.text}
                                    </p>
                                </div>

                                <div className="flex items-center gap-5 border-t border-gray-700 pt-5">
                                    <Image
                                        src={testimonial.image}
                                        alt="avatar"
                                        width={40}
                                        height={40}
                                        className="rounded-full h-10 w-10 object-cover"
                                    />
                                    <div>
                                        <h5 className="text-gray-200 font-medium mb-1">{testimonial.name}</h5>
                                        <span className="text-sm text-gray-400">{testimonial.role}</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <style jsx global>{`
                .swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet,
                .swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet {
                    width: 16px !important;
                    height: 4px !important;
                    border-radius: 5px !important;
                    margin: 0 6px !important;
                }

                .swiper-pagination-bullet-active {
                    background: #4F46E5 !important;
                }
            `}</style>
        </section>
    );
}
