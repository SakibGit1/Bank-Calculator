// step 1: login
document.getElementById('btn-login').addEventListener('click', function(){
  //step 2: get the email inside the email input
    // use.value to get the input field value
  const emailField = document.getElementById('user-email');
  const email = emailField.value;
  //step 3: get password
    const passField = document.getElementById('user-pass');
    const pass = passField.value;
    // Danger: Do Not Use this process on the client side, we just use it for this time only.
   //step 4: check email & password
   if(email === 'sakib@gmail.com' && pass === 'sakib123'){
    window.location.href = 'bank.html';
   }
  else{
    alert('invalid email or password');
  }
})