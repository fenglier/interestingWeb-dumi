/*
 * @Author: fengli
 * @Description:
 * @Date: 2025-05-13 11:39:02
 * @lastEditors: fengli
 * @lastEditTime:
 */
import React, { useRef, useState } from 'react';
import { flushSync } from 'react-dom';
import style from './index.module.scss';

interface ImagePreviewProps {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
}

// 动画时长
const ANIMATION_TIME = 0.3;

const ImagePreview: React.FC<ImagePreviewProps> = ({
  src,
  alt,
  width,
  height,
}) => {
  // TODO:支持内置ALT
  const [zoomed, setZoomed] = useState<boolean>(false);
  const [transform, setTransform] = useState('');
  const preTransfromRef = useRef('');

  const imageRef = useRef<HTMLImageElement>(null);
  const zoomedRef = useRef<HTMLImageElement>(null);

  const handleClick = () => {
    if (!imageRef.current) return;
    // 禁止背景滚动
    document.documentElement.style.overflow = 'clip';

    const rect = imageRef.current.getBoundingClientRect();

    // 计算thumbnail相比于原图的缩放比率。FIXME:当图片过小的时候，放大后的尺寸不一定为window.innerHeight*0.9
    let scale;
    if (window.innerWidth > window.innerHeight) {
      // scale = rect.height / (window.innerHeight * 0.9);
      scale = (window.innerHeight * 0.9) / rect.height;
    } else {
      // scale = rect.width / (window.innerWidth * 0.9);
      scale = (window.innerWidth * 0.9) / rect.width;
    }

    const translateX = rect.left;
    const translateY = rect.top;

    const startTransform = `translate(${translateX}px, ${translateY}px) scale(1, 1)`;

    flushSync(() => {
      setTransform(startTransform);
      setZoomed(true);
    });
    // 通过transition控制动画
    const endTransform = `translate(50vw, 50vh) translate(-50%, -50%) scale(${scale}, ${scale})`;
    // NOTE:同步执行js代码，是不会有动画的。orgin → end 这一变化被当作一次性完成，没有触发动画。
    setTimeout(() => {
      preTransfromRef.current = startTransform;

      setTransform(endTransform);
    }, 50);
    /*  flushSync(() => {}); */
  };

  const handleClose = () => {
    // 动画关闭效果
    setTransform(preTransfromRef.current);
    setTimeout(() => {
      setZoomed(false);
      document.documentElement.style.overflow = '';
    }, ANIMATION_TIME * 1000);
  };

  const handleZoomImgClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const handleRotate = (clockwise: boolean) => {
    if (!zoomedRef.current) return;
    const currentTransform = zoomedRef.current.style.transform;

    zoomedRef.current.style.transformOrigin = 'center center';

    /* 在已有旋转的基础上旋转 */
    const rotateMatch = currentTransform.match(/rotate\(([-\d.]+)deg\)/);
    let currentAngle = rotateMatch ? parseFloat(rotateMatch[1]) : 0;
    if (clockwise) currentAngle += 90;
    else currentAngle -= 90;
    const newTransform = currentTransform.replace(
      /rotate\(([-\d.]+)deg\)/,
      `rotate(${currentAngle}deg)`,
    );
    if (!rotateMatch) {
      // 如果没有旋转部分，添加旋转
      zoomedRef.current.style.transform = `${currentTransform} rotate(${currentAngle}deg)`;
    } else {
      // 如果有旋转部分，更新旋转角度
      zoomedRef.current.style.transform = newTransform;
    }
  };

  const handleWheel = (e: React.WheelEvent) => {
    if (!zoomedRef.current) return;
    e.stopPropagation();
    const delta = e.deltaY;
    const currentTransform = zoomedRef.current.style.transform;
    const scaleMatch = currentTransform.match(/scale\(([\d.]+),\s*([\d.]+)\)/);
    let scaleX = 1;
    let scaleY = 1;
    if (scaleMatch) {
      scaleX = parseFloat(scaleMatch[1]);
      scaleY = parseFloat(scaleMatch[2]);
    } else {
      // 如果没有scale部分，添加scale
      zoomedRef.current.style.transform = `${currentTransform} scale(1, 1)`;
    }
    const scaleFactor = delta > 0 ? 0.9 : 1.1; // 放大或缩小的比例
    scaleX *= scaleFactor;
    scaleY *= scaleFactor;
    const newTransform = currentTransform.replace(
      /scale\(([\d.]+),\s*([\d.]+)\)/,
      `scale(${scaleX}, ${scaleY})`,
    );
    zoomedRef.current.style.transform = newTransform;
  };
  

  return (
    <>
      <img
        ref={imageRef}
        width={`${width ? width : 200}`}
        height={`${height ? height : 200}`}
        src={src || alt}
        /*     alt={alt} */
        className={style.thumbnail}
        onClick={handleClick}
      />

      {zoomed && (
        <>
          <div className={style.overlay} onClick={handleClose}>
            <img
              width={`${width ? width : 200}`}
              height={`${height ? height : 200}`}
              src={src || alt}
              onClick={handleZoomImgClick}
              className={style.zoomedImage}
              ref={zoomedRef}
              style={{
                transform: transform,
                transition: `transform ${ANIMATION_TIME}s ease`,
                // animation: `${style.scaleUp} 0.3s ease forwards`,
              }}
              onWheel={handleWheel}
            />
          </div>
          <div className={style.operationContainer}>
            <div
              className={style.operationItem}
              onClick={() => handleRotate(false)}
            >
              <svg
                viewBox="64 64 896 896"
                focusable="false"
                width="1em"
                height="1em"
                fill="currentColor"
              >
                <defs>
                  <style></style>
                </defs>
                <path d="M672 418H144c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32zm-44 402H188V494h440v326z"></path>
                <path d="M819.3 328.5c-78.8-100.7-196-153.6-314.6-154.2l-.2-64c0-6.5-7.6-10.1-12.6-6.1l-128 101c-4 3.1-3.9 9.1 0 12.3L492 318.6c5.1 4 12.7.4 12.6-6.1v-63.9c12.9.1 25.9.9 38.8 2.5 42.1 5.2 82.1 18.2 119 38.7 38.1 21.2 71.2 49.7 98.4 84.3 27.1 34.7 46.7 73.7 58.1 115.8a325.95 325.95 0 016.5 140.9h74.9c14.8-103.6-11.3-213-81-302.3z"></path>
              </svg>
            </div>
            <div
              className={style.operationItem}
              onClick={() => handleRotate(true)}
            >
              <svg
                viewBox="64 64 896 896"
                focusable="false"
                width="1em"
                height="1em"
                fill="currentColor"
              >
                <defs>
                  <style></style>
                </defs>
                <path d="M480.5 251.2c13-1.6 25.9-2.4 38.8-2.5v63.9c0 6.5 7.5 10.1 12.6 6.1L660 217.6c4-3.2 4-9.2 0-12.3l-128-101c-5.1-4-12.6-.4-12.6 6.1l-.2 64c-118.6.5-235.8 53.4-314.6 154.2A399.75 399.75 0 00123.5 631h74.9c-.9-5.3-1.7-10.7-2.4-16.1-5.1-42.1-2.1-84.1 8.9-124.8 11.4-42.2 31-81.1 58.1-115.8 27.2-34.7 60.3-63.2 98.4-84.3 37-20.6 76.9-33.6 119.1-38.8z"></path>
                <path d="M880 418H352c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32zm-44 402H396V494h440v326z"></path>
              </svg>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ImagePreview;
