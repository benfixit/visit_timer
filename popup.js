chrome.runtime.onInstalled.addListener(function(){
    let timerDiv = document.getElementById('timerCount');
    console.log('Timer DIV===', timerDiv)
    chrome.storage.sync.get('totalTime', function(obj){
        console.log('Timer Value===', obj.totalTime)
        timerDiv.innerHTML = obj.totalTime || 0;
    })
})