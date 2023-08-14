//step 1 btn added:
document.getElementById('deposit-btn').addEventListener('click', function(){
    //step 2: get the deposit amount from deposit input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    
    //step 3: get the current deposit total
    // for non-input (use.innertext to get the value)
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositString = depositTotalElement.innerText;
    const previousDeposit = parseFloat(previousDepositString);

    //step 4: add number to the current amount of deposit
    const currentDeposit = previousDeposit + newDepositAmount;
    //set the ammount
    depositTotalElement.innerText = currentDeposit;
    
    // step 5: get current balance total 
    const balanceTotalElement = document.getElementById('balance-total');
    const previouBalanceTotalString = balanceTotalElement.innerText;
    const previouBalanceTotal = parseFloat(previouBalanceTotalString);

    //step 6: calculate add current total balance 
    const currentBalanceTotal = previouBalanceTotal + newDepositAmount;
    //set the balance
    balanceTotalElement.innerText = currentBalanceTotal;


    //step 7: clear the deposit input field  
    depositField.value = '';
})