document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();
    const Cashout = document.getElementById('input-cash-out').value;
    const CashoutNumber = parseFloat(Cashout);

    const pinNumber = document.getElementById('cash-out-pin').value;

    if(pinNumber === '1234'){
        const balance = document.getElementById('account-balance').innerText;
const balanceNumber = parseFloat (balance);

const newBalance = balanceNumber - CashoutNumber ; 

document.getElementById('account-balance').innerText = newBalance;
    } else {
        alert('Failed to cash out')
    }

})