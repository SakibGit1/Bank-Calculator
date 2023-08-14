//step 1: add widrow btn 
document.getElementById('withdraw-btn').addEventListener('click', function(){
   const withdrawField = document.getElementById('withdraw-fl');
   const withdrawString = withdrawField.value;
   const newWithdrawAmount = parseFloat(withdrawString);

   const withdrawTotalElement = document.getElementById('withdraw-f');
   const previousWithdrawString = withdrawTotalElement.innerText;
   const previousWithdrawTotal = parseFloat(previousWithdrawString);

    

   const balanceTotalElement = document.getElementById('balance-total');
   const previouBalanceTotalString = balanceTotalElement.innerText;
   const previouBalanceTotal = parseFloat(previouBalanceTotalString);

   withdrawField.value = '';
   
   if(newWithdrawAmount > previouBalanceTotal){
      return alert('Not available this amount of money on you account')
    }
       
   const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
   withdrawTotalElement.innerText = currentWithdrawTotal;

   const newBalanceTotal = previouBalanceTotal - newWithdrawAmount;
   balanceTotalElement.innerText = newBalanceTotal;
})