const amountUsersInputElement = document.getElementById('user-import');
const buttonTipsContainerElement = document.getElementById('buttons-tip');
const numberUsersInputElement = document.getElementById('users');
const resultTipPersonElement = document.getElementById('tip-person');
const resultTotalPersonElement = document.getElementById('total-person');
const formElement = document.getElementById('tip-calculator');

let tipSelected = '';
let tipPerPersonImport = '';
let totalPerPersonImport = '';

const isChecked = () => {
    const allCheckbox = buttonTipsContainerElement.children;
    let checkboxCount = 0;
    for (let i = 0; i < allCheckbox.length -1; i++) {
        if (allCheckbox[i].checked == true) {
            checkboxCount++;
            tipSelected = allCheckbox[i].value;
        }
    }
    if (checkboxCount > 1) {
        console.log('seleccionada más de una opcion!');
        return;
    }
    if (allCheckbox[allCheckbox.length - 1].value !== '') {
        tipSelected = allCheckbox[allCheckbox.length - 1].value / 100;
    }
    tipOperation();
}

const tipOperation = () => {
    const totalBill = amountUsersInputElement.value;
    const totalUsers = numberUsersInputElement.value;
    const tipImport = (totalBill * tipSelected);
    tipPerPersonImport = (tipImport / totalUsers);
    totalPerPersonImport = ((totalBill / totalUsers) + tipPerPersonImport);
  
    printAmounts()
}

const printAmounts = () => {
    resultTipPersonElement.textContent = `€${tipPerPersonImport.toFixed(2)}`;
    resultTotalPersonElement.textContent = `€${totalPerPersonImport.toFixed(2)}`
}


formElement.addEventListener('change', () => {
    isChecked();
})