//==================================DEPOSIT SECTION===================================//
document.getElementById('deposit-btn').addEventListener('click', function(){
    
    // Deposit calculations:
    const depositField = document.getElementById('input-deposit');
    const depositAmount = parseFloat(depositField.value);
    //Clear the deposit fied
    depositField.value = '';

    //Input deposit Error Handling
    if (isNaN(depositAmount)){
        alert('Please Enter the correct Amount');
        return;
    }
    
    const previousDeposit = document.getElementById('deposit-amount');
    const previousDepositamount = parseFloat(previousDeposit.innerText);
    
    const currentDeposit = previousDepositamount + depositAmount;
    previousDeposit.innerText = currentDeposit;
    


    //Current Balance Updating
    const balance = document.getElementById('current-amount');
    const previousBalance = parseFloat(balance.innerText);
    
    const newBalance = previousBalance + depositAmount;
    balance.innerText = newBalance;
})


//================================DEPOSIT SECTION END============================================//


//==================================WITHDRAW SECTION===================================//
document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawfield = document.getElementById('input-withdraw')
    const withdrawAmount = parseFloat(withdrawfield.value);
    // console.log(withdrawAmount);
    withdrawfield.value = '';

    //Input withdraw Error Handling (if user input String value)
    if (isNaN(withdrawAmount)){
        alert('Please Enter the correct Amount');
        return;
    }    

    const previouswithdraw = document.getElementById('withdraw-amount');
    const previouswithdrawAmount = parseFloat(previouswithdraw.innerText);
    

    const balance = document.getElementById('current-amount');
    const previousBalance = parseFloat(balance.innerText);

    //Input Withdraw Error handaling
    if(withdrawAmount > previousBalance){
        alert('Insufficient Balance');
        return;
    }

    //Updating Withdarw amount
    const currentWithdraw = previouswithdrawAmount + withdrawAmount;
    previouswithdraw.innerHTML = currentWithdraw

    //Current Balance Updating      
    const newBalance = previousBalance - withdrawAmount;
    balance.innerText = newBalance;
})

//======================================WITHDRAW SECTION END=====================================//