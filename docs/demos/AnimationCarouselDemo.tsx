/*
 * @Author: fengli
 * @Description:
 * @Date: 2025-09-02 11:10:53
 * @lastEditors: fengli
 * @lastEditTime:
 */
import { AnimationCarousel } from '@/Carousel';
import React from 'react';

const AnimationCarouselDemo: React.FC = () => {
  return (
    <div style={{ width: '100%' }}>
      <AnimationCarousel
        animationTime={20}
        items={[
          {
            width: '400',
            element: (
              <img
                src="/images/1.jpg"
                style={{ height: '100%', width: '100%', objectFit: 'cover' }}
              />
            ),
          },
          {
            width: '400',
            element: (
              <img
                src="/images/2.jpg"
                style={{ height: '100%', width: '100%', objectFit: 'cover' }}
              />
            ),
          },
          {
            width: '400',
            element: (
              <img
                src="/images/3.jpg"
                style={{ height: '100%', width: '100%', objectFit: 'cover' }}
              />
            ),
          },
        ]}
      ></AnimationCarousel>
    </div>
  );
};
export default AnimationCarouselDemo;
