const balanceTextElement = document.getElementById('amount');
const barsElement = document.getElementById('bars');
const totalMonthElement = document.getElementById('total-month');
const percentageMonthElement = document.getElementById('total-increase');
const totalDayElement = document.getElementById('total-day');
const showDayByDayElement = document.getElementById('show-dayly');

let weeklyData = [];

const fetchWeeklyData = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Network response was not ok');
        return await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

const initializeApp = async () => {
    weeklyData = await fetchWeeklyData('./data.json');
    if (weeklyData) {
        setupEventListeners();
    }
};

const setupEventListeners = () => {
    barsElement.addEventListener('click', handleBarClick);
    showDayByDayElement.addEventListener('click', showDayAmounts);
};

const handleBarClick = (event) => {
    if (event.target.id === 'bars') return; 

    for (let bar of barsElement.children) {
        bar.classList.remove('blue');
    }
    event.target.classList.add('blue'); 

    printDayAmount(event, weeklyData); 
};


const printDayAmount = (event, data) => {
    const childrenArray = Array.from(barsElement.children);
    const index = childrenArray.indexOf(event.target);
    totalDayElement.textContent = `Total this day: ${data[index].amount} euros`;
};

const showDayAmounts = () => {
    const bars = barsElement.children;
    for (let i = 0; i < bars.length; i++) {
        if (i < weeklyData.length) {
            bars[i].style.height = `${weeklyData[i].amount}px`; 
        }
    }
};


initializeApp();



