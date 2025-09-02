/*
 * @Author: fengli
 * @Description: 
 * @Date: 2025-09-02 12:00:52
 * @lastEditors: fengli
 * @lastEditTime: 
 */

import WaterFall from "@/WaterFall";
import data1 from "./data1.json";
import data2 from "./data2.json";

export  const WaterFallDemo = () => {
  const getData = async (source) => {
    if (source > 2) {
      throw new Error("Invalid data source");
    }
    /* 模拟页面加载是获取数据 */
    const colorArr = ["#cdb4db", "#ffc8dd", "#ffafcc", "#bde0fe", "#a2d2ff"];
    let data = await Promise.resolve(source == 1 ? data1 : data2);
    let temp_data1 = data.data.items.map((i, index) => ({
      id: i.id,
      url: i.note_card.cover.url_pre,
      backgroundColor: colorArr[index % colorArr.length],
      width: i.note_card.cover.width,
      height: i.note_card.cover.height,
      title: i.note_card.display_title,
      auhtor: i.note_card.user.nick_name,
      like: Number(i.note_card.interact_info.liked_count),
      left: 0, // Default value for left
      top: 0, // Default value for top
    }));
    return temp_data1;
  };
  return (
    <>
      <div className="theme">
        使用Masonry,left top实现瀑布流，通过获取真实dom，确定left和top
      </div>
      <div className="BFC">
        <WaterFall getData={getData}/>
      </div>
    </>
  );
};

export default WaterFallDemo;