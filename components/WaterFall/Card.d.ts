import React from "react";
interface CardProps {
    card: any;
    top: number;
    left: number;
    height: number;
    width: number;
    title: string;
    author: string;
    like: number;
}
declare const Card: React.FC<CardProps>;
export default Card;
