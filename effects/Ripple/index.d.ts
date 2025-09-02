import React from "react";
interface RippleProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}
declare const Ripple: React.FC<RippleProps>;
export default Ripple;
