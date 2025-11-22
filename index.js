// function appComponent() {
//   return `
//   <h1>Odds and Events</h1>
//         <span>Add a number to the bank</span>
//         <input/>
//         <button id= "b1">Add Number</button>
//         <button id="b2">Sort 1</button>
//         <button id="b3">Sort All</button>
//       <h2>Bank</h2>
//         <input id="bankNumbers"/>
//       <h2>Odds</h2>
//         <input/>
//       <h2>Evens</h2>
//         <input/>`;
// }

// function render() {
//   const myApp = document.getElementById("app");
//   myApp.innerHTML = appComponent();
// }
// function button() {
//   const myButton = document.getElementById("app");
//   myButton.addEventListener("submit", () => {
//     console.log("clicked!");
//   });
// }
// render();
// button();

// const h1 = document.querySelector('h1');
// h1.style.backgroundColor= 'red';

const myApp = document.querySelector("#app");

const h1 = document.createElement("h1");
h1.textContent = "Odds and Evens";
myApp.appendChild(h1);

const numberInput = document.createElement("input");
myApp.appendChild(numberInput);

const button1 = document.createElement("button");
button1.textContent = "add number";
myApp.appendChild(button1);

const button2 = document.createElement("button");
button2.textContent = "sort 1";
myApp.appendChild(button2);

const button3 = document.createElement("button");
button3.textContent = "sort all";
myApp.appendChild(button3);

const bankHeader = document.createElement("h2");
bankHeader.textContent = "Bank";
myApp.appendChild(bankHeader);

const bankInput = document.createElement("input");
myApp.appendChild(bankInput);

const oddsHeader = document.createElement("h2");
oddsHeader.textContent = "Odds";
myApp.appendChild(oddsHeader);

const oddsInput = document.createElement("input");
myApp.appendChild(oddsInput);

const evensHeader = document.createElement("h2");
evensHeader.textContent = "Evens";
myApp.appendChild(evensHeader);

const evensInput = document.createElement("input");
myApp.appendChild(evensInput);

const state = {
  bankNumbers: [],
  oddsNumbers: [],
  evenNumbers: [],
};
button1.addEventListener("click", () => {
  // bankInput.value=numberInput.value

  state.bankNumbers.push(numberInput.value);
  bankInput.value = state.bankNumbers;
  numberInput.value = "";
});

button2.addEventListener("click", () => {
  const number = state.bankNumbers.pop();
  // state.oddsNumbers.push(number);
  bankInput.value = state.bankNumbers;
  if (number % 2 === 1) {
      state.oddsNumbers.push(number);
  } else {
    state.evenNumbers.push(number);
  }
    oddsInput.value= state.oddsNumbers.join(",");
    evensInput.value= state.evenNumbers.join(",");
  });

  button3.addEventListener("click",()=>{
    while (state.bankNumbers.length > 0){
      const number = state.bankNumbers.pop();
      if (number % 2===1){
        state.oddsNumbers.push(number);
      }
      else {
        state.evenNumbers.push(number);
      }
    }
    bankInput.value=state.bankNumbers;
    oddsInput.value=state.oddsNumbers.join(",");
    evensInput.value=state.evenNumbers.join(",") 
    });

