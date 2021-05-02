let form = document.querySelector(".js-form");
let amountField = document.querySelector(".js-amountField");
let indicatedCurrency = document.querySelector(".js-currency");
let result = document.querySelector(".js-result");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let eur = 4.5483;
    let usd = 3.7971;
    let gbp = 5.2230;

    let amount = +amountField.value;
    let currency = indicatedCurrency.value;

    switch (currency) {
        case "EUR":
            score = amount / eur;
            break;
        case "USD":
            score = amount / usd;
            break;
        case "GBP":
            score = amount / gbp;
            break;
    }

    result.innerText = `${score.toFixed(2)} ${currency}`;
});
