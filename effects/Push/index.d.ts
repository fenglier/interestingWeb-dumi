import React from 'react';
interface PushProps {
    items: {
        key?: string;
        exist?: React.ReactNode;
        expander: React.ReactNode;
    }[];
    onChange: (activeId: string) => void;
}
declare const Shake: React.FC<PushProps>;
export default Shake;
