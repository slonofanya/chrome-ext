chrome.runtime.onInstalled.addListener(function() {
  chrome.runtime.onMessage.addListener(
    function(message, callback) {
      console.log({ message });
   });
});

