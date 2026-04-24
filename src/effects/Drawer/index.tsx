import React, { ReactNode, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import style from './index.module.scss';

export type DrawerPosition = 'left' | 'right' | 'top' | 'bottom';

interface DrawerProps {
  open: boolean;
  position?: DrawerPosition;
  children: ReactNode;
  closable?: boolean;
  onClose?: () => void;
  size?: number | string;
  duration?: number;
  maskClass?: string;
  drawerClass?: string;
}

const Drawer: React.FC<DrawerProps> = ({
  open,
  position = 'right',
  children,
  closable = true,
  onClose = () => {},
  size = 320,
  duration = 900,
  maskClass = '',
  drawerClass = '',
}) => {
  const drawerRef = useRef<HTMLDivElement>(null);
  // const [maskVisible, setMaskVisible] = useState(false);

  // 关闭时 transform
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

  // 打开时 transform
  const getOpenTransform = (): string => {
    switch (position) {
      case 'left':
      case 'right':
        return 'translateX(0)';
      case 'top':
      case 'bottom':
        return 'translateY(0)';
      default:
        return 'translateX(0)';
    }
  };

  // 🔥 核心修复：统一管理动画状态，先设样式 + transition，再改位置
  useEffect(() => {
    if (open) {
      // setMaskVisible(true);
      requestAnimationFrame(() => {
        if (!drawerRef.current) return;
        // 第一步：设置过渡
        drawerRef.current.style.transition = `transform ${duration}ms ease-in-out`;
        // 第二步：触发打开动画
        drawerRef.current.style.transform = getOpenTransform();
      });
    } else {
      if (!drawerRef.current) return;
      // 关闭：直接改回隐藏位置
      drawerRef.current.style.transform = getClosedTransform();
      // 动画结束隐藏遮罩
      // setTimeout(() => setMaskVisible(false), duration);
    }
  }, [open, position, duration]);

  // 🔥 关键：初始渲染时就设置为关闭状态
  const getDrawerStyle = (): React.CSSProperties => {
    const baseStyle: React.CSSProperties = {
      position: 'fixed',
      zIndex: 1000,
      transform: getClosedTransform(), // 🔥 默认永远是关闭状态，不由 open 控制
    };

    switch (position) {
      case 'left':
        return {
          ...baseStyle,
          left: 0,
          top: 0,
          bottom: 0,
          width: typeof size === 'number' ? `${size}px` : size,
        };
      case 'right':
        return {
          ...baseStyle,
          right: 0,
          top: 0,
          bottom: 0,
          width: typeof size === 'number' ? `${size}px` : size,
        };
      case 'top':
        return {
          ...baseStyle,
          top: 0,
          left: 0,
          right: 0,
          height: typeof size === 'number' ? `${size}px` : size,
        };
      case 'bottom':
        return {
          ...baseStyle,
          bottom: 0,
          left: 0,
          right: 0,
          height: typeof size === 'number' ? `${size}px` : size,
        };
      default:
        return baseStyle;
    }
  };

  const handleMaskClick = () => {
    if (closable) {
      onClose();
    }
  };

  return ReactDOM.createPortal(
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
  );
};

export default Drawer;
