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
    for (let i = 0; i < allCheckbox.length; i++) {
        if (allCheckbox[i].checked == true) {
            console.log(`checkbox marcado: ${i} con un valor de ${allCheckbox[i].value}`);
            tipSelected = allCheckbox[i].value;
        }
    }
    tipOperation();
}

const tipOperation = () => {
    const totalBill = amountUsersInputElement.value;
    const totalUsers = numberUsersInputElement.value;
    const tipImport = (totalBill * tipSelected);
    tipPerPersonImport = (tipImport / totalUsers);
    totalPerPersonImport = (totalBill / totalUsers) + tipPerPersonImport;
    console.log(tipPerPersonImport, totalPerPersonImport);

    printAmounts()
}

const printAmounts = () => {
    resultTipPersonElement.textContent = `€${tipPerPersonImport}`;
    resultTotalPersonElement.textContent = `€${totalPerPersonImport}`
}


formElement.addEventListener('change', () => {
    isChecked();
})




/* operación matemática:

TOTAL: 

amountUsers - (amountUsers * discountSelected)

*/