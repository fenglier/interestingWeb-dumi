/*
 * @Author: fengli
 * @Description: 
 * @Date: 2025-09-02 10:43:25
 * @lastEditors: fengli
 * @lastEditTime: 
 */
import { Carousel } from 'interestingWeb';
import React from 'react';

const CarouselDemo: React.FC = () => {
  return (
    <div style={{ height: '20rem', width: '100%' }}>
      <Carousel autoPlay={false} width={100} defaultAnimationTime={3}>
        <img
          src="https://images.pexels.com/photos/33668610/pexels-photo-33668610.jpeg"
          style={{ height: '100%', width: '100%', objectFit: 'cover' }}
        />
        <img
          src="https://images.unsplash.com/photo-1631354111370-40aba7ab8d6e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          style={{ height: '100%', width: '100%', objectFit: 'cover' }}
        />
        <img
          src="https://images.unsplash.com/photo-1717337702411-56d978e8c9d4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          style={{ height: '100%', width: '100%', objectFit: 'cover' }}
        />
      </Carousel>
    </div>
  );
};
export default CarouselDemo;
