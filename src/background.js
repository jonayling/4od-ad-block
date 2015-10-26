chrome.webRequest.onBeforeRequest.addListener(
  function(details){ 	
	var url = details.url;
  
	if (url.indexOf("mrm.channel4.com/ad") != -1 || url.indexOf("crossdomain.xml") != -1) {
		return { cancel: false };
	}
	if (url.search("anno.channel4.com(.*)_[A-Z]{5}\\.") != -1) {
		return { cancel: false };
	}
	if (url.indexOf("anno.channel4.com/m") != -1 || url.indexOf("DSPMedia") != -1 || url.indexOf("cdn.innovid.com") != -1) {
		return {cancel: true}; 		
	}
	
	return {cancel: false};
  },
  {
    urls: ["*://*.channel4.com/*", "*://cdn.innovid.com/*", "*://*.videologygroup.com/*"]
  },
  ["blocking"]
);
