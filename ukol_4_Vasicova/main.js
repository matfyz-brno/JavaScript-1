//UKOL 1
let title = "Pulp Fiction";

console.log(title.length);
console.log(title.toUpperCase());
console.log(title.slice(0, 6));
console.log(title.slice(-5));

//UKOL 2
let email = String(prompt('Zadej svůj email'));
//console.log(email.indexOf('@'));
let atIndex = email.indexOf('@');
console.log(atIndex);

let vypisEmail = document.querySelector('.email');
vypisEmail.innerHTML = email;

let jmenoPrijmeni = email.slice(0, atIndex);
console.log(jmenoPrijmeni);

let domena = email.slice(atIndex + 1);
console.log(domena);

const parsedEmail = {
    userName: jmenoPrijmeni,
    domain: domena
}

let vypisJmeno = document.querySelector('.jmeno');
vypisJmeno.textContent = parsedEmail.userName;

let vypisDomena = document.querySelector('.domena');
vypisDomena.textContent = parsedEmail.domain;

//UKOL 3
let ulice = String(prompt('Zadej svou ulici bydlište/doručení balíčku'))
let cisloDomu = Number(prompt('Zadej číslo domu'))
let mesto = String(prompt('Zadej město bydliště/doručení balíčku'))
let psc = String(prompt('Zadej PSČ'))

const address = {
    streetName: ulice,
    buildingNumber: cisloDomu,
    city: mesto,
    postCode: psc
}

const { streetName, buildingNumber, city, postCode } = address;

let objednavka = document.querySelector('.objednavka')
objednavka.innerHTML = 
    `<h2>Vaše objednávka bude doručena na adresu: </h2>` +
    `<p>Ulice + číslo popisné: ${streetName}, ${buildingNumber} </p>` +
    `<p>Mesto: ${city} </p>` + 
    `<p>PSČ: ${postCode}</p>`








