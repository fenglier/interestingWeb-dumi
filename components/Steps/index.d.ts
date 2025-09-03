import React from "react";
interface StepItem {
    title: string;
}
interface StepsProps {
    items: StepItem[];
    current: number;
}
declare const Steps: React.FC<StepsProps>;
export default Steps;
