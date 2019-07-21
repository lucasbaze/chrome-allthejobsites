console.log("Chrome Extension Go!");

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse){
    if(message.text === 'Hello'){
        let paragraphs = document.getElementsByTagName('p');
        for (element of paragraphs){
            element.style['background-color'] = "#FF00FF";
            element.innerHTML = "kitten";
        }
    }
}
