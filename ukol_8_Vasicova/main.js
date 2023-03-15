/* ÚKOL 1*/
/*
console.log("HALLO WORLD")

function JustFood(persons) {
  let cena = persons * 100;
  return 'catering od JustFood pro ' + persons + ' lidí za '+ cena + ' Kč';
}

function YourMama(persons){
  let cena = persons * 500;
  return 'catering od YourMama pro ' + persons + ' lidí za '+ cena + ' Kč';
}

function FlavourHaven(persons){
  let cena = persons * 3000;
  return 'catering od FlavourHaven pro ' + persons + ' lidí za '+ cena + ' Kč';
}

function createEvent(event, persons, catering){
  return 'Událost ' + event + ' ' + catering(persons);
}
*/



/* UKOL 2*/ 

/*
let pocitadlo = 1;
let kostka = document.querySelector('.size');

function zmenKostku(){
    if (pocitadlo < 6){
        pocitadlo += 1;

    } else {
        pocitadlo=1;
    }

    kostka.src = 'img/side'+pocitadlo+'.svg';
}

document.addEventListener('keydown', zmenKostku);
*/

/*UKOL 3*/

const budik = () => {
  const alarm = document.querySelector(".alarm")
  alarm.classList.add("alarm--ring")
}
let addTime = Number(prompt("Za kolik sekund mám začít zvonit?"))
let addTimeMs = addTime * 1000
const zazvon1 = setTimeout(budik, addTimeMs)

let zvuk = document.querySelector(".zvuk")
const play = () => {
  zvuk.play()
}
const zazvon2 = setTimeout(play, addTimeMs)

const zrusOdpocet1 = () => {
  clearTimeout(zazvon1)
}
const tlacitko1 = document.querySelector(".btnElm1")
tlacitko1.addEventListener("click", zrusOdpocet1)

const zrusOdpocet2 = () => {
  clearTimeout(zazvon2)
}
const tlacitko2 = document.querySelector(".btnElm2")
tlacitko2.addEventListener("click", zrusOdpocet2)