document.getElementById('btn-login').addEventListener('click', function (event) {
event.preventDefault();
    // get the phone-number and the pn number 
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    console.log(phoneNumber, pinNumber);
// validate phone and pin
if (phoneNumber === '5' && pinNumber === '1234'){
    console.log('you are log in');
    window.location.href= '/home.html';
}
else {
    alert('wrong pin');
}
})


