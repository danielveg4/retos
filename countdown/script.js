const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const togleThemeButton = document.getElementById('button-dark-theme');

class countdownTimer {

    // constructor para estructura/estado

    constructor(days, hours, minutes, seconds, onUpdate) { //props y funcion
        this.days = days;
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
        this.onUpdate = onUpdate; 
    } 

    // metodo

    countdown() {
        if (this.seconds > 0) {
            this.seconds--;
        } else if (this.minutes > 0) {
            this.seconds = 59;
            this.minutes--;
        } else if (this.hours > 0) {
            this.seconds = 59;
            this.minutes = 59;
            this.hours--;
        } else if (this.days > 0) {
            this.seconds = 59;
            this.minutes = 59;
            this.hours = 23;
            this.days--;
        } else {
            clearInterval(this.interval);
            console.log('se acabóooo!');
            return;
        }

        this.onUpdate(this)
    }


    startCountdown() {
        this.interval = setInterval(() => this.countdown(), 1000)
        this.onUpdate(this)
    }
}

const updateDOM = (counter) => {
    daysElement.textContent = `${counter.days} days`;
    hoursElement.textContent = `${counter.hours.toString().padStart(2, '0')} hours`;
    minutesElement.textContent = `${counter.minutes.toString().padStart(2, '0')} minutes`;
    secondsElement.textContent = `${counter.seconds.toString().padStart(2, '0')} seconds`;
};

togleThemeButton.addEventListener('click', () => {
    document.documentElement.classList.toggle('light-mode');
});

const timerIn = new countdownTimer(1, 1, 2, 10, updateDOM);
const timerIn2 = new countdownTimer(4, 14, 43, 12, updateDOM);
timerIn.startCountdown();


