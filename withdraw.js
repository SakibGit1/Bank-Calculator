//step 1: add widrow btn 
document.getElementById('withdraw-btn').addEventListener('click', function(){
   const withdrawField = document.getElementById('withdraw-fl');
   const withdrawString = withdrawField.value;
   const newWithdrawAmount = parseFloat(withdrawString);

   const withdrawTotalElement = document.getElementById('withdraw-f');
   const previousWithdrawString = withdrawTotalElement.innerText;
   const previousWithdrawTotal = parseFloat(previousWithdrawString);
   
   const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
     withdrawTotalElement.innerText = currentWithdrawTotal;

    withdrawField.value = '';

   const balanceTotalElement = document.getElementById('balance-total');
   const previouBalanceTotalString = balanceTotalElement.innerText;
   const previouBalanceTotal = parseFloat(previouBalanceTotalString);

   const newBalanceTotal = previouBalanceTotal - newWithdrawAmount;
   balanceTotalElement.innerText = newBalanceTotal;
})