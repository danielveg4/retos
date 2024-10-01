const billInputElement = document.getElementById('user-import');
const buttonTipsContainerElement = document.getElementById('buttons-tip');
const numberUsersInputElement = document.getElementById('users');
const resultTipPersonElement = document.getElementById('tip-person');
const resultTotalPersonElement = document.getElementById('total-person');
const formElement = document.getElementById('tip-calculator');

let tipSelected = 0;


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
    const totalBill = parseFloat(billInputElement.value);
    const totalUsers = parseInt(numberUsersInputElement.value);
    const tipImport = (totalBill * tipSelected);

    const tipPerPersonImport = (tipImport / totalUsers);
    const totalPerPersonImport = ((totalBill / totalUsers) + tipPerPersonImport);
  
    printAmounts(tipPerPersonImport, totalPerPersonImport)
}

const printAmounts = (tipPerPersonImport, totalPerPersonImport) => {
    resultTipPersonElement.textContent = `€${tipPerPersonImport.toFixed(2)}`;
    resultTotalPersonElement.textContent = `€${totalPerPersonImport.toFixed(2)}`
}


formElement.addEventListener('change', () => {
    isChecked();
})