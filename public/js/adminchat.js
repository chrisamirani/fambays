
const socket = io();
const messages = document.getElementById("messages")
const inputMessage = document.getElementById("msg-input")
let username = document.getElementById("username")
let scratch = document.getElementById("scratch")


var audio = new Audio('/js/pop.wav');

function sendData(){

    socket.emit('chat',{message:inputMessage.value,username:"bigscratchers",og:true});
    inputMessage.value = ""
    messages.scrollTop = messages.scrollHeight;
   ;
}
socket.on('chat',function(data){
audio.play();


    badge = data.og?`<img style="margin-left:8px;" src="/imgs/OG25.png" data-toggle="tooltip" data-placement="right" title="Top 100 OG">`:`<img style="margin-left:8px;" src="/imgs/C25.png" data-toggle="tooltip" data-placement="right" title="This is a comment from Scratch community">`
    messages.innerHTML += `<span style="color: #26c481;padding: 5px;font-size: 17px;">@`+data.username+`</span>`+ badge +`<div style="color: white;font-size: 20px;background: none;border-radius: 10px;padding: 5px;width: max-content;min-width: 50px;margin:15px;margin-top: 5px;max-width: 95%;overflow-wrap: anywhere;"">`+ data.message+ `</div>`
    messages.scrollTop = messages.scrollHeight;
  })
  socket.on('bayChat',function(data){
    audio.play();
    
    
        badge = data.og?`<img style="margin-left:8px;" src="/imgs/OG25.png" data-toggle="tooltip" data-placement="right" title="Top 100 OG">`:`<img style="margin-left:8px;" src="/imgs/C25.png" data-toggle="tooltip" data-placement="right" title="This is a comment from Scratch community">`
        messages.innerHTML += `<span style="color: #26c481;padding: 5px;font-size: 17px;">@`+data.username+`</span><a href='/bay/`+data.id+`'>bay</a>`+ badge +`<div style="color: white;font-size: 20px;background: none;border-radius: 10px;padding: 5px;width: max-content;min-width: 50px;margin:15px;margin-top: 5px;max-width: 95%;overflow-wrap: anywhere;"">`+ data.message+ `</div>`
        messages.scrollTop = messages.scrollHeight;
      })
// Execute a function when the user releases a key on the keyboard
inputMessage.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
  sendData()
    }
  }); 

