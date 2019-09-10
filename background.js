chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
        if(request.todo === 'incrementTimer'){
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
                chrome.pageAction.show(tabs[0].id);
                chrome.storage.sync.get('totalTime', function(obj){
                    let timer = parseInt(obj.totalTime || 0);
                    setInterval(function(){
                        timer += 1;
                        console.log('Timer Value=== ', timer)
                    }, 1000);
                    chrome.storage.sync.set({'totalTime': timer})
                })
            })
        }
})