import type { ControlButtonProps } from '../types';

/**
 * ControlButton 组件
 * 通用控制按钮
 */
export const ControlButton = ({
  icon,
  onClick,
  focusId,
  disabled = false,
  className = '',
  isPrimary = false,
  label,
}: ControlButtonProps) => {
  return (
    <div id={focusId} onClick={onClick}>
      <button
        type="button"
        className={`control-btn ${
          isPrimary ? 'control-btn-primary' : 'control-btn'
        } ${className}`.trim()}
        disabled={disabled}
        aria-label={label}
      >
        {icon}
      </button>
    </div>
  );
};
