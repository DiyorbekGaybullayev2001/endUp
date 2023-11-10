
let btn = document.getElementById("btn");

btn.onclick = function endUp(){
    let str = document.getElementById("matn").value
    let natija = document.getElementById("par");

    let text = str.substring(str.length -3)
    return natija.innerHTML = str.substring(0, str.length -3)+text.toUpperCase()
  }