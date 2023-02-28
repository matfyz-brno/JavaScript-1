function show_first() {
const actual_date = document.querySelector("#first_date").value;
document.querySelector("#first_homework1").innerHTML = actual_date;
const day =  Number(actual_date.slice(0,2));
const month = Number(actual_date.slice(3,5));
const year = Number(actual_date.slice(6));   
const list = "Day: "  + day + "<br>"  + " Month: " + " "+ month + "<br>"  +"Year :" + " " + year;
document.querySelector("#first_homework2").innerHTML = list;
}

function show_second() {
    const day2 = Number(document.querySelector("#second_day").value);
    const month2 = Number(document.querySelector("#second_month").value);
    const year2 = Number(document.querySelector("#second_year").value);
    const complete_date = day2 + "." + month2 + "." + year2;
    document.querySelector("#second_homework").innerHTML = complete_date;
}   

function show_third() {
    let cislo = 0;
    const entry_number = Number(document.querySelector("#cisilko").value);
    const celaCast = Math.trunc(entry_number) ; 
    const necelaCast = entry_number - celaCast ;
    if (Math.abs(necelaCast) === 0.5) {
        if ((celaCast % 2) === 0) {
            cislo = celaCast
        } else {
            cislo = celaCast + 2 * necelaCast
        }
    }
    cislo =  Math.round(entry_number) 
    document.querySelector("#third_homework").innerHTML = cislo ;  
}

