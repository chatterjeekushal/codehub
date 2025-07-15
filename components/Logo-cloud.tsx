
// app/components/carousel-demo.tsx

'use client';

import React from 'react';
import { AnimatedCarousel } from '@/components/logo-carousel';

const partnerLogos = [
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', alt: 'C++' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg', alt: 'C' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg', alt: 'C#' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', alt: 'JavaScript' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', alt: 'TypeScript' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg', alt: 'Next.js' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', alt: 'React' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg', alt: 'Vue.js' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', alt: 'Python' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg', alt: 'Django' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg', alt: 'Flask' },

    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', alt: 'HTML5' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', alt: 'CSS3' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg', alt: 'Ruby' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg', alt: 'Go' },
];

export default function CarouselDemo() {
    return (
        <div className="w-screen flex items-start justify-center">
            <AnimatedCarousel
                title="Your Favorite Languages, One Editor"
                logos={partnerLogos.map(logo => logo.src) as string[]}
                autoPlayInterval={3500}
                itemsPerViewMobile={3} // Shows 3 on mobile
                itemsPerViewDesktop={6} // Shows 6 on desktop
                logoContainerWidth="w-24 sm:w-28 md:w-32 lg:w-36" // Responsive width
                logoContainerHeight="h-12 sm:h-14 md:h-16 lg:h-20" // Responsive height
                logoImageWidth="w-full"
                logoImageHeight="h-full"
                padding="pb-8 sm:pb-12 md:pb-16"
                spacing="gap-4 sm:gap-6 md:gap-8"

            />
        </div>
    );
}
