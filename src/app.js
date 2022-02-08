/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function generateCard() {
  let pinta = ["♣", "♠", "♥", "♦"];
  let numeros = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];

  var rdm_pinta = Math.floor(Math.random() * pinta.length);
  var numero = Math.floor(Math.random() * numeros.length);

  document.querySelector("#superior").innerHTML =
    "<p id=" + "arriba" + ">" + numeros[numero] + "<p/>";
  document.querySelector("#centro").innerHTML =
    "<p id=" + "centro" + ">" + pinta[rdm_pinta] + "<p/>";
  document.querySelector("#inferior").innerHTML =
    "<p id=" + "abajo" + ">" + numeros[numero] + "<p/>";

  let colorRed = rdm_pinta;

  if (colorRed == 2 || colorRed == 3) {
    const colorx = document.querySelector("#centro");
    colorx.style.color = "red";
    const redLetterDown = document.querySelector("#inferior");
    redLetterDown.style.color = "red";
    const redLetterUp = document.querySelector("#superior");
    redLetterUp.style.color = "red";
  } else if (colorRed == 0 || colorRed == 1) {
    const colorx = document.querySelector("#centro");
    colorx.style.color = "black";
  }
}
generateCard();
