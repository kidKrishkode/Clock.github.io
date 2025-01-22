const hourArrow = document.querySelector('.hour-arrow');
const minuteArrow = document.querySelector('.minute-arrow');
const secondArrow = document.querySelector('.second-arrow');

function setClock() {
    const current = new Date();

    const seconds = current.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondArrow.style.transform = `rotate(${secondsDegrees}deg)`;

    const minutes = current.getMinutes()*0 + 9;
    const minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
    minuteArrow.style.transform = `rotate(${minutesDegrees}deg)`;

    const hours = current.getHours()*0 + 10;
    const hoursDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;
    hourArrow.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setClock, 1000);
setClock();
