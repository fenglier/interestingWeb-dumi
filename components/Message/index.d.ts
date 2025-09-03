import React from "react";
interface MessageProps {
    count: number;
}
declare const Message: () => React.JSX.Element;
export default Message;
declare const MessageWithCount: React.FC<MessageProps>;
export { MessageWithCount };
