import type { ProgressBarProps } from '../types';
import { formatTime } from '../utils/formatTime';

/**
 * ProgressBar 组件
 * 进度条显示，使用遥控器左右键调整进度
 */
export const ProgressBar = ({
  currentTime,
  duration,
  // onSeek,
  focusId = 'progress',
}: ProgressBarProps) => {
  // 计算进度百分比
  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="progress-outer-wrapper">
      {/* 时间显示 */}
      <div className="progress-time-view">
        <span>{formatTime(currentTime)}</span>
        <span>{formatTime(duration)}</span>
      </div>
      {/* 进度条 */}
      <div
        // isShowShakeAnimation={false}
        id={focusId}
        // onLeft={(event: React.KeyboardEvent<HTMLInputElement>) => {
        //   event.stopPropagation();
        //   onSeek(-10);
        // }}
        // onRight={(event: React.KeyboardEvent<HTMLInputElement>) => {
        //   event.stopPropagation();
        //   onSeek(10);
        // }}
      >
        <div className="progress-bar-container">
          <button type="button" />
          <input
            type="range"
            min={0}
            max={100}
            value={progressPercent}
            className="progress-bar"
            style={
              {
                '--progress': `${progressPercent}%`,
              } as React.CSSProperties
            }
          />
        </div>
      </div>
    </div>
  );
};
