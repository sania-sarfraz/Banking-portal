
let currentBalance = 5000;

function updateBalance() {
  document.getElementById("currentBalance").textContent = "currentBalance: $" + currentBalance;
}

function deposit() {
    const depositAmount = parseFloat(document.getElementById("amountDetail").value);
    if (!isNaN(depositAmount) && depositAmount > 0) {
      currentBalance += depositAmount;
      updateBalance();
    }
  }

  function withdraw() {
    const withdrawAmount = parseFloat(document.getElementById("amountDetail").value);
    if (!isNaN(withdrawAmount) && withdrawAmount > 0 && withdrawAmount <= currentBalance) {
      currentBalance -= withdrawAmount;
      updateBalance();
    }
  }
  
