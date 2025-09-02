/*
 * @Author: fengli
 * @Description:
 * @Date: 2025-09-02 10:43:25
 * @lastEditors: fengli
 * @lastEditTime:
 */
import Carousel from '@/Carousel';
import React from 'react';

const CarouselDemo: React.FC = () => {
  return (
    <div style={{ height: '20rem', width: '100%' }}>
      <Carousel autoPlay={false} width={100} defaultAnimationTime={3}>
        <img
          src="/images/1.jpg"
          style={{ height: '100%', width: '100%', objectFit: 'cover' }}
        />
        <img
          src="/images/2.jpg"
          style={{ height: '100%', width: '100%', objectFit: 'cover' }}
        />
        <img
          src="/images/3.jpg"
          style={{ height: '100%', width: '100%', objectFit: 'cover' }}
        />
      </Carousel>
    </div>
  );
};
export default CarouselDemo;
