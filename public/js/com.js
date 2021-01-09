let comments =JSON.parse(document.getElementById("comments").textContent)


scratch.src = "https://scratch.mit.edu/projects/"+projectId+"/embed"
var i = 0
function doSomething() { 

    if(i < comments.length){
        messages.innerHTML += `<span style="color: #26c481;padding: 5px;font-size: 17px;">@`+comments[i].author.username+`</span><img style="margin-left:8px;" src="/imgs/C25.png" data-toggle="tooltip" data-placement="right" title="This is a comment from Scratch community"><div style="color: white;font-size: 20px;background: none;border-radius: 10px;padding: 5px;width: max-content;min-width: 50px;margin:15px;margin-top: 5px;max-width: 95%;overflow-wrap: anywhere;"">`+ comments[i].content+ `</div>`

        messages.scrollTop = messages.scrollHeight;
        i++
    }

    

}

(function loop() {
    var rand = Math.round(Math.random() * (10000 - 5000)) + 5000;
    setTimeout(function() {
            doSomething();
            loop();  
    }, rand);
}());

