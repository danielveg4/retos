const viewsElement = document.getElementById('views');
const eurosElement = document.getElementById('euros');
const inputElement = document.getElementById('input');
const checkboxElement = document.getElementById('time');

let yearChecked = false;

const printElements = (viewsTotal, eurosValue) => {
    viewsElement.textContent = `${viewsTotal}K pageviews`;
    if (!yearChecked) eurosElement.textContent = `${eurosValue}.00€/month`;
    if (yearChecked) eurosElement.textContent = `${eurosValue*12}.00€/year`

}

const viewsToEurosCalc = (event) => {
    const eurosValue = event.target.value;
    const ratio = 1.7;
    const viewsTotal = Math.pow(eurosValue, ratio).toFixed(0);
    printElements(viewsTotal, eurosValue);  
}


inputElement.addEventListener('change', (event) => {
    viewsToEurosCalc(event);
});

checkboxElement.addEventListener('click', (event) => {
    yearChecked = event.target.checked;
})
