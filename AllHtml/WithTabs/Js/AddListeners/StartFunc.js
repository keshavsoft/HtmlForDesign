import { StartFunc as StartFuncSendMessageButtonId } from "./SendMessageButtonId/1-ClickAssign.js";
import { StartFunc as StartFuncInputUserNameId } from "./InputUserNameId/1-ClickAssign.js";
import { StartFunc as StartFuncSendBroadcastOnlyMessageButtonId } from "./SendBroadcastOnlyMessageButtonId/1-ClickAssign.js";
import { StartFunc as StartFuncSendBroadcastMessageButtonId } from "./SendBroadcastMessageButtonId/1-ClickAssign.js";
import { StartFunc as StartFuncSendPrivateMessageButtonId } from "./SendPrivateMessageButtonId/1-ClickAssign.js";

let StartFunc = () => {
    
    StartFuncSendMessageButtonId();
    StartFuncSendBroadcastOnlyMessageButtonId();
    StartFuncSendBroadcastMessageButtonId();
    StartFuncInputUserNameId();
    StartFuncSendPrivateMessageButtonId();

};

export { StartFunc };