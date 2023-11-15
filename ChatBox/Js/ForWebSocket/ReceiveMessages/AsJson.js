let StartFunc = ({ inJsonData }) => {
    let jVarLocalJsonData = inJsonData.JsonData;
    jVarLocalJsonData.forEach(element => {
        showContent({ inMessage: element});
    });
};

function showContent({ inMessage }) {
    let temp = document.getElementById("OnlineClientsId");
    let clon = temp.content.cloneNode(true);
    let jVarLocalP = clon.querySelector("p");
    jVarLocalP.innerHTML = inMessage.id;
    let jVarLocalClientNameId = clon.getElementById("ClientNameId");
    jVarLocalClientNameId.innerHTML = inMessage.Name;
    let jVarLocalInboxId = document.getElementById("inbox_chat");
    jVarLocalInboxId.appendChild(clon);
};

export { StartFunc };