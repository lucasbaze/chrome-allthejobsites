console.log("background running!");

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab){
    console.log(tab);
    console.log(tab.url);
    let msg = {
        text: 'Hello'
    }

    chrome.tabs.sendMessage(tab.id, msg);
}
