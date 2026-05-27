/**
 * 音乐播放器类型定义
 */

/** 音乐信息 */
export interface MusicInfo {
  /** 音乐标题 */
  title: string;
  /** 副标题 */
  subtitle?: string;
  /** 描述信息 */
  description?: string;
  /** 音频 URL */
  url?: string;
  /** 总时长（秒） */
  duration?: number;
  /** 封面图 URL */
  coverUrl?: string;
}

/** 播放模式（单一选择） */
export type PlayMode = 'sequence' | 'loop-all' | 'loop-one' | 'shuffle';

/** 音乐播放器 Props */
export interface MusicPlayerProps {
  /** 音乐信息 */
  musicInfo: MusicInfo;
  /** 返回按钮回调 */
  onBack?: () => void;
  /** 更多选项回调 */
  onMore?: () => void;
  /** 播放结束回调 */
  onEnded?: () => void;
  /** 音频加载失败回调 */
  onError?: (error: Error) => void;
  /** 快退秒数（默认 10 秒） */
  skipBackwardSeconds?: number;
  /** 快进秒数（默认 10 秒） */
  skipForwardSeconds?: number;
  /** 上一首回调 */
  onPrevious?: () => void;
  /** 下一首回调 */
  onNext?: () => void;
  musicList?: MusicInfo[];
}

/** 音乐播放器 Ref */
export interface MusicPlayerRef {
  /** 播放 */
  play: () => void;
  /** 暂停 */
  pause: () => void;
  /** 跳转到指定时间（秒） */
  seekTo: (time: number) => void;
  /** 设置播放速度 */
  setPlaybackRate: (rate: number) => void;
  /** 获取当前播放状态 */
  getPlaying: () => boolean;
  /** 获取当前播放时间 */
  getCurrentTime: () => number;
  /** 获取播放器的播放模式 */
  getPlayMode: () => PlayMode;
}

/** 进度条 Props */
export interface ProgressBarProps {
  /** 当前播放时间（秒） */
  currentTime: number;
  /** 总时长（秒） */
  duration: number;
  /** 进度变化回调（使用遥控器左右键调整） */
  onSeek: (offset: number) => void;
  /** 焦点 ID */
  focusId?: string;
}

/** 控制按钮 Props */
export interface ControlButtonProps {
  /** 图标 */
  icon: React.ReactNode;
  /** 点击回调 */
  onClick: () => void;
  /** 焦点 ID */
  focusId: string;
  /** 是否禁用 */
  disabled?: boolean;
  /** 额外的 className */
  className?: string;
  /** 是否是主要按钮（播放/暂停） */
  isPrimary?: boolean;
  /** 按钮标签（辅助功能） */
  label?: string;
}

/** 播放模式控制 Props */
export interface PlayModeControlProps {
  /** 当前播放模式 */
  playMode: PlayMode;
  /** 切换播放模式回调 */
  onPlayModeChange: (mode: PlayMode) => void;
}
