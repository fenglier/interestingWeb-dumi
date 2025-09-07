/*
 * @Author: fengli
 * @Description:
 * @Date: 2025-09-07 17:44:22
 * @lastEditors: fengli
 * @lastEditTime:
 */

import React, { useState } from 'react';
import styles from './index.module.scss';

interface ColorPickerProps {
  defaultValue?: string;
  onChange?: (color: string) => void;
}
const ColorPicker: React.FC<ColorPickerProps> = ({
  defaultValue,
  onChange,
}) => {
  const [color, setColor] = useState<string>(defaultValue || '#ff0000');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
    if (onChange) {
      onChange(e.target.value);
    }
  };
  return (
      <>
        <input type="color" className={styles.colorPicker} value={color} onChange={handleChange} />
        <span className={styles.colorValue}>{color}</span>
      </>
  );
};
export default ColorPicker;
