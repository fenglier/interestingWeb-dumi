/*
 * @Author: fengli
 * @Description:
 * @Date: 2025-09-02 10:43:25
 * @lastEditors: fengli
 * @lastEditTime:
 */
import Carousel from '@/components/Carousel';
import React from 'react';
import img1 from './images/1.jpg';
import img2 from './images/2.jpg';
import img3 from './images/3.jpg';

const CarouselDemo: React.FC = () => {
  return (
    <div style={{ height: '20rem', width: '100%' }}>
      <Carousel autoPlay={false} width={100} defaultAnimationTime={3}>
        <img
          src={img1}
          style={{ height: '100%', width: '100%', objectFit: 'cover' }}
        />
        <img
          src={img2}
          style={{ height: '100%', width: '100%', objectFit: 'cover' }}
        />
        <img
          src={img3}
          style={{ height: '100%', width: '100%', objectFit: 'cover' }}
        />
      </Carousel>
    </div>
  );
};
export default CarouselDemo;
