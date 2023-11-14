import { StartFunc as StartFuncAsJson } from "./AsJson.js";

let StartFunc = ({ inmessage }) => {
    try {
        let jVarLocalJsonData = JSON.parse(inmessage);
        StartFuncAsJson({ inJsonData: jVarLocalJsonData });

    } catch (error) {

    }
};

export { StartFunc };