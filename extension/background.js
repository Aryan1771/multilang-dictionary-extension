chrome.runtime.onInstalled.addListener(() => {

chrome.contextMenus.create({
id: "searchMeaning",
title: "Search Meaning",
contexts: ["selection"]
})

})

chrome.contextMenus.onClicked.addListener((info, tab) => {

if(info.menuItemId === "searchMeaning"){

chrome.tabs.sendMessage(tab.id,{
action:"searchWord",
word:info.selectionText
})

}

})

chrome.commands.onCommand.addListener((command)=>{

if(command === "open-dictionary"){

chrome.action.openPopup()

}

})