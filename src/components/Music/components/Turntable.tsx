import { useEffect, useRef, useState } from 'react';
import styles from './Turntable.module.scss';

const importImageResources = (
  type: 'record' | 'arm',
  start: number,
  end: number,
) => {
  const resources = [];
  for (let i = start; i <= end; i++) {
    try {
      resources.push(
        require(`../musicPlayerMaterial/${type}/${type}_${i}.png`),
      );
    } catch (error) {
      console.warn(`Failed to load image: ${type}_${i}.png`, error);
    }
  }
  return resources;
};

const recordFrames = importImageResources('record', 0, 49);
const armFrames = importImageResources('arm', 0, 30);

const baseImg = require('../musicPlayerMaterial/base.png');

// 音符图片
const note1 = require('../musicPlayerMaterial/ic_music1.png');
const note2 = require('../musicPlayerMaterial/ic_music2.png');

const RECORD_FRAME_COUNT = recordFrames.length;
const ARM_FRAME_COUNT = armFrames.length;

interface Note {
  id: number;
  x: number;
  y: number;
  scale: number;
  speed: number;
  img: string;
}

const Turntable = ({
  isPlaying = false,
  className,
}: {
  isPlaying: boolean;
  className?: string;
}) => {
  // const [isPlaying, setIsPlaying] = useState(false);
  const [recordFrame, setRecordFrame] = useState(0);
  const [armFrame, setArmFrame] = useState(0);
  const [notes, setNotes] = useState<Note[]>([]);

  const recordRef = useRef<NodeJS.Timeout | null>(null);
  const armRef = useRef<NodeJS.Timeout | null>(null);
  const noteRef = useRef<NodeJS.Timeout | null>(null);

  // const togglePlay = () => setIsPlaying(!isPlaying);

  // 唱片旋转
  useEffect(() => {
    if (isPlaying) {
      recordRef.current = setInterval(() => {
        setRecordFrame((prev) => (prev + 1) % RECORD_FRAME_COUNT);
      }, 50);
    } else {
      clearInterval(recordRef.current!);
    }
    return () => clearInterval(recordRef.current!);
  }, [isPlaying]);

  // 唱臂动画
  useEffect(() => {
    let frame = armFrame;
    const run = () => {
      if (isPlaying && frame < ARM_FRAME_COUNT - 1) frame++;
      if (!isPlaying && frame > 0) frame--;
      setArmFrame(frame);

      if (
        (isPlaying && frame < ARM_FRAME_COUNT - 1) ||
        (!isPlaying && frame > 0)
      ) {
        armRef.current = setTimeout(run, 60);
      }
    };
    run();
    return () => clearTimeout(armRef.current!);
  }, [isPlaying]);

  // ==================== 图片音符上浮动画 ====================
  useEffect(() => {
    if (!isPlaying) {
      setNotes([]);
      return;
    }

    noteRef.current = setInterval(() => {
      const newNote: Note = {
        id: Date.now() + Math.random(),
        x: 290 + Math.random() * 274, // 音符出生位置
        y: 0 + Math.random() * 15,
        scale: 0.6 + Math.random() * 0.4,
        speed: 3 + Math.random() * 0.8,
        img: Math.random() > 0.5 ? note1 : note2, // 随机两种音符
      };

      setNotes((prev) => [...prev, newNote].slice(-8));
    }, 580);

    return () => clearInterval(noteRef.current!);
  }, [isPlaying]);

  return (
    <div className={`${styles.wrapper} ${className}`}>
      <div className={styles.player}>
        <img src={baseImg} className={styles.base} alt="base" />
        <img
          src={recordFrames[recordFrame]}
          className={styles.record}
          alt="record"
        />
        <img src={armFrames[armFrame]} className={styles.arm} alt="arm" />

        {/* 图片音符 */}
        {notes.map((note) => (
          <img
            key={note.id}
            className={styles.noteImg}
            src={note.img}
            style={{
              left: `${note.x}px`,
              top: `${note.y}px`,
              transform: `scale(${note.scale})`,
              animationDuration: `${note.speed}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Turntable;
