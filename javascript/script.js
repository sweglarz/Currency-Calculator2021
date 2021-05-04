{
    const calculateResult = (amount, currency) => {
        const eur = 4.5483;
        const usd = 3.7971;
        const gbp = 5.2230; 
    
        switch (currency) {
            case "EUR":
                return amount / eur;
            case "USD":
                return amount / usd;
            case "GBP":
                return amount / gbp;
        }
    };
    
    const updateResult = (resultText, currency) => {
        const result = document.querySelector(".js-result");
        result.innerText = `${resultText.toFixed(2)} ${currency}`;
    }
    
    const onFormSubmit = (event) => {
        event.preventDefault();
    
        const amountField = document.querySelector(".js-amountField");
        const indicatedCurrency = document.querySelector(".js-currency");
        const amount = +amountField.value;
        const currency = indicatedCurrency.value;
        const resultText = calculateResult (amount, currency);
        updateResult(resultText, currency);
    }
    
    const init = () => {
        const form = document.querySelector(".js-form");
        form.addEventListener("submit", onFormSubmit);
    }
    init(); 
}