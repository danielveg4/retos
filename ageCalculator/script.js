const formElement = document.getElementById('form');
const yearsPrintedElement = document.getElementById('years');
const monthsPrintedElement = document.getElementById('months');
const daysPrintedElement = document.getElementById('days');

const today = new Date();
const currentYear = today.getFullYear();
const currentMonth = today.getMonth() + 1; 
const currentDay = today.getDate();

const validMonths = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];

const validDate = (event) => {
    if (event.target.localName !== 'input') return;
    const inputMonths = event.target.parentNode[1];
    if(!validMonths.includes(inputMonths.value.toLowerCase())) {
        const newErrorMessage = document.createElement('p');
        newErrorMessage.textContent = 'Ingresa un mes válido';
        formElement.append(newErrorMessage);
    } 
}

const calculateAge = (event) => {
    const day = parseInt(event.target.parentNode[0].value, 10); 
    const monthInput = event.target.parentNode[1].value.toLowerCase();
    const year = parseInt(event.target.parentNode[2].value, 10); 
    const monthNumber = validMonths.indexOf(monthInput) + 1;
  
    if (!monthNumber || isNaN(day) || isNaN(year)) return;
  
    let ageYears = currentYear - year;
    let ageMonths = currentMonth - monthNumber;
    let ageDays = currentDay - day;
  
    if (ageDays < 0) {
      ageMonths--;
      ageDays += 30; 
    }
  
    if (ageMonths < 0) {
      ageYears--;
      ageMonths += 12;
    }
  
    return { ageYears, ageMonths, ageDays };
  };

  const displayAge = (event) => {
    const age = calculateAge(event);
    if (!age) return;
  
    document.getElementById('years').textContent = `${age.ageYears} years`;
    document.getElementById('months').textContent = `${age.ageMonths} months`;
    document.getElementById('days').textContent = `${age.ageDays} days`;
  };

formElement.addEventListener('change', (event) => {
    validDate(event);
    displayAge(event)
})