/*
 * @Author: fengli
 * @Description:
 * @Date: 2025-05-11 16:53:10
 * @lastEditors: fengli
 * @lastEditTime:
 */
import style from "./index.module.scss";
import React from "react";
interface StepItem {
  title: string;
  // add other properties if needed
}

interface StepsProps {
  items: StepItem[];
  current: number;
}

const Steps: React.FC<StepsProps> = ({ items, current }) => {
  const st = items.map((i, index: number) => {
    if (index < current) {
      // finish
      return (
        <div className={style.item}>
          <div className={`${style.icon} ${style.iconFinish}`}>{index + 1}</div>
          <div className={`${style.content} ${style.finish}`}>{i.title}</div>
        </div>
      );
    } else if (index == current) {
      // active
      return (
        <div className={style.item}>
          <div style={{ position: "relative" }}>
            <div className={`${style.icon} ${style.iconActive}`}></div>
            <div className={`${style.icon}`}>{index + 1}</div>
          </div>

          <div className={`${style.content} ${style.active}`}>{i.title}</div>
        </div>
      );
    } else {
      // wait
      return (
        <div className={style.item}>
          <div className={style.icon}>{index + 1}</div>
          <div className={style.content}>{i.title}</div>
        </div>
      );
    }
  });
  return <div className={style.container}>{st}</div>;
};
export default Steps;

