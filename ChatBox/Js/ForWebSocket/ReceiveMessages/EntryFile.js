import { StartFunc as StartFuncAsJson } from "./AsJson.js";

let jFLocalReceiveMessage = ({ inmessage }) => {
    try {
        let jVarLocalJsonData = JSON.parse(inmessage);
        StartFuncAsJson({ inJsonData: jVarLocalJsonData });

    } catch (error) {

    }
};

let StartFunc = (event) => {
    try {
        jFLocalReceiveMessage({ inmessage: event.data });
       
    } catch (error) {

    }
};

// console.log("rrrrrrrrrr : ", event.data);
//         var toastLiveExample = document.getElementById('liveToast');
//         var toast = new bootstrap.Toast(toastLiveExample)

//         toast.show();
//         let jVarLocalMessage = toastLiveExample.querySelector(".toast-body");
//         jVarLocalMessage.innerHTML = event.data;
//         showContent({ inMessage: event.data });

export { StartFunc };