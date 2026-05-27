import { useCallback, useState } from 'react';
import type { PlayMode } from '../types';

/**
 * usePlayMode Hook
 * 管理播放模式（顺序播放、列表循环、单曲循环、随机播放）
 *
 * @returns 播放模式控制对象
 */
export const usePlayMode = () => {
  // 默认为列表循环播放
  const [playMode, setPlayMode] = useState<PlayMode>('loop-all');

  /**
   * 切换播放模式
   */
  const changePlayMode = useCallback((mode: PlayMode) => {
    setPlayMode(mode);
    console.log('[usePlayMode] Play mode changed to:', mode);
  }, []);

  /**
   * 重置播放模式为默认值（列表循环）
   */
  const resetPlayMode = useCallback(() => {
    setPlayMode('loop-all');
    console.log('[usePlayMode] Play mode reset to: loop-all');
  }, []);

  return {
    playMode,
    setPlayMode,
    changePlayMode,
    resetPlayMode,
  };
};
