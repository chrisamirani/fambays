var data = JSON.parse(document.getElementById("data").textContent)

for(i=0;i < data.length;i++){
    document.getElementById("cols").innerHTML += `<div class="card" style="width: 18rem;margin:10px;">
    <img src="`+ data[i].image +`" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">`+ data[i].title.slice(0,20)+ `...</h5>
      
      <a href="/play/`+ data[i].id +`/" class="btn btn-primary">Play</a>
    </div>
  </div>`
}
