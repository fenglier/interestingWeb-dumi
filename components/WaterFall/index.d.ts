import React from "react";
interface CardType {
    auhtor: string;
    title: string;
    id: string;
    width: number;
    height: number;
    left: number;
    top: number;
    like: number;
}
interface MasonryProps {
    getData: (page: number) => Promise<CardType[]>;
}
declare const WaterFall: ({ getData }: MasonryProps) => React.JSX.Element;
export default WaterFall;
