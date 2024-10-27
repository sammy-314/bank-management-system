document.addEventListener("DOMContentLoaded", () => {
    const usdToInrRate = 82.5;
    let balance = 1000;
  
    const transactions = [
      { id: 1, type: 'Deposit', amount: 500, date: '2024-10-25' },
      { id: 2, type: 'Withdraw', amount: 200, date: '2024-10-26' },
    ];
  
    const transactionForm = document.getElementById("transactionForm");
    const balanceInfo = document.getElementById("balanceInfo");
    const balanceAmount = document.getElementById("balanceAmount");
    const transactionList = document.getElementById("transactionList");
  
    transactionForm.addEventListener("submit", (e) => {
      e.preventDefault();
      balanceAmount.textContent = (balance * usdToInrRate).toFixed(2);
      transactionList.innerHTML = transactions
        .map(
          (t) => `<li>${t.date}: <span class="${
            t.type === "Deposit" ? "text-green" : "text-red"
          }">${t.type}</span> of ₹${(t.amount * usdToInrRate).toFixed(2)}</li>`
        )
        .join("");
      balanceInfo.classList.remove("hidden");
    });
  
    document.getElementById("createAccountForm").addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Account Created");
    });
  
    document.getElementById("depositForm").addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Amount Deposited");
    });
  
    document.getElementById("sendAmountForm").addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Amount Sent");
    });
  
    document.getElementById("withdrawForm").addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Amount Withdrawn");
    });
  });
  