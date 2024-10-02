const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

class CountdownTimer {
    constructor(days, hours, minutes, seconds, onUpdate) {
        this.days = days;
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
        this.onUpdate = onUpdate; 
    }

    tictac() {
        if (this.days === 0 && this.hours === 0 && this.minutes === 0 && this.seconds === 0) {
            clearInterval(this.interval);
            console.log('se acabóooo!');
            return;
        }

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
        }

        this.onUpdate(this); 
    }

    start() {
        this.interval = setInterval(() => this.tictac(), 1000);
        this.onUpdate(this);
    }
}

const updateDOM = (counter) => {
    daysElement.textContent = `${counter.days} days`;
    hoursElement.textContent = `${counter.hours.toString().padStart(2, '0')} hours`;
    minutesElement.textContent = `${counter.minutes.toString().padStart(2, '0')} minutes`;
    secondsElement.textContent = `${counter.seconds.toString().padStart(2, '0')} seconds`;
};

const timer = new CountdownTimer(8, 23, 55, 10, updateDOM);

timer.start();


