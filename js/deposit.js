document.getElementById('btn-deposit').addEventListener('click', function () {
  const inputDepositElement = document.getElementById('input-deposit');
  const depositAmountString = inputDepositElement.value;
  const newDeposit = parseFloat(depositAmountString);
  
  const defaultDepositElement = document.getElementById("default-deposit");
  const defaultDepositString = defaultDepositElement.innerText;
  let defaultDeposit = parseFloat(defaultDepositString);
  
  const currentDeposit = defaultDeposit + newDeposit;
  inputDepositElement.value = '';
  if (isNaN(newDeposit)) {
    alert("Input a valid number");
    return;
  }
  defaultDepositElement.innerText = currentDeposit;

  const currentBalanceElement = document.getElementById("current-balance");
  const currentBalanceString = currentBalanceElement.innerText;
  const currentBalanceAmount = parseFloat(currentBalanceString);
  const totalBalanceAmount = currentBalanceAmount + newDeposit;
  currentBalanceElement.innerText = totalBalanceAmount;

})

