//page refresh
function refreshPage(){
    window.location.reload();
}
//set two random numbers to string
function hody(){
return [(Math.floor(Math.random()*6)),(Math.floor(Math.random()*6))];
}
//get values from function bodys string
var x =  hody();
var player1 = x[0];
var player2 = x[1];
//change html elements to results
function zobrazeniKostek(){
    if (player1 > player2) {
       return  document.getElementById("vysledek").innerHTML = "Player 1 win";
      }
      else if (player1 === player2){
         return  document.getElementById("vysledek").innerHTML = "Draw";
      }
      else {
         return  document.getElementById("vysledek").innerHTML = "Player 2 win";
      }
}
//click function activate all others functions
function spusteniHodu() {
  //take text of element <p>
  var reload = document. getElementById("vysledek").textContent;

  if (reload === "Result"){
hody();
zobrazeniKostek();
var kostkyIkony = ["one","two","three","four","five","six"];
//change class of dicee icon from string kostkyIkony
document.getElementsByTagName("i")[0].setAttribute("class", "fas fa-dice-" + kostkyIkony[player1 ] +" ");
document.getElementsByTagName("i")[1].setAttribute("class", "fas fa-dice-" + kostkyIkony[player2] +" ");
document. getElementById("tlacitko").innerHTML = "Refresh";
}
else {

  refreshPage();

}
}

function nullX() {
  x = [];
}
