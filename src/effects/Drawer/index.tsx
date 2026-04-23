/*
 * @Author: fengli
 * @Description: 抽屉组件，支持上下左右四个方向的定位
 * @Date: 2026-04-23
 */
import React, { ReactNode, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import style from './index.module.scss';

export type DrawerPosition = 'left' | 'right' | 'top' | 'bottom';

interface DrawerProps {
  /** 抽屉是否打开 */
  open: boolean;
  /** 抽屉位置 */
  position?: DrawerPosition;
  /** 抽屉内容 */
  children: ReactNode;
  /** 点击遮罩层是否关闭抽屉 */
  closable?: boolean;
  /** 抽屉宽度（左右方向）或高度（上下方向） */
  size?: number | string;
  /** 抽屉过渡动画时长（毫秒） */
  duration?: number;
  /** 自定义遮罩层样式 */
  maskClass?: string;
  /** 自定义抽屉内容样式 */
  drawerClass?: string;
}

const Drawer: React.FC<DrawerProps> = ({
  open,
  position = 'right',
  children,
  closable = true,
  size = 320,
  duration = 300,
  maskClass = '',
  drawerClass = '',
}) => {
  const drawerRef = useRef<HTMLDivElement>(null);
  const [maskVisible, setMaskVisible] = useState(false);
  // 获取关闭时的transform值
  const getClosedTransform = (): string => {
    switch (position) {
      case 'left':
        return 'translateX(-100%)';
      case 'right':
        return 'translateX(100%)';
      case 'top':
        return 'translateY(-100%)';
      case 'bottom':
        return 'translateY(100%)';
      default:
        return 'translateX(100%)';
    }
  };
  // 处理遮罩层动画
  useEffect(() => {
    if (open) {
      // 先显示遮罩层
      setMaskVisible(true);
      // 等待下一次渲染再触发抽屉动画
      requestAnimationFrame(() => {
        if (drawerRef.current) {
          drawerRef.current.style.transition = `transform ${duration}ms ease-in-out`;
        }
      });
    } else {
      // 先开始关闭动画
      if (drawerRef.current) {
        drawerRef.current.style.transform = getClosedTransform();
      }
      // 动画结束后隐藏遮罩层
      setTimeout(() => {
        setMaskVisible(false);
      }, duration);
    }
  }, [open, position, duration]);

  // 获取打开时的transform值
  const getOpenTransform = (): string => {
    switch (position) {
      case 'left':
        return 'translateX(0)';
      case 'right':
        return 'translateX(0)';
      case 'top':
        return 'translateY(0)';
      case 'bottom':
        return 'translateY(0)';
      default:
        return 'translateX(0)';
    }
  };

  // 处理点击遮罩层
  const handleMaskClick = (e: React.MouseEvent) => {
    if (closable && e.target === e.currentTarget) {
      // 触发外部关闭事件
      const customEvent = new CustomEvent('drawer:close');
      window.dispatchEvent(customEvent);
    }
  };

  // 计算抽屉尺寸
  const getDrawerStyle = (): React.CSSProperties => {
    const baseStyle: React.CSSProperties = {
      position: 'fixed',
      zIndex: 1000,
    };

    switch (position) {
      case 'left':
        return {
          ...baseStyle,
          left: 0,
          top: 0,
          bottom: 0,
          width: typeof size === 'number' ? `${size}px` : size,
          transform: open ? getOpenTransform() : getClosedTransform(),
        };
      case 'right':
        return {
          ...baseStyle,
          right: 0,
          top: 0,
          bottom: 0,
          width: typeof size === 'number' ? `${size}px` : size,
          transform: open ? getOpenTransform() : getClosedTransform(),
        };
      case 'top':
        return {
          ...baseStyle,
          top: 0,
          left: 0,
          right: 0,
          height: typeof size === 'number' ? `${size}px` : size,
          transform: open ? getOpenTransform() : getClosedTransform(),
        };
      case 'bottom':
        return {
          ...baseStyle,
          bottom: 0,
          left: 0,
          right: 0,
          height: typeof size === 'number' ? `${size}px` : size,
          transform: open ? getOpenTransform() : getClosedTransform(),
        };
      default:
        return baseStyle;
    }
  };

  // 渲染内容到 body
  return maskVisible
    ? ReactDOM.createPortal(
        <div
          className={`${style.mask} ${maskClass}`}
          onClick={handleMaskClick}
          style={{
            opacity: open ? 1 : 0,
            transition: `opacity ${duration}ms ease-in-out`,
            pointerEvents: open ? 'auto' : 'none',
          }}
        >
          <div
            ref={drawerRef}
            className={`${style.drawer} ${drawerClass} ${position}`}
            style={getDrawerStyle()}
          >
            {children}
          </div>
        </div>,
        document.body,
      )
    : null;
};

export default Drawer;
