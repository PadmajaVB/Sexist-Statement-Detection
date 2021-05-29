// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });

var API = "http://localhost:5000/";

//example of using a message handler from the inject scripts
chrome.extension.onMessage.addListener(
    function (request, sender, sendResponse) {
        chrome.pageAction.show(sender.tab.id);
        sendResponse();
    });


CallHackApi = function (word) {
    var bkg = chrome.extension.getBackgroundPage();
    var query = word.selectionText;

    chrome.tabs.create(
        {url: API + "?text=" + query}
    );

};

GetPageUrl = function () {
    var bkg = chrome.extension.getBackgroundPage();
    bkg.console.log(window.location);

    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
        var url = tabs[0].url;
        chrome.tabs.create(
            {url: API + "?text=" + url}
        )
    });
};

chrome.contextMenus.create({
    title: "Sexist Speech analysis",
    contexts: ["selection"],
    onclick: CallHackApi
});

chrome.contextMenus.create({
    title: "Sexims analysis",
    contexts: ["page"],
    onclick: GetPageUrl
});