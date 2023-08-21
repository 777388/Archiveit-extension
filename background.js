chrome.contextMenus.create({
  id: "openArchive",
  title: "Open in Archive",
  contexts: ["page"]
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === "openArchive") {
    const domain = new URL(tab.url).hostname;
    const archiveUrl = `https://web.archive.org/cdx/search/cdx?url=*.${domain}/*&output=json&fl=timestamp,original&collapse=urlkey`;
    chrome.tabs.create({ url: archiveUrl });
  }
});
