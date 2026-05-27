/**
 * 格式化时间显示
 * @param seconds - 秒数
 * @returns 格式化后的时间字符串 (HH:MM:SS 或 MM:SS)
 * @example
 * formatTime(0) => "00:00"
 * formatTime(65) => "01:05"
 * formatTime(3665) => "01:01:05"
 */
export const formatTime = (seconds: number = 0): string => {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  const pad = (n: number) => String(n).padStart(2, '0');

  return h > 0 ? `${pad(h)}:${pad(m)}:${pad(s)}` : `${pad(m)}:${pad(s)}`;
};

/**
 * 将时间字符串转换为秒数
 * @param timeString - 时间字符串 (HH:MM:SS 或 MM:SS)
 * @returns 秒数
 * @example
 * parseTime("01:05") => 65
 * parseTime("01:01:05") => 3665
 */
export const parseTime = (timeString: string): number => {
  const parts = timeString.split(':').map(Number);
  if (parts.length === 3) {
    const [h, m, s] = parts;
    return h * 3600 + m * 60 + s;
  } else if (parts.length === 2) {
    const [m, s] = parts;
    return m * 60 + s;
  }
  return 0;
};
