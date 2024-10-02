const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

let actualCounter = {
    days: 8,
    hours: 23,
    minutes: 55,
    seconds: 10
}

const printCountdown = () => {
    daysElement.textContent = `${actualCounter.days} days`;
    hoursElement.textContent = `${actualCounter.hours.toString().padStart(2, '0')} hours`;
    minutesElement.textContent = `${actualCounter.minutes.toString().padStart(2, '0')} minutes`;
    secondsElement.textContent = `${actualCounter.seconds.toString().padStart(2, '0')} seconds`;
}

const countdown = () => {
    if (
        actualCounter.days === 0 &&
        actualCounter.hours === 0 &&
        actualCounter.minutes === 0 &&
        actualCounter.seconds === 0
    ) {
        console.log('se acabó!');
        clearInterval(interval);
        return;
    }

    if (actualCounter.seconds > 0) {
        actualCounter.seconds--;
    } else if (actualCounter.minutes > 0) {
        actualCounter.seconds = 59;
        actualCounter.minutes--;
    } else if (actualCounter.hours > 0) {
        actualCounter.seconds = 59;
        actualCounter.minutes = 59;
        actualCounter.hours--;
    } else if (actualCounter.days > 0) {
        actualCounter.seconds = 59;
        actualCounter.minutes = 59;
        actualCounter.hours = 23;
        actualCounter.days--;
    }
    
    printCountdown();
}



const interval = setInterval(countdown, 1000);