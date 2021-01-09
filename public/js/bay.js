
const socket = io();
const bayId = document.getElementById("bayId")
const username = document.getElementById("username")
const banned = document.getElementById("banned").textContent
const messages = document.getElementById("messages")
const inputMessage = document.getElementById("msg-input")
let history = document.getElementById("history")
//let userCount = document.getElementById("userCount") 
let gifIDS = ["RJOqbl6wuzYYjxLtxY", "4Zd8V8OMZFGEVJHwH8", "l0HlK1gbOFPcq22vC", "9VaK1come3HVqE5FU5", "26uf0C8wikRqIqhs4", "1Y7NyWDxcYDdSKS0cB", "eeViLpE3ucAII9rpA5", "jI9mP1UKTlO7YvW0Vl", "25D1EBJKZrlBPEzw8B", "LrRYEe3d9xCEzRhOHZ", "TesJisJsqhFvK1kVTu", "Y0E5Zseeyzjfbzt5Om", "PgKWD4nUwxR391lQ2D", "smjKNDszGGFAQ", "frNcN7zXOXhLO", "dupTbm8ocIWQ0J8P8q", "Q5WtiXoeDoUYT7TCGr", "xT1R9UE4J75TmfagM0", "3ohhwmrHsbosojYlXi", "yKh5nWkbVlgpG", "m0RliLiG2gXba", "xT39CS53sirZTwWGWY", "3oKIPcebYdcq7RToyI", "1xlKOP7qD0IS4vq8xy", "RkcRAOK8M5QZaaL5fg", "gLQlX7BcVjmg56Wr6A", "Mc7i1Jx7pYqzdmwI9n", "ieafknqUwa9qiry8p7", "l2ALzI9WQ6l9k3nGoJ", "WQC5W1nbKihCabKHho", "Y3k8XOjT9caTJx2CJa", "llHrtbu4HhdngC9dqB", "Wp5tzw6Zws15At1h2x", "cLMtP8xt7ZRWSXQILB", "Qz5WzvJg8QW62qNt2o", "LniSulbMT7QT6MXS6c", "Y48NhHrzp6UJXjbIFB", "U6SBqyEzKxI59bZJM7", "fAETFSB2fYqK6cZWtY", "WsdLDEDCtsUZ4L3yS7", "YlN5gdoYiGgx5UG07H", "dBgX2QharP4Sye2xvi", "jroWrNBzxzzIkTKfga", "JtHRpcz2kPgpOMn3Fa", "LO87K0SVc7gxYkQzSo", "ZbHn7ebTlRhxIX1KeL", "kDCU1DZsRyzEG6LaWU", "ZXZC2Ncu9u0a4xGDnt", "dn12pR6h4938w7Bspy", "Kg2SFmYWwaMVjdcfsy", "fV7hS7OL57rcgux45i", "LODzH10BR7ckQCNuLy", "hrvnOxhGIMnA4qRskg", "jV586W1qP6SxpbJaA5", "Xf1bJN2AhoBO1IYWwE", "jU8ERujWk9ITgg5HE0", "fSZ1ABd0yG17MqvOxC", "h2lr6ToSufpeZ2gkLc", "ibYUKOgT8fK3fD118C", "JshPlnOGejb7bv1ujq", "IdTW35W7u7VwTTP74Z", "QuD6wiqBvu10vOoyOb", "S6GSOfRCk3DpSjeK3c", "htjHSmoTvLyfMwM6kQ", "JsUvh8fq2OaVB8K6qo", "UTwTM4wYUszbASrwn7", "dBNFgb96oOP2edNB6h", "xT9IggGA0DiH7cGqyc", "H22nzAal6I5uAnnvXC", "vRl8lTCwD0PAc", "l2Je4SgTZDofg5MfC", "LVAOB3GCiFBOU", "10aADbYxnJlc9q", "r4UnsfX5fxXr2", "fPHX1VVrc33gc", "Yph6D7zPIVtIc", "3JOip0Gj0fInm", "26FeWWOMsz7cWeYcU", "KB7z01DYXJlM4", "xUA7aLrdFvkS3BeaEE", "kr5PszPQawIRq", "zN81Hab9D6E6c", "btvfdqk1SU2TC", "uCVVXlUCtmMi4", "AxVvk4TmDfmoMtSmmQ", "wj7029hydEwXC", "6IkjLyYHWEoebLqcrh", "3Oyle4GWGOarZFFXRU", "26gN2m8Q5nlwjLvt6", "UsOoz5EYqRxXW", "3oEhmVgm7QDzHNy5cA", "myPfQ0pAxOgDe", "FQgc1FBNQlDBS", "wcrlWKmBSFhnO", "3ov9k0tIDPLpgiBYGI", "w8DnKwMv0RsigqQ9T5", "R9zXHWAHyTjnq", "l378jslU9DfIMBFfy", "1wQOxawz5RpJDg2CIB", "d31w1PlZQ9H1Zmrm"]

let emoList = "😀 😃 😄 😁 😆 😅 😂 🤣 😊 😇 🙂 🙃 😉 😌 😍 🥰 😘 😗 😙 😚 😋 😛 😝 😜 🤪 🤨 🧐 🤓 😎 🤩 🥳 😏 😒 😞 😔 😟 😕 🙁 ☹️ 😣 😖 😫 😩 🥺 😢 😭 😤 😠 😡 🤬 🤯 😳 🥵 🥶 😱 😨 😰 😥 😓 🤗 🤔 🤭 🤫 🤥 😶 😐 😑 😬 🙄 😯 😦 😧 😮 😲 🥱 😴 🤤 😪 😵 🤐 🥴 🤢 🤮 🤧 😷 🤒 🤕 🤑 🤠 😈 👿 👹 👺 🤡 💩 👻 💀 ☠️ 👽 👾 🤖 🎃 😺 😸 😹 😻 😼 😽 🙀 😿 😾 👋 🤚 🖐 ✋ 🖖 👌 🤏 ✌️ 🤞 🤟 🤘 🤙 👈 👉 👆 🖕 👇 ☝️ 👍 👎 ✊ 👊 🤛 🤜 👏 🙌 👐 🤲 🤝 🙏 ✍️ 💅 🤳 💪 🦾 🦵 🦿 🦶 👂 🦻 👃 🧠 🦷 🦴 👀 👁 👅 👄 💋 🩸 🐶 🐱 🐭 🐹 🐰 🦊 🐻 🐼 🐨 🐯 🦁 🐮 🐷 🐽 🐸 🐵 🙈 🙉 🙊 🐒 🐔 🐧 🐦 🐤 🐣 🐥 🦆 🦅 🦉 🦇 🐺 🐗 🐴 🦄 🐝 🐛 🦋 🐌 🐞 🐜 🦟 🦗 🕷 🕸 🦂 🐢 🐍 🦎 🦖 🦕 🐙 🦑 🦐 🦞 🦀 🐡 🐠 🐟 🐬 🐳 🐋 🦈 🐊 🐅 🐆 🦓 🦍 🦧 🐘 🦛 🦏 🐪 🐫 🦒 🦘 🐃 🐂 🐄 🐎 🐖 🐏 🐑 🦙 🐐 🦌 🐕 🐩 🦮 🐕‍🦺 🐈 🐓 🦃 🦚 🦜 🦢 🦩 🕊 🐇 🦝 🦨 🦡 🦦 🦥 🐁 🐀 🐿 🦔 🐾 🐉 🐲 🌵 🎄 🌲 🌳 🌴 🌱 🌿 ☘️ 🍀 🎍 🎋 🍃 🍂 🍁 🍄 🐚 🌾 💐 🌷 🌹 🥀 🌺 🌸 🌼 🌻 🌞 🌝 🌛 🌜 🌚 🌕 🌖 🌗 🌘 🌑 🌒 🌓 🌔 🌙 🌎 🌍 🌏 🪐 💫 ⭐️ 🌟 ✨ ⚡️ ☄️ 💥 🔥 🌪 🌈 ☀️ 🌤 ⛅️ 🌥 ☁️ 🌦 🌧 ⛈ 🌩 🌨 ❄️ ☃️ ⛄️ 🌬 💨 💧 💦 ☔️ ☂️ 🌊 ⚽️ 🏀 🏈 ⚾️ 🥎 🎾 🏐 🏉 🥏 🎱 🪀 🏓 🏸 🏒 🏑 🥍 🏏 🥅 ⛳️ 🪁 🏹 🎣 🤿 🥊 🥋 🎽 🛹 🛷 ⛸ 🥌 🎿 ⛷ 🏂 🪂 🏋️ 🏋️‍♂️ 🏋️‍♀️ 🤼 🤼‍♂️ 🤼‍♀️ 🤸‍♀️ 🤸 🤸‍♂️ ⛹️ ⛹️‍♂️ ⛹️‍♀️ 🤺 🤾 🤾‍♂️ 🤾‍♀️ 🏌️ 🏌️‍♂️ 🏌️‍♀️ 🏇 🧘 🧘‍♂️ 🧘‍♀️ 🏄 🏄‍♂️ 🏄‍♀️ 🏊 🏊‍♂️ 🏊‍♀️ 🤽 🤽‍♂️ 🤽‍♀️ 🚣 🚣‍♂️ 🚣‍♀️ 🧗 🧗‍♂️ 🧗‍♀️ 🚵 🚵‍♂️ 🚵‍♀️ 🚴 🚴‍♂️ 🚴‍♀️ 🏆 🥇 🥈 🥉 🏅 🎖 🏵 🎗 🎫 🎟 🎪 🤹 🤹‍♂️ 🤹‍♀️ 🎭 🩰 🎨 🎬 🎤 🎧 🎼 🎹 🥁 🎷 🎺 🎸 🪕 🎻 🎲 ♟ 🎯 🎳 🎮 🎰 🧩".split(" ")
let emojis = document.getElementById("emojis")
emoList.map((icon)=>{emojis.innerHTML += `<span style="cursor: pointer;" onclick="inputMessage.value += '`+icon+`'">`+icon+`</span>`})
gifIDS.map((gif)=>{emojis.innerHTML += `<img src="https://media.giphy.com/media/`+gif+`/giphy.gif" style="width: 200px;margin: 15px;" onclick="sendGIF(this.src)">`})

var audio = new Audio('/js/pop.wav');



socket.on('connect', function() {
    // Connected, let's sign-up for to receive messages for this room
    socket.emit('bay', {bayId:bayId.textContent,username:username.textContent});
 });

 socket.on("joinedBay",function(data){

  //userCount.innerHTML = String(data.userCount) + " Users Online"
  messages.innerHTML += `<p style="color: #9a9a9a96;text-align: center;margin: 5px;padding: 5px;">@`+data.username+` joined the bay.</p>`
 })





// load history

let hist = JSON.parse(history.innerText)

if(hist.length != 0){
  for(i=0;i < hist.length;i++){
    messages.innerHTML += `<span style="color: #26c481;padding: 5px;font-size: 17px;" onclick="atUser(this)">@`+hist[i].username+`</span><img style="margin-left:8px;" src="/imgs/OG25.png" data-toggle="tooltip" data-placement="right" title="Top 100 OG"><div style="color: white;font-size: 20px;background: none;border-radius: 10px;padding: 5px;width: max-content;min-width: 50px;margin:15px;margin-top: 5px;max-width: 95%;overflow-wrap: anywhere;">`+ hist[i].comment +`</div>` 
    messages.scrollTop = messages.scrollHeight;
  }
  history.innerHTML = ""
  
}


function sendGIF(gif){
  if(banned == "1"){
    bannedMessage({message:`<img src="`+gif+`" style="width: 50%;margin: 15px;">`,username:username.textContent,pid:bayId.textContent})
  }else{
    socket.emit('comment',{message:`<img src="`+gif+`" style="width: 50%;margin: 15px;">`,username:username.textContent,pid:bayId.textContent});
    messages.scrollTop = messages.scrollHeight;

  }
 
 ;
}


function sendData(){
  if(banned == "1"){
    bannedMessage({message:inputMessage.value,username:username.textContent,pid:bayId.textContent})
  }else{
    socket.emit('comment',{message:inputMessage.value,username:username.textContent,pid:bayId.textContent});
    inputMessage.value = ""
    messages.scrollTop = messages.scrollHeight;
  }
}
function bannedMessage(data){
  badge = `<img style="margin-left:8px;" src="/imgs/OG25.png" data-toggle="tooltip" data-placement="right" title="Top 100 OG">`
    messages.innerHTML += `<span style="color: #26c481;padding: 5px;font-size: 17px;" onclick="atUser(this)">@`+data.username+`</span>`+ badge +`<div style="color: white;font-size: 20px;background: none;border-radius: 10px;padding: 5px;width: max-content;min-width: 50px;margin:15px;margin-top: 5px;max-width: 95%;overflow-wrap: anywhere;"">`+ data.message+ `</div>`
    messages.scrollTop = messages.scrollHeight;
}

socket.on('comment',function(data){


  if(data.message.search(username.textContent) != -1){
    audio.play();
  }
  
    badge = `<img style="margin-left:8px;" src="/imgs/OG25.png" data-toggle="tooltip" data-placement="right" title="Top 100 OG">`
    messages.innerHTML += `<span style="color: #26c481;padding: 5px;font-size: 17px;" onclick="atUser(this)">@`+data.username+`</span>`+ badge +`<div style="color: white;font-size: 20px;background: none;border-radius: 10px;padding: 5px;width: max-content;min-width: 50px;margin:15px;margin-top: 5px;max-width: 95%;overflow-wrap: anywhere;"">`+ data.message+ `</div>`
    messages.scrollTop = messages.scrollHeight;
})


function atUser(a){
  inputMessage.value += a.innerHTML
}
// Execute a function when the user releases a key on the keyboard
inputMessage.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13 && inputMessage.value.search("[a-zA-Z0-9]+|(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])") !== -1) {
  sendData()
    }
  }); 
let hideEmojis = true
function showEmojis(){
  hideEmojis = !hideEmojis
  emojis.hidden = hideEmojis
}
