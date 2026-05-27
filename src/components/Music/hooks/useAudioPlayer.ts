import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * useAudioPlayer Hook
 * 负责音频播放的核心控制逻辑
 *
 * @param url - 音频文件 URL
 * @param autoPlay - 是否自动播放（默认 false）
 * @param onEnded - 播放结束回调
 * @param onError - 音频加载失败回调
 *
 * @returns 音频播放器控制对象
 */
export const useAudioPlayer = (
  url?: string,
  autoPlay: boolean = false,
  onEnded?: () => void,
  onError?: (error: Error) => void,
) => {
  // 音频元素引用
  const audioRef = useRef<HTMLAudioElement>(new Audio());

  // 播放状态
  const [playing, setPlaying] = useState<boolean>(false);

  // 当前播放时间（秒）
  const [currentTime, setCurrentTime] = useState<number>(0);

  // 总时长（秒）
  const [duration, setDuration] = useState<number>(0);

  // 音频加载状态
  const [loaded, setLoaded] = useState<boolean>(false);

  /**
   * 音频元数据加载完成
   */
  const onLoadedMetadata = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    setDuration(audio.duration || 0);
    setLoaded(true);

    console.log(
      '[useAudioPlayer] Audio metadata loaded, duration:',
      audio.duration,
    );
  }, []);

  /**
   * 时间更新
   */
  const onTimeUpdate = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    setCurrentTime(audio.currentTime);
  }, []);

  /**
   * 播放结束
   */
  const handleEnded = useCallback(() => {
    setPlaying(false);
    onEnded?.();
  }, [onEnded]);

  /**
   * 音频加载错误处理
   */
  const handleError = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const error = new Error(
      `Audio load failed: ${audio.error?.message || 'Unknown error'}`,
    );
    console.error('[useAudioPlayer] Audio error:', error);
    onError?.(error);
  }, [onError]);

  /**
   * 初始化音频源
   */
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // 设置音频源
    if (url && url !== audio.src) {
      console.log('[useAudioPlayer] Loading audio:', url);

      // 重置播放状态
      setPlaying(false);
      setCurrentTime(0);
      setDuration(0);
      setLoaded(false);

      audio.src = url;
      audio.load();
    }

    // 添加事件监听
    audio.addEventListener('loadedmetadata', onLoadedMetadata);
    audio.addEventListener('timeupdate', onTimeUpdate);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);

    // 清理函数
    return () => {
      audio.removeEventListener('loadedmetadata', onLoadedMetadata);
      audio.removeEventListener('timeupdate', onTimeUpdate);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
    };
  }, [url, onLoadedMetadata, onTimeUpdate, handleEnded, handleError]);

  /**
   * 播放
   */
  const play = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio || !url) return;

    try {
      await audio.play();
      setPlaying(true);
      console.log('[useAudioPlayer] Playing');
    } catch (error) {
      console.error('[useAudioPlayer] Play failed:', error);
      onError?.(error as Error);
    }
  }, [url, onError]);

  /**
   * 自动播放
   */
  useEffect(() => {
    if (loaded && autoPlay) {
      play();
    }
  }, [loaded, autoPlay]);

  /**
   * 暂停
   */
  const pause = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.pause();
    setPlaying(false);
    console.log('[useAudioPlayer] Paused');
  }, []);

  /**
   * 播放/暂停切换
   */
  const togglePlay = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      pause();
    } else {
      play();
    }
  }, [playing, play, pause]);

  /**
   * 跳转指定秒数
   * @param offset - 偏移量（秒），正数向前，负数向后
   */
  const seek = useCallback((offset: number) => {
    const audio = audioRef.current;
    if (!audio || !audio.duration) return;

    const nextTime = Math.min(
      Math.max(0, audio.currentTime + offset),
      audio.duration,
    );
    audio.currentTime = nextTime;
    console.log(
      '[useAudioPlayer] Seek:',
      offset,
      'seconds, current time:',
      nextTime,
    );
  }, []);

  /**
   * 跳转到指定时间
   * @param time - 目标时间（秒）
   */
  const seekTo = useCallback((time: number) => {
    const audio = audioRef.current;
    if (!audio || !audio.duration) return;

    const targetTime = Math.min(Math.max(0, time), audio.duration);
    audio.currentTime = targetTime;
    console.log('[useAudioPlayer] Seek to:', targetTime);
  }, []);

  /**
   * 设置播放速度
   * @param rate - 播放速度（0.5 - 2.0）
   */
  const setPlaybackRate = useCallback((rate: number) => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.playbackRate = rate;
    console.log('[useAudioPlayer] Playback rate:', rate);
  }, []);

  /**
   * 获取当前播放状态
   */
  const getPlaying = useCallback(() => {
    return playing;
  }, [playing]);

  /**
   * 获取当前播放时间
   */
  const getCurrentTime = useCallback(() => {
    return audioRef.current?.currentTime || 0;
  }, []);

  /**
   * 组件卸载时清理
   */
  useEffect(() => {
    return () => {
      const audio = audioRef.current;
      if (audio) {
        audio.pause();
        audio.src = '';
      }
    };
  }, []);

  return {
    audioRef,
    playing,
    setPlaying,
    currentTime,
    duration,
    loaded,
    play,
    pause,
    togglePlay,
    seek,
    seekTo,
    setPlaybackRate,
    getPlaying,
    getCurrentTime,
  };
};
