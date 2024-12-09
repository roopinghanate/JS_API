const fromAmountELement = document.querySelector(".amount");
const convertedAmountELement = document.querySelector(".convertedAmount");
const fromCurrencyELement = document.querySelector(".fromCurrency");
const toCurrencyELement = document.querySelector(".toCurrency");
const resultELement = document.querySelector(".result");
const converterContainer = document.querySelector(".converter-container");


//Array to populate the select tags with these countries
const countries = [
  { code: "AED", name: "United Arab Emirates" },
  { code: "AFN", name: "Afghanistan" },
  { code: "ALL", name: "Albania" },
  { code: "AMD", name: "Armenia" },
  { code: "AOA", name: "Angola" },
  { code: "ARS", name: "Argentina" },
  { code: "AWG", name: "Aruba" },
  { code: "AZN", name: "Azerbaijan" },
  { code: "BAM", name: "Bosnia and Herzegovina" },
  { code: "BBD", name: "Barbados" },
  { code: "BDT", name: "Bangladesh" },
  { code: "BHD", name: "Bahrain" },
  { code: "BIF", name: "Burundi" },
  { code: "BMD", name: "Bermuda" },
  { code: "BND", name: "Brunei" },
  { code: "BOB", name: "Bolivia" },
  { code: "BRL", name: "Brazil" },
  { code: "BWP", name: "Botswana" },
  { code: "BYN", name: "Belarus" },
  { code: "CAD", name: "Canada" },
  { code: "CDF", name: "Congo (Democratic Republic)" },
  { code: "CHF", name: "Switzerland" },
  { code: "CLP", name: "Chile" },
  { code: "CNY", name: "China" },
  { code: "COP", name: "Colombia" },
  { code: "CRC", name: "Costa Rica" },
  { code: "CUP", name: "Cuba" },
  { code: "CVS", name: "Cape Verde" },
  { code: "CZK", name: "Czech Republic" },
  { code: "DKK", name: "Denmark" },
  { code: "DOP", name: "Dominican Republic" },
  { code: "DZD", name: "Algeria" },
  { code: "EGP", name: "Egypt" },
  { code: "ERN", name: "Eritrea" },
  { code: "ETB", name: "Ethiopia" },
  { code: "EUR", name: "Andorra" },
  { code: "FJD", name: "Fiji" },
  { code: "FIM", name: "Finland" },
  { code: "FOK", name: "Faroe Islands" },
  { code: "GBP", name: "United Kingdom" },
  { code: "GEL", name: "Georgia" },
  { code: "GHS", name: "Ghana" },
  { code: "GIP", name: "Gibraltar" },
  { code: "GMD", name: "Gambia" },
  { code: "GNF", name: "Guinea" },
  { code: "GNS", name: "Guinea-Bissau" },
  { code: "GTQ", name: "Guatemala" },
  { code: "GUP", name: "Guadeloupe" },
  { code: "GYD", name: "Guyana" },
  { code: "HKD", name: "Hong Kong" },
  { code: "HRK", name: "Croatia" },
  { code: "HTG", name: "Haiti" },
  { code: "HUF", name: "Hungary" },
  { code: "IDR", name: "Indonesia" },
  { code: "ILS", name: "Israel" },
  { code: "INR", name: "India" },
  { code: "IQD", name: "Iraq" },
  { code: "IRR", name: "Iran" },
  { code: "ISK", name: "Iceland" },
  { code: "JMD", name: "Jamaica" },
  { code: "JOD", name: "Jordan" },
  { code: "JPY", name: "Japan" },
  { code: "KES", name: "Kenya" },
  { code: "KGS", name: "Kyrgyzstan" },
  { code: "KHR", name: "Cambodia" },
  { code: "KMF", name: "Comoros" },
  { code: "KRW", name: "South Korea" },
  { code: "KWD", name: "Kuwait" },
  { code: "KYD", name: "Cayman Islands" },
  { code: "KZT", name: "Kazakhstan" },
  { code: "LAK", name: "Laos" },
  { code: "LBP", name: "Lebanon" },
  { code: "LKR", name: "Sri Lanka" },
  { code: "LRD", name: "Liberia" },
  { code: "LSL", name: "Lesotho" },
  { code: "LTL", name: "Lithuania" },
  { code: "LVL", name: "Latvia" },
  { code: "MAD", name: "Morocco" },
  { code: "MKD", name: "North Macedonia" },
  { code: "MMK", name: "Myanmar" },
  { code: "MNT", name: "Mongolia" },
  { code: "MOP", name: "Macau" },
  { code: "MRU", name: "Mauritania" },
  { code: "MUR", name: "Mauritius" },
  { code: "MVR", name: "Maldives" },
  { code: "MWK", name: "Malawi" },
  { code: "MXN", name: "Mexico" },
  { code: "MYR", name: "Malaysia" },
  { code: "MZN", name: "Mozambique" },
  { code: "NAD", name: "Namibia" },
  { code: "NIO", name: "Nicaragua" },
  { code: "NOK", name: "Norway" },
  { code: "NPR", name: "Nepal" },
  { code: "NZD", name: "New Zealand" },
  { code: "OMR", name: "Oman" },
  { code: "PAB", name: "Panama" },
  { code: "PEN", name: "Peru" },
  { code: "PGK", name: "Papua New Guinea" },
  { code: "PHP", name: "Philippines" },
  { code: "PKR", name: "Pakistan" },
  { code: "PLN", name: "Poland" },
  { code: "PYG", name: "Paraguay" },
  { code: "QAR", name: "Qatar" },
  { code: "RON", name: "Romania" },
  { code: "RSD", name: "Serbia" },
  { code: "RUB", name: "Russia" },
  { code: "SAR", name: "Saudi Arabia" },
  { code: "SBD", name: "Solomon Islands" },
  { code: "SCR", name: "Seychelles" },
  { code: "SEK", name: "Sweden" },
  { code: "SGD", name: "Singapore" },
  { code: "SHP", name: "Saint Helena" },
  { code: "SLL", name: "Sierra Leone" },
  { code: "SLL", name: "Sierra Leone" },
  { code: "SOS", name: "Somalia" },
  { code: "SYP", name: "Syria" },
  { code: "THB", name: "Thailand" },
  { code: "TJS", name: "Tajikistan" },
  { code: "TKM", name: "Turkmenistan" },
  { code: "TMT", name: "Turkmenistan" },
  { code: "TND", name: "Tunisia" },
  { code: "TRY", name: "Turkey" },
  { code: "TTD", name: "Trinidad and Tobago" },
  { code: "TWD", name: "Taiwan" },
  { code: "TZS", name: "Tanzania" },
  { code: "UGX", name: "Uganda" },
  { code: "UAH", name: "Ukraine" },
  { code: "USD", name: "United States" },
  { code: "UYU", name: "Uruguay" },
  { code: "UZS", name: "Uzbekistan" },
  { code: "VND", name: "Vietnam" },
  { code: "VUV", name: "Vanuatu" },
  { code: "XOF", name: "West African CFA" },
  { code: "YER", name: "Yemen" },
  { code: "ZAR", name: "South Africa" },
  { code: "ZMW", name: "Zambia" },
  { code: "ZWD", name: "Zimbabwe" },
];

//showing countries from array to select tag
countries.forEach((country) => {
  const option1 = document.createElement("option");
  option1.value = country.code;
  option1.textContent = `${country.code} (${country.name})`;
  fromCurrencyELement.appendChild(option1);

  const option2 = document.createElement("option");
  option2.value = country.code;
  option2.textContent = `${country.code} (${country.name})`;
  toCurrencyELement.appendChild(option2);

  //Setting default values of select tag
  fromCurrencyELement.value = "USD";
  toCurrencyELement.value = "INR";
});

//Function to get exchange rate using API
const getExchangeRate = async () => {
  const amount = parseFloat(fromAmountELement.value);
  const fromCurrency = fromCurrencyELement.value;
  const toCurrency = toCurrencyELement.value;
  resultELement.textContent = "Fetching Exchange Rates....";


  try {
    //fetch data from API
    const response = await fetch(
      `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
    );
    const data = await response.json();

    //console.log(data);

    const conversionRate = data.rates[toCurrency]; 
    const convertedAmount = (amount * conversionRate).toFixed(2);

    if(typeof conversionRate === 'undefined'){
      resultELement.textContent = 'Exchange rate data is not available for selected countries';
      convertedAmountELement = '';
    }else{
      convertedAmountELement.value = convertedAmount;
      resultELement.textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
    }

   
  } catch (error) {
      
    converterContainer.innerHTML = `<h2>Error while fetching exchange rates!!!!</h2>`;

  }
};

//fetching exchange rate when user inputs the amount
fromAmountELement.addEventListener("input", getExchangeRate);

//fetching exchange rate when user change currency
fromCurrencyELement.addEventListener("change", getExchangeRate);
toCurrencyELement.addEventListener("input", getExchangeRate);

//fetching exchange rate to default value when the window load
window.addEventListener("load", getExchangeRate);
