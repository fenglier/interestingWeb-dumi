---
title: 黑胶播放器
order: 7
demo:
  cols: 2
---

## 使用场景

用于播放音乐

## 代码演示

```tsx
import React from 'react';
import { MusicPlayer } from 'interestingWeb';

const RecordDemo = () => {
  const musicInfo = {
    title: '音三',
    subtitle: 'Voice1',
    description: 'First Sound Story',
    url: '/interestingWeb-dumi/music.mp3',
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
};
export default RecordDemo;
```

## API

## 实现原理

1. 首先需要将唱片和唱臂的不同状态，进行切图；
2. 每 60hz 旋转一下。
