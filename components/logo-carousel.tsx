
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { TextRoll } from "./ui/text-roll";

// ✅ Reusable LogoItem component (Next.js Image optimized)
interface LogoItemProps {
  src: string;
  alt?: string;
  containerClassName?: string;
  imageClassName?: string;
}

export const LogoItem: React.FC<LogoItemProps> = ({
  src,
  alt = "Logo",
  containerClassName = "bg-[#0f1117] w-32 md:w-40 lg:w-48 h-16 md:h-20 lg:h-24",
  imageClassName = "",
}) => {
  return (
    <div
      className={`relative flex items-center justify-center rounded-md p-2 md:p-4 transition-colors duration-300 ${containerClassName} hover:bg-gray-600`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-contain filter invert transition duration-300 ${imageClassName}`}
        loading="lazy"
        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 20vw, 10vw"
      />
    </div>
  );
};

// ✅ Responsive AnimatedCarousel component
interface AnimatedCarouselProps {
  title?: string;
  logoCount?: number;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  logos?: string[] | null;
  containerClassName?: string;
  titleClassName?: string;
  carouselClassName?: string;
  logoClassName?: string;
  itemsPerViewMobile?: number;
  itemsPerViewDesktop?: number;
  spacing?: string;
  padding?: string;
  logoContainerWidth?: string;
  logoContainerHeight?: string;
  logoImageWidth?: string;
  logoImageHeight?: string;
  logoMaxWidth?: string;
  logoMaxHeight?: string;
}

export const AnimatedCarousel: React.FC<AnimatedCarouselProps> = ({
  title = "100+ Language Models Supported",
  logoCount = 15,
  autoPlay = true,
  autoPlayInterval = 1000,
  logos = null,
  containerClassName = "bg-[#0f1117] flex flex-col items-center justify-center",
  titleClassName = "",
  carouselClassName = "w-full",
  logoClassName = "bg-[#0f1117]",
  itemsPerViewMobile = 3,
  itemsPerViewDesktop = 6,
  spacing = "gap-4 sm:gap-6 md:gap-8",
  padding = "pb-6 sm:pb-8 md:pb-10 lg:pb-12",
  logoContainerWidth = "w-32 md:w-40 lg:w-48",
  logoContainerHeight = "h-16 md:h-20 lg:h-24",
  logoImageWidth = "w-full",
  logoImageHeight = "h-full",
  logoMaxWidth = "",
  logoMaxHeight = "",
}) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api || !autoPlay) return;

    const timer = setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent((prev) => prev + 1);
      }
    }, autoPlayInterval);

    return () => clearTimeout(timer);
  }, [api, current, autoPlay, autoPlayInterval]);

  const logoItems =
    logos ||
    Array.from({ length: logoCount }, (_, i) =>
      `https://via.placeholder.com/200x100.png?text=Logo+${i + 1}`
    );

  const logoImageSizeClasses = `${logoImageWidth} ${logoImageHeight} ${logoMaxWidth} ${logoMaxHeight}`.trim();

  return (
    <div className={`w-full ${padding} ${containerClassName}`}>
      <div className="container mx-auto">
        <div className={`flex flex-col ${spacing} items-center`}>
          <h2
            className={`
              bg-clip-text 
              bg-gradient-to-r from-purple-400 to-pink-600 
              font-extrabold 
              text-4xl md:text-4xl lg:text-6xl 
              tracking-tight 
              max-w-6xl 
              leading-relaxed
              mb-6 sm:mb-8
              p-4 sm:p-6 
              rounded-2xl 
              shadow-2xl 
              text-center
              ${titleClassName}
            `}
          >
            <TextRoll>{title}</TextRoll>
          </h2>

          <div className="w-full">
            <Carousel setApi={setApi} className={`w-full ${carouselClassName}`}>
              <CarouselContent>
                {logoItems.map((logo, index) => (
                  <CarouselItem
                    key={index}
                    className={`
                      basis-1/${itemsPerViewMobile} 
                      sm:basis-1/${Math.max(itemsPerViewMobile, 4)} 
                      md:basis-1/${Math.max(itemsPerViewMobile, 5)} 
                      lg:basis-1/${itemsPerViewDesktop}
                    `}
                  >
                    <LogoItem
                      src={logo}
                      alt={`Logo ${index + 1}`}
                      containerClassName={`${logoContainerWidth} ${logoContainerHeight} ${logoClassName}`}
                      imageClassName={logoImageSizeClasses}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

// ✅ Simple wrapper for easy usage
export const Case1 = (props: AnimatedCarouselProps) => {
  return <AnimatedCarousel {...props} />;
};
