const billAmount = document.getElementById("bill");
const numberOfPeople = document.getElementById("people");
const customTipPercentage = document.getElementById("custom");
const billTipAmount = document.getElementById("tipAmount");
const billTotalPerPerson = document.getElementById("total");
const resetButton = document.getElementById("resetBtn");
const buttons = document.querySelectorAll(".tip-btns button");
const p = document.getElementById('paragraph')

//Calculate Tip When Click On Tip Percentage Button
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let tipvalue = e.target.innerText;
    tipvalue = tipvalue.substr(0, tipvalue.length - 1);

    if (billAmount.value === "") return;
    if (numberOfPeople.value === "") numberOfPeople.value = 1;
    calculateTip(
      parseFloat(billAmount.value),
      parseInt(tipvalue),
      parseInt(numberOfPeople.value)
    );
  });
});

// Calculate Tip When User Gives Custom Tip Percentage Input
customTipPercentage.addEventListener("blur", (e) => {
  if (billAmount.value === "") {
    resetEverything();                  
    return;
  }
  if (numberOfPeople.value === "") numberOfPeople.value = 1;

  let customTip = parseFloat(e.target.value);
  if (customTip > 100) {
    customTip = 100;
    e.target.value = "100";
  }                                                                                                                                                                                                                                                                                                         

  calculateTip(
    parseFloat(billAmount.value),
    customTip,
    parseInt(numberOfPeople.value)
  );
});

// Validate Number of People Input
numberOfPeople.addEventListener("input", () => {
    if (numberOfPeople.value === "") {
      numberOfPeople.classList.add("invalid");
      p.style.display = "block";
    } else {
      numberOfPeople.classList.remove("invalid");
     p.style.display = "none";
    }
  
    if (billAmount.value === "" || numberOfPeople.value === "") return;
  
    calculateTip(
      parseFloat(billAmount.value),
      parseFloat(customTipPercentage.value),
      parseInt(numberOfPeople.value)
    );
  });

//Calculate Tip
const calculateTip = (billAmount, tipPercentage, numberOfPeople) => {
  let tipAmount = (billAmount * (tipPercentage / 100)) / numberOfPeople;
  let tip = Math.floor(tipAmount * 100) / 100;
  tip = tip.toFixed(2);

  let totalAmount = (tipAmount * numberOfPeople + billAmount) / numberOfPeople;
  totalAmount = totalAmount.toFixed(2);

  billTipAmount.innerHTML = `$${tip}`;
  billTotalPerPerson.innerHTML = `$${totalAmount}`;
};

//Reset Everything
resetButton.addEventListener("click", resetEverything);
function resetEverything() {
  billTipAmount.innerHTML = "$0.00";
  billTotalPerPerson.innerHTML = "$0.00";
  billAmount.value = "";
  numberOfPeople.value = "";
  customTipPercentage.value = "";
}