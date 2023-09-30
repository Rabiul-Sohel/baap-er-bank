document.getElementById('btn-withdraw').addEventListener('click', function () {
  const inputWithdrawElement = document.getElementById("input-withdraw");
  const inputWithdrawString = inputWithdrawElement.value;
  const inputWithdrawAmount = parseFloat(inputWithdrawString);
  
  const currentWithdrawElement = document.getElementById("current-withdraw");
  const currentWithdrawString = currentWithdrawElement.innerText;
  const currentWithdrawAmount = parseFloat(currentWithdrawString);
  
 

  inputWithdrawElement.value = '';

  if (isNaN(inputWithdrawAmount)) {
    alert('Input a valid number');
    return;
  }
  const totalWithdrawAmount = currentWithdrawAmount + inputWithdrawAmount;

  const currentBalanceElement = document.getElementById("current-balance");
  const currentBalanceString = currentBalanceElement.innerText;
  const currentBalanceAmount = parseFloat(currentBalanceString);

  const totalBalanceAmount = currentBalanceAmount - inputWithdrawAmount;
  
  if (inputWithdrawAmount > currentBalanceAmount) {
    alert("Baap er Bank a eto taka nai");
    return;
  }
   
  currentWithdrawElement.innerText = totalWithdrawAmount;
  currentBalanceElement.innerText = totalBalanceAmount;

})