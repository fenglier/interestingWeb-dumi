import React from "react";
interface Barrage {
    id: string | number;
    text: string;
    top: number;
}
interface BarrageItemProps {
    barrage: Barrage;
    containerRef: React.RefObject<HTMLDivElement>;
    onOutScreen: (id: Barrage["id"]) => void;
}
declare const BarrageItem: React.FC<BarrageItemProps>;
export default BarrageItem;
