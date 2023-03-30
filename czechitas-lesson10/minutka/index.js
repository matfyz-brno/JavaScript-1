'use strict';

let formElement = document.querySelector(".controls")

function ring () {
    let alarmClock = document.querySelector(".alarm")
    alarmClock.classList.add("alarm--ring")
    let audio = document.querySelector(".audio")
    audio.play()
}

let setTime = (event) => {
    event.preventDefault()
    let inputTime = Number(document.querySelector(".time-input").value)
    let inputTimeinMiliSecond = inputTime * 1000
    const timeArea = document.querySelector(".alarm__seconds")
    timeArea.textContent = inputTime
    let coutdownTime = setInterval(() => {
        inputTime = inputTime - 1
        timeArea.textContent = inputTime
        if (inputTime === 0) {
            clearInterval(coutdownTime)
        }
    }, 1000)
    setTimeout(ring, inputTimeinMiliSecond)
}

formElement.addEventListener("submit", setTime)