# MusicPlayer 组件使用说明

## 组件概述

MusicPlayer 是一个专为投影仪遥控器操作设计的音乐播放器组件，具有以下特点：

- ✅ 完整的播放控制（播放/暂停、快进、快退）
- ✅ 进度条显示和调整（遥控器左右键）
- ✅ 循环模式（关闭/单曲/列表循环）
- ✅ 随机播放模式
- ✅ Base UI 焦点管理支持
- ✅ 响应式设计
- ✅ 高可读性和可维护性

## 文件结构

```
Music/
├── index.tsx              # 主组件
├── index.less             # 样式文件
├── types.ts               # TypeScript 类型定义
├── hooks/
│   ├── useAudioPlayer.ts  # 音频播放逻辑 Hook
│   └── usePlayMode.ts     # 播放模式管理 Hook
├── components/
│   ├── Header.tsx         # 顶部标题栏
│   ├── CoverArea.tsx      # 中间封面区域
│   ├── ProgressBar.tsx    # 进度条
│   ├── ControlButton.tsx  # 通用控制按钮
│   ├── ControlButtons.tsx # 播放控制按钮组
│   └── SecondaryControls.tsx # 次要控制（随机/循环）
└── utils/
    └── formatTime.ts      # 时间格式化工具函数
```

## 基本使用

```tsx
import MusicPlayer from '@/components/Music';

function MusicPage() {
  const musicInfo = {
    title: '音三',
    subtitle: 'Voice1',
    description: 'First Sound Story',
    url: '/path/to/audio.mp3',
    duration: 234, // 可选，会自动从音频文件获取
    coverUrl: '/path/to/cover.jpg', // 可选
  };

  return (
    <MusicPlayer
      musicInfo={musicInfo}
      onBack={() => console.log('返回')}
      onMore={() => console.log('更多选项')}
      skipBackwardSeconds={10} // 可选，默认 10 秒
      skipForwardSeconds={10} // 可选，默认 10 秒
    />
  );
}
```

## Props

### MusicPlayerProps

| 属性                | 类型                   | 必填 | 默认值 | 说明                         |
| ------------------- | ---------------------- | ---- | ------ | ---------------------------- |
| musicInfo           | MusicInfo              | ✅   | -      | 音乐信息                     |
| onBack              | () => void             | ❌   | -      | 返回按钮回调                 |
| onMore              | () => void             | ❌   | -      | 更多选项回调                 |
| onEnded             | () => void             | ❌   | -      | 播放结束回调（非循环模式下） |
| onError             | (error: Error) => void | ❌   | -      | 音频加载失败回调             |
| skipBackwardSeconds | number                 | ❌   | 10     | 快退秒数                     |
| skipForwardSeconds  | number                 | ❌   | 10     | 快进秒数                     |

### MusicInfo

| 属性        | 类型   | 必填 | 说明         |
| ----------- | ------ | ---- | ------------ |
| title       | string | ✅   | 音乐标题     |
| subtitle    | string | ❌   | 副标题       |
| description | string | ❌   | 描述信息     |
| url         | string | ❌   | 音频 URL     |
| duration    | number | ❌   | 总时长（秒） |
| coverUrl    | string | ❌   | 封面图 URL   |

## Ref 方法

组件暴露了以下方法，可以通过 ref 调用：

```tsx
import { useRef } from 'react';
import MusicPlayer, { MusicPlayerRef } from '@/components/Music';

function App() {
  const playerRef = useRef<MusicPlayerRef>(null);

  const handlePlay = () => {
    playerRef.current?.play();
  };

  const handlePause = () => {
    playerRef.current?.pause();
  };

  const handleSeek = () => {
    playerRef.current?.seekTo(30); // 跳转到 30 秒
  };

  const handleSpeed = () => {
    playerRef.current?.setPlaybackRate(1.5); // 1.5 倍速
  };

  return (
    <div>
      <MusicPlayer ref={playerRef} musicInfo={musicInfo} />
      <button onClick={handlePlay}>播放</button>
      <button onClick={handlePause}>暂停</button>
    </div>
  );
}
```

### MusicPlayerRef 方法

| 方法            | 参数         | 返回值  | 说明                    |
| --------------- | ------------ | ------- | ----------------------- |
| play            | -            | void    | 播放音频                |
| pause           | -            | void    | 暂停音频                |
| seekTo          | time: number | void    | 跳转到指定时间（秒）    |
| setPlaybackRate | rate: number | void    | 设置播放速度（0.5-2.0） |
| getPlaying      | -            | boolean | 获取当前播放状态        |
| getCurrentTime  | -            | number  | 获取当前播放时间        |

## 焦点管理

组件使用 Base UI 的焦点管理系统，焦点 ID 定义如下：

| 焦点 ID    | 元素                 |
| ---------- | -------------------- |
| back       | 返回按钮             |
| more       | 更多菜单按钮         |
| rewind     | 快退按钮             |
| play-pause | 播放/暂停按钮        |
| forward    | 快进按钮             |
| progress   | 进度条（左右键调整） |
| shuffle    | 随机播放按钮         |
| repeat     | 循环播放按钮         |

可以通过 `useFocusEngine` 的 `setFocus` 方法控制焦点：

```tsx
import { useFocusEngine } from '@webui/hooks';

function App() {
  const { setFocus } = useFocusEngine();

  const focusOnPlay = () => {
    setFocus('play-pause');
  };
}
```

## 样式定制

组件使用 global.less 中定义的设计系统变量，如需自定义样式，可以修改 `index.less`：

```less
// 修改播放按钮大小
.control-btn-primary {
  width: 120px;
  height: 120px;
}

// 修改进度条颜色
.progress-bar-fill {
  background: your-color;
}
```

## 遥控器操作

| 按键                 | 功能                   |
| -------------------- | ---------------------- |
| 返回键               | 返回上一页             |
| 左右键（在进度条上） | 调整进度（每次 10 秒） |
| 确认键               | 播放/暂停、切换模式    |
| 上下键               | 焦点在按钮间切换       |

## 注意事项

1. **音频格式**：支持浏览器原生播放的音频格式（MP3、AAC、WAV 等）
2. **自动播放限制**：浏览器可能限制自动播放，建议用户手动触发
3. **焦点初始化**：组件挂载后会自动将焦点设置到播放/暂停按钮
4. **循环模式**：单曲循环模式下，播放结束不会触发 `onEnded` 回调

## 示例：播放列表支持

如需支持播放列表功能，可以结合 `onEnded` 回调实现：

```tsx
function PlaylistPlayer() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const playlist = [
    { title: '歌曲1', url: '/song1.mp3' },
    { title: '歌曲2', url: '/song2.mp3' },
    { title: '歌曲3', url: '/song3.mp3' },
  ];

  const handleNext = () => {
    if (currentIndex < playlist.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <MusicPlayer musicInfo={playlist[currentIndex]} onEnded={handleNext} />
  );
}
```
