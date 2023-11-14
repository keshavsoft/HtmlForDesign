import { StartFunc as StartFuncAddListeners } from "./AddListeners/StartFunc.js";
import { StartFunc as StartFuncReceiveMessages } from "./ForWebSocket/ReceiveMessages/EntryFile.js";

let jVarLocalWsUrlLocal = "ws://localhost:3000";
let jVarLocalWsUrl = "ws://tallyws12.keshavsoft.net/";
let jVarLocalWsUrl1 = "ws://washtex7.keshavsoft.net";

let jVarLocalWsUrlhttps = "wss://tallyws12.keshavsoft.net/";

let jVarCommonBmm = "wss://bmmwdo.org/";
let StartFunc = () => {

    webSocket = new WebSocket(jVarLocalWsUrlLocal);

    webSocket.onopen = (event) => {
        webSocket.send("k1");

        let SendJsonData = {
            From: "Service",
            SysMac: "MAC",
            Type: "SysInfo"
        };

    };

    webSocket.onmessage = (event) => {
        try {
            StartFuncReceiveMessages({ inmessage: event.data });
           
        } catch (error) {

        }
        console.log("rrrrrrrrrr : ", event.data);
        var toastLiveExample = document.getElementById('liveToast');
        var toast = new bootstrap.Toast(toastLiveExample)

        toast.show();
        let jVarLocalMessage = toastLiveExample.querySelector(".toast-body");
        jVarLocalMessage.innerHTML = event.data;
        showContent({ inMessage: event.data });
    };

    StartFuncAddListeners();
    
};

function showContent({ inMessage }) {
    let temp = document.getElementById("IncomingMessageId");
    let clon = temp.content.cloneNode(true);
    let jVarLocalP = clon.querySelector("p");
    jVarLocalP.innerHTML = inMessage;
    let jVarLocalMessageHistoryId = document.getElementById("MessageHistoryId");

    jVarLocalMessageHistoryId.appendChild(clon);
};

StartFunc();