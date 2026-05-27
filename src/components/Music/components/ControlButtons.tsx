import { ReactComponent as PreviousIcon } from '../svg/Backward.svg';
import { ReactComponent as CycleIcon } from '../svg/Cycle.svg';
import { ReactComponent as NextIcon } from '../svg/Forward.svg';
import { ReactComponent as PauseIcon } from '../svg/Pause.svg';
import { ReactComponent as PlayIcon } from '../svg/Play.svg';
import { ReactComponent as RandomIcon } from '../svg/Random.svg';
import type { PlayMode } from '../types';
import { ControlButton } from './ControlButton';

/**
 * 单曲循环图标组件
 * 基于 Cycle.svg 但添加 "1" 标识
 */
const LoopOneIcon = () => (
  <svg viewBox="0 0 51 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M3 28.8163C4.125 28.4459 4.875 27.3349 4.5 26.2239C4.125 25.1129 4.125 23.6316 4.125 22.5206C4.125 15.1139 10.5 8.81819 18 8.81819H37.125V12.5215C37.125 13.6325 37.875 14.0029 39 13.6325L47.625 8.44785C48.75 7.70718 48.75 6.96651 47.625 6.22584L39 0.67082C37.875 -0.440184 37.125 -0.0698497 37.125 1.04115V4.7445H18C13.125 4.7445 8.625 6.59618 5.25 9.92919C1.875 13.2622 0 17.7062 0 22.5206C0 24.0019 0.375 25.8536 0.75 27.3349C1.125 28.0756 1.875 28.8163 2.625 28.8163H3ZM50.25 16.2249C49.875 15.4842 49.125 14.7435 48.375 14.7435H48C46.875 15.1139 46.125 16.2249 46.5 17.3359C46.875 18.4469 46.875 19.9282 46.875 21.0392C46.875 28.8163 40.5 35.112 32.625 35.112H13.875V31.4086C13.875 30.2976 13.125 29.9273 12 30.2976L3.375 35.8526C2.25 36.5933 2.25 37.334 3.375 38.0746L12 43.6297C13.125 44.3703 13.875 44 13.875 42.5187V38.8153H33C37.875 38.8153 42.375 36.9636 45.75 33.6306C49.125 30.2976 51 25.8536 51 21.0392C51 19.5579 50.625 17.7062 50.25 16.2249Z"
      fill="currentColor"
    />
    <text
      x="25.5"
      y="28"
      fontSize="14"
      fill="currentColor"
      textAnchor="middle"
      fontWeight="bold"
    >
      1
    </text>
  </svg>
);

interface ControlButtonsProps {
  /** 是否正在播放 */
  isPlaying: boolean;
  /** 播放/暂停回调 */
  onTogglePlay: () => void;
  /** 快退回调 */
  onRewind: () => void;
  /** 快进回调 */
  onForward: () => void;
  /** 上一首回调 */
  onPrevious?: () => void;
  /** 下一首回调 */
  onNext?: () => void;
  /** 快退秒数 */
  rewindSeconds?: number;
  /** 快进秒数 */
  forwardSeconds?: number;
  /** 当前播放模式 */
  playMode: PlayMode;
  /** 切换播放模式回调 */
  onPlayModeChange: (mode: PlayMode) => void;
}

/**
 * ControlButtons 组件
 * 主要播放控制按钮：上一首、快退、播放/暂停、快进、下一首
 */
export const ControlButtons = ({
  isPlaying,
  onTogglePlay,
  onPrevious,
  onNext,
  // rewindSeconds = 10,
  // forwardSeconds = 10,
  playMode,
  onPlayModeChange,
}: ControlButtonsProps) => {
  // 定义播放模式循环顺序（只包含循环模式，去掉顺序播放）
  const playModeOrder: PlayMode[] = ['loop-all', 'loop-one', 'shuffle'];

  // 切换播放模式的处理函数
  const handleTogglePlayMode = () => {
    // 找到当前模式的索引
    const currentIndex = playModeOrder.indexOf(playMode);
    // 计算下一个模式的索引（循环）
    const nextIndex = (currentIndex + 1) % playModeOrder.length;
    // 设置下一个模式
    onPlayModeChange(playModeOrder[nextIndex]);
  };

  // 获取当前模式的显示文本
  const getCurrentMode = () => {
    switch (playMode) {
      case 'loop-all':
        return ['列表循环', <CycleIcon key="loop-all" />];
      case 'loop-one':
        return ['单曲循环', <LoopOneIcon key="loop-one" />];
      case 'shuffle':
        return ['随机播放', <RandomIcon key="shuffle" />];
      default:
        return ['列表循环', <CycleIcon key="loop-all" />];
    }
  };

  return (
    <div className="music-player-controls">
      {/* 合并的播放模式按钮 */}
      <div className="music-player-control-left">
        <ControlButton
          icon={getCurrentMode()[1]}
          onClick={handleTogglePlayMode}
          focusId="play-mode-toggle"
          label={getCurrentMode()[0] as string}
        />
      </div>
      <div className="music-player-control-middle">
        {/* 上一首按钮 */}
        {onPrevious && (
          <ControlButton
            icon={<PreviousIcon />}
            onClick={onPrevious}
            isPrimary={true}
            focusId="previous"
            label="上一首"
          />
        )}

        {/* 快退按钮 */}
        {/* <ControlButton
        icon={<RewindIcon />}
        onClick={onRewind}
        focusId="rewind"
        label={`快退 ${rewindSeconds} 秒`}
      /> */}

        {/* 播放/暂停按钮（主要按钮） */}
        <ControlButton
          icon={isPlaying ? <PauseIcon /> : <PlayIcon />}
          onClick={onTogglePlay}
          focusId="play-pause"
          isPrimary={true}
          label={isPlaying ? '暂停' : '播放'}
        />

        {/* 快进按钮 */}
        {/* <ControlButton
        icon={<ForwardIcon />}
        onClick={onForward}
        focusId="forward"
        label={`快进 ${forwardSeconds} 秒`}
      /> */}

        {/* 下一首按钮 */}
        {onNext && (
          <ControlButton
            icon={<NextIcon />}
            onClick={onNext}
            isPrimary={true}
            focusId="next"
            label="下一首"
          />
        )}
      </div>
    </div>
  );
};
