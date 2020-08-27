const url = "https://blockchain.info/ticker";

function recupererPrix() {
  let requette = new XMLHttpRequest(); 

  requette.open("GET",url);
  requette.responseType = "json";
  requette.send();

  requette.onload = function () {
    if(requette.readyState === XMLHttpRequest.DONE) {
      if(requette.status === 200) {
        let reponse = requette.response;
        let prixEnEUR = reponse.EUR.last;        
        document.querySelector("#price_label").textContent = prixEnEUR;

      } else {
        alert("Un problème est intervenu, merci de revenir plus tard");
      }
    }
  }
}

setInterval(recupererPrix,1000);
