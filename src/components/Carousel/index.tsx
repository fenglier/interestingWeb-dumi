/*
 * @Author: fengli
 * @Description:
 * @Date: 2025-09-02 10:20:23
 * @lastEditors: fengli
 * @lastEditTime:
 */
import styles from '@/components/Carousel/index.module.scss';
import { debounce } from 'lodash';
import React, { useEffect, useRef, useState } from 'react';

interface CarouselProps {
  children: React.ReactNode[];
  autoPlay?: boolean;
  interval?: number;
  width: number;
  defaultAnimationTime: number;
}

const Carousel: React.FC<CarouselProps> = ({
  children,
  autoPlay = true,
  interval = 3000,
  width = 50,
  defaultAnimationTime = 1,
}) => {
  const [innerAutoPlay, setInnerAutoPaly] = useState<boolean>(autoPlay);
  const [currentIndex, setCurrentIndex] = useState(1); // 初始显示第一张（实际是第2个元素）
  const currentIndexRef = useRef<number>(currentIndex);
  const [isAnimating, setIsAnimating] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const total = children.length;

  // 克隆 slides
  const slides = [
    children[children.length - 1], // clone last
    ...children,
    children[0], // clone first
  ];

  // 滑动函数
  const goToSlide = (index: number) => {
    if (!trackRef.current) return;
    if (isAnimating) return; // 避免重复点击
    setIsAnimating(true);
    setCurrentIndex(index);
  };

  const pre = debounce(() => {
    setInnerAutoPaly(false);
    goToSlide(currentIndex - 1);
  }, 100);
  const next = debounce(() => {
    setInnerAutoPaly(false);
    goToSlide(currentIndex + 1);
  }, 100);

  // 动画结束处理（实现无缝跳转）
  const handleTransitionEnd = () => {
    setIsAnimating(false);
    if (currentIndex === 0) {
      setCurrentIndex(total);
    } else if (currentIndex === total + 1) {
      setCurrentIndex(1);
    }
  };

  /*   // 自动轮播
  useEffect(() => {
    // FIXME:自动播放不正确。如何保证自动播放和按钮控制不冲突
    if (!innerAutoPlay) return;
    const timer = setInterval(() => {
      goToSlide(currentIndexRef.current + 1);
    }, defaultAnimationTime * 1000 + 1000);
    return () => clearInterval(timer);
  }, [currentIndex, innerAutoPlay]); */

  useEffect(() => {
    currentIndexRef.current = currentIndex; // 始终保持最新值
  }, [currentIndex]);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    if (innerAutoPlay) {
      const tick = (): void => {
        setCurrentIndex((prev) => {
          goToSlide(prev + 1);
          return prev + 1;
        });
        timeoutId = setTimeout(tick, defaultAnimationTime * 1000 + 50); // 每次设置新的定时器
      };
      tick(); // 启动
    }
    return () => clearTimeout(timeoutId); // 清理
  }, [innerAutoPlay]);

  return (
    <div className={styles.carousel}>
      <div className={styles.trackWrapper}>
        <div
          className={styles.track}
          ref={trackRef}
          style={{
            transform: `translateX(-${currentIndex * width}%)`,
            transition: isAnimating
              ? `transform ${defaultAnimationTime}s linear`
              : 'none',
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {slides.map((slide, i) => (
            <div
              className={styles.slide}
              style={{ flexBasis: `${width}%` }}
              key={i}
            >
              {slide}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.controls}>
        <button onClick={pre}>‹</button>
        <button onClick={next}>›</button>
      </div>
    </div>
  );
};

interface AnimationCarouselProps {
  items: { element: React.ReactNode; width: number; clickHandler:()=>void }[];
  animationTime: number;
}
const AnimationCarousel: React.FC<AnimationCarouselProps> = ({
  items,
  animationTime,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!contentRef.current) return;
    contentRef.current.style.animation = `${styles.marquee} ${animationTime}s linear infinite`;
  }, []);

  const renderItems = [...items, ...items];
  return (
    <div className={styles.scrollContainer}>
      <div className={styles.scrollContent} ref={contentRef}>
        {renderItems.map((item) => {
          return (
            <div
              className={styles.item}
              style={{ width: `${item.width}px` }}
              onClick={() => item.clickHandler && item.clickHandler(item)}
            >
              {item.element}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export { AnimationCarousel };
export default Carousel;
