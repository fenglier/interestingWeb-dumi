/*
 * @Author: fengli
 * @Description: 
 * @Date: 2025-09-02 11:10:53
 * @lastEditors: fengli
 * @lastEditTime: 
 */
import { AnimationCarousel } from 'interestingWeb';
import React from 'react';
import img1 from './images/1.jpg';
import img2 from './images/2.jpg';
import img3 from './images/3.jpg';

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
                src={img1}
                style={{ height: '100%', width: '100%', objectFit: 'cover' }}
              />
            ),
          },
          {
            width: '400',
            element: (
              <img
                src={img2}
                style={{ height: '100%', width: '100%', objectFit: 'cover' }}
              />
            ),
          },
          {
            width: '400',
            element: (
              <img
                src={img3}
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
