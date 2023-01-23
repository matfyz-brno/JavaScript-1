function secti(cislo1,cislo2){
    let soucet = cislo1 + cislo2; 
    return soucet;
}

function zobraz_vysledek(){
    let end = document.querySelector("#vysledek");
    end.innerHTML =("Výsledek je  " + (secti(50,30)));
}

function changeColor() {
    let square = document.querySelector("#ctv1");
    square.style.backgroundColor="green"; 
}

function upozorni(){
    console.log("Pozor, pozor!!");
    let upozorneni = document.querySelector("#ctv1");
    upozorneni.textContent = "Pozor, pozor!!";
}
