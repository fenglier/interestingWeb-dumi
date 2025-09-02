import React from "react";
interface CarouselProps {
    children: React.ReactNode[];
    autoPlay?: boolean;
    interval?: number;
    width: number;
    defaultAnimationTime: number;
}
declare const Carousel: React.FC<CarouselProps>;
interface AnimationCarouselProps {
    items: {
        element: React.ReactNode;
        width: number;
    }[];
    animationTime: number;
}
declare const AnimationCarousel: React.FC<AnimationCarouselProps>;
export { AnimationCarousel };
export default Carousel;
