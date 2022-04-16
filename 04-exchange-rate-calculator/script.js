const currencyElOne = document.getElementById('currency-one');
const currencyElTwo = document.getElementById('currency-two');

const amountElOne = document.getElementById('amount-one');
const amountElTwo = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

// Fetch Exchange rates and update the DOM
function calculate() {
    const currencyOne = currencyElOne.value;
    const currencyTwo = currencyElTwo.value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${currencyOne}`)
        .then(res => res.json())
        .then(data => { 
            // console.log(data); 
            const rate = data.rates[currencyTwo];
            // console.log(rate);
            rateEl.innerText = `1 ${currencyOne} = ${rate} ${currencyTwo}`

            amountElTwo.value = (amountElOne.value * rate).toFixed(2)
        });
}

// Event Listeners
currencyElOne.addEventListener('change', calculate);
currencyElTwo.addEventListener('change', calculate);
amountElOne.addEventListener('input', calculate);
amountElTwo.addEventListener('input', calculate);
swap.addEventListener('click', () => {
    const temp = currencyElOne.value;
    currencyElOne.value = currencyElTwo.value;
    currencyElTwo.value = temp;
    calculate()
})

calculate();