/**
 * 音乐播放器素材图片导入
 */

// ==================== Record 唱片图片 ====================
export const record0 = require('./record/0.png');
export const record1 = require('./record/1.png');
export const record2 = require('./record/2.png');
export const record3 = require('./record/3.png');
export const record4 = require('./record/4.png');
export const record5 = require('./record/5.png');
export const record6 = require('./record/6.png');
export const record7 = require('./record/7.png');
export const record8 = require('./record/8.png');
export const record9 = require('./record/9.png');
export const record10 = require('./record/10.png');
export const record11 = require('./record/11.png');
export const record12 = require('./record/12.png');
export const record13 = require('./record/13.png');
export const record14 = require('./record/14.png');
export const record15 = require('./record/15.png');
export const record16 = require('./record/16.png');
export const record17 = require('./record/17.png');
export const record18 = require('./record/18.png');
export const record19 = require('./record/19.png');
export const record20 = require('./record/20.png');
export const record21 = require('./record/21.png');
export const record22 = require('./record/22.png');
export const record23 = require('./record/23.png');
export const record24 = require('./record/24.png');
export const record25 = require('./record/25.png');
export const record26 = require('./record/26.png');
export const record27 = require('./record/27.png');
export const record28 = require('./record/28.png');
export const record29 = require('./record/29.png');
export const record30 = require('./record/30.png');
export const record31 = require('./record/31.png');
export const record32 = require('./record/32.png');
export const record33 = require('./record/33.png');
export const record34 = require('./record/34.png');
export const record35 = require('./record/35.png');
export const record36 = require('./record/36.png');
export const record37 = require('./record/37.png');
export const record38 = require('./record/38.png');
export const record39 = require('./record/39.png');
export const record40 = require('./record/40.png');
export const record41 = require('./record/41.png');
export const record42 = require('./record/42.png');
export const record43 = require('./record/43.png');
export const record44 = require('./record/44.png');
export const record45 = require('./record/45.png');
export const record46 = require('./record/46.png');
export const record47 = require('./record/47.png');
export const record48 = require('./record/48.png');
export const record49 = require('./record/49.png');

// ==================== Arm 指针图片 ====================
export const arm0 = require('./arm/0.png');
export const arm1 = require('./arm/1.png');
export const arm2 = require('./arm/2.png');
export const arm3 = require('./arm/3.png');
export const arm4 = require('./arm/4.png');
export const arm5 = require('./arm/5.png');
export const arm6 = require('./arm/6.png');
export const arm7 = require('./arm/7.png');
export const arm8 = require('./arm/8.png');
export const arm9 = require('./arm/9.png');
export const arm10 = require('./arm/10.png');
export const arm11 = require('./arm/11.png');
export const arm12 = require('./arm/12.png');
export const arm13 = require('./arm/13.png');
export const arm14 = require('./arm/14.png');
export const arm15 = require('./arm/15.png');
export const arm16 = require('./arm/16.png');
export const arm17 = require('./arm/17.png');
export const arm18 = require('./arm/18.png');
export const arm19 = require('./arm/19.png');
export const arm20 = require('./arm/20.png');
export const arm21 = require('./arm/21.png');
export const arm22 = require('./arm/22.png');
export const arm23 = require('./arm/23.png');
export const arm24 = require('./arm/24.png');
export const arm25 = require('./arm/25.png');
export const arm26 = require('./arm/26.png');
export const arm27 = require('./arm/27.png');
export const arm28 = require('./arm/28.png');
export const arm29 = require('./arm/29.png');
export const arm30 = require('./arm/30.png');

// ==================== 单个图片 ====================
export const base = require('./base.png');
export const ic_music1 = require('./ic_music1.png');
export const ic_music2 = require('./ic_music2.png');
export const z_00000 = require('./z_00000.png');

// ==================== 图片数组 ====================

/**
 * 唱片图片数组（按顺序）
 */
export const recordFrames = [
  record0,
  record1,
  record2,
  record3,
  record4,
  record5,
  record6,
  record7,
  record8,
  record9,
  record10,
  record11,
  record12,
  record13,
  record14,
  record15,
  record16,
  record17,
  record18,
  record19,
  record20,
  record21,
  record22,
  record23,
  record24,
  record25,
  record26,
  record27,
  record28,
  record29,
  record30,
  record31,
  record32,
  record33,
  record34,
  record35,
  record36,
  record37,
  record38,
  record39,
  record40,
  record41,
  record42,
  record43,
  record44,
  record45,
  record46,
  record47,
  record48,
  record49,
];

/**
 * 指针图片数组（按顺序）
 */
export const armFrames = [
  arm0,
  arm1,
  arm2,
  arm3,
  arm4,
  arm5,
  arm6,
  arm7,
  arm8,
  arm9,
  arm10,
  arm11,
  arm12,
  arm13,
  arm14,
  arm15,
  arm16,
  arm17,
  arm18,
  arm19,
  arm20,
  arm21,
  arm22,
  arm23,
  arm24,
  arm25,
  arm26,
  arm27,
  arm28,
  arm29,
  arm30,
];

/**
 * 获取唱片图片
 * @param index 图片索引（0-49）
 * @returns 对应的图片
 */
export function getRecordFrame(index: number): any {
  if (index >= 0 && index < recordFrames.length) {
    return recordFrames[index];
  }
  return record0; // 默认返回第一张
}

/**
 * 获取指针图片
 * @param index 图片索引（0-30）
 * @returns 对应的图片
 */
export function getArmFrame(index: number): any {
  if (index >= 0 && index < armFrames.length) {
    return armFrames[index];
  }
  return arm0; // 默认返回第一张
}
