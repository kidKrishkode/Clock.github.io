function updateClock() {
    const current = new Date();

    const day = current.getDate();
    const month = current.toLocaleString('default', { month: 'short' });
    const year = current.getFullYear();
    const weekday = current.toLocaleString('default', { weekday: 'short' });

    let hours = current.getHours();
    const minutes = current.getMinutes();
    const seconds = current.getSeconds();
    const amPm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12 || 12;

    const formattedDate = `${day} ${month} ${year} <span>${weekday}</span>`;
    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes
        .toString()
        .padStart(2, '0')}:${seconds.toString().padStart(2, '0')} <span>${amPm}</span>`;

    document.getElementById('date').innerHTML = formattedDate;
    document.getElementById('time').innerHTML = formattedTime;
}

setInterval(updateClock, 1000);
updateClock();
