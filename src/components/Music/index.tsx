import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';
import { ControlButtons } from './components/ControlButtons';
import { Header } from './components/Header';
import { ProgressBar } from './components/ProgressBar';
import Turntable from './components/Turntable';
import { useAudioPlayer } from './hooks/useAudioPlayer';
import { usePlayMode } from './hooks/usePlayMode';
import './index.scss';
import type { MusicPlayerProps, MusicPlayerRef } from './types';

/**
 * MusicPlayer 组件
 * 音乐播放器主组件，使用遥控器控制
 *
 * @component
 * @example
 * ```tsx
 * <MusicPlayer
 *   musicInfo={{
 *     title: "音三",
 *     subtitle: "Voice1",
 *     description: "First Sound Story",
 *     url: "/path/to/audio.mp3"
 *   }}
 *   onBack={() => console.log('Back')}
 *   onMore={() => console.log('More')}
 * />
 * ```
 */
const MusicPlayer = forwardRef<MusicPlayerRef, MusicPlayerProps>(
  (
    {
      musicInfo,
      onBack,
      onMore,
      onEnded,
      onError,
      skipBackwardSeconds = 10,
      skipForwardSeconds = 10,
      musicList = [],
    },
    ref,
  ) => {
    // 音频播放器
    const audioPlayer = useAudioPlayer(musicInfo.url, true, onEnded, onError);

    // 播放模式
    const playMode = usePlayMode();

    // 当前播放的音乐索引
    const [currentMusicIndex, setCurrentMusicIndex] = useState(0);
    // 音乐播放历史记录
    const [playHistory, setPlayHistory] = useState<number[]>([]);

    /**
     * 快退处理
     */
    const handleRewind = useCallback(() => {
      audioPlayer.seek(-skipBackwardSeconds);
    }, [audioPlayer, skipBackwardSeconds]);

    /**
     * 快进处理
     */
    const handleForward = useCallback(() => {
      audioPlayer.seek(skipForwardSeconds);
    }, [audioPlayer, skipForwardSeconds]);

    /**
     * 进度条调整处理
     */
    const handleSeek = useCallback(
      (offset: number) => {
        audioPlayer.seek(offset);
      },
      [audioPlayer],
    );

    /**
     * 播放上一个音乐（从播放历史记录中获取）
     */
    const onPreviousMusic = () => {
      console.log('[onPreviousMusic] 播放上一个音乐');
      console.log('[onPreviousMusic] 播放历史:', playHistory);

      if (playHistory.length > 0) {
        // 从历史记录中获取上一首音乐的索引
        const previousIndex = playHistory[playHistory.length - 1];
        console.log(
          '[onPreviousMusic] 播放历史中的上一首:',
          musicList[previousIndex].title,
        );

        // 更新历史记录（移除最后一首）
        setPlayHistory((prev) => prev.slice(0, -1));

        // 切换到上一首
        setCurrentMusicIndex(previousIndex);
      } else {
        console.log('[onPreviousMusic] 播放历史为空，使用列表中的上一首');
        // 如果没有历史记录，使用列表中的上一首
        const prevIndex =
          (currentMusicIndex - 1 + musicList.length) % musicList.length;
        setCurrentMusicIndex(prevIndex);
      }
    };

    /**
     * 播放下一个音乐
     */
    const onNextMusic = () => {
      console.log('[onNextMusic] 播放下一个音乐');
      if (musicList.length === 0) return;

      let nextIndex: number;
      if (playMode.playMode === 'shuffle') {
        // 随机播放模式
        do {
          nextIndex = Math.floor(Math.random() * musicList.length);
        } while (nextIndex === currentMusicIndex && musicList.length > 1);
        console.log(
          '[onNextMusic] 随机选择下一首:',
          musicList[nextIndex].title,
        );
      } else {
        // 顺序播放、列表循环模式
        nextIndex = (currentMusicIndex + 1) % musicList.length;
        console.log(
          '[onNextMusic] 顺序选择下一首:',
          musicList[nextIndex].title,
        );
      }

      // 将当前音乐添加到播放历史
      setPlayHistory((prev) => [...prev, currentMusicIndex]);
      setCurrentMusicIndex(nextIndex);
    };

    // 监听播放结束事件
    useEffect(() => {
      if (!audioPlayer.playing) return;

      const audio = audioPlayer.audioRef.current;
      if (!audio) return;

      const handleAudioEnded = () => {
        // 根据播放模式决定是否重新播放
        if (playMode.playMode === 'loop-one') {
          // 单曲循环：重新开始播放
          audioPlayer.seekTo(0);
          audioPlayer.play();
        } else if (
          playMode.playMode === 'loop-all' ||
          playMode.playMode === 'shuffle'
        ) {
          // 列表循环和随机播放：内部控制下一首
          onNextMusic();
        } else {
          // 顺序播放：播放结束，停止
          console.log('[handleAudioEnded] 顺序播放结束');
        }
      };

      audio.addEventListener('ended', handleAudioEnded);
      return () => {
        audio.removeEventListener('ended', handleAudioEnded);
      };
    }, [audioPlayer, playMode.playMode, onEnded]);

    /**
     * 暴露给父组件的方法
     */
    useImperativeHandle(
      ref,
      () => ({
        play: audioPlayer.play,
        pause: audioPlayer.pause,
        seekTo: audioPlayer.seekTo,
        setPlaybackRate: audioPlayer.setPlaybackRate,
        getPlaying: audioPlayer.getPlaying,
        getCurrentTime: audioPlayer.getCurrentTime,
        getPlayMode: () => playMode.playMode,
      }),
      [audioPlayer],
    );

    /**
     * 初始化焦点
     */
    useEffect(() => {
      // 设置初始焦点到播放/暂停按钮
      // setFocus('play-pause');
    }, []);

    return (
      <>
        <div
          id="music-player"
          className="music-player"
          // onBack={(event: React.KeyboardEvent<HTMLElement>) => {
          //   event.stopPropagation();
          //   onBack?.();
          // }}
        >
          {/* 顶部标题栏 */}
          <Header musicInfo={musicInfo} onBack={onBack} onMore={onMore} />

          <Turntable
            isPlaying={audioPlayer.playing}
            className="music-player-turntable"
          />

          <div className="music-player-footer">
            {/* 进度条 */}
            <ProgressBar
              currentTime={audioPlayer.currentTime}
              duration={audioPlayer.duration}
              onSeek={handleSeek}
              focusId="progress"
            />

            {/* 播放控制按钮 */}
            <ControlButtons
              isPlaying={audioPlayer.playing}
              onTogglePlay={audioPlayer.togglePlay}
              onRewind={handleRewind}
              onForward={handleForward}
              rewindSeconds={skipBackwardSeconds}
              forwardSeconds={skipForwardSeconds}
              onPrevious={onPreviousMusic}
              onNext={onNextMusic}
              playMode={playMode.playMode}
              onPlayModeChange={playMode.changePlayMode}
            />
          </div>
        </div>
      </>
    );
  },
);

MusicPlayer.displayName = 'MusicPlayer';

export default MusicPlayer;
export type { MusicPlayerProps, MusicPlayerRef } from './types';
