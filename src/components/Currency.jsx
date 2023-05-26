import React, { useState, useEffect } from "react";

const CurrencyConverter = () => {
  const [inputValue, setInputValue] = useState("");
  const [selectedInputCurrency, setSelectedInputCurrency] = useState("");
  const [outputValue, setOutputValue] = useState("");
  const [selectedOutputCurrency, setSelectedOutputCurrency] = useState("");

  useEffect(() => {
    handleCurrencyConversion();
  }, [inputValue, selectedInputCurrency, selectedOutputCurrency]);

  const handleCurrencyConversion = () => {
    if (
      inputValue === "" ||
      selectedInputCurrency === "" ||
      selectedOutputCurrency === ""
    ) {
      setOutputValue("0");
      return;
    }

    const conversionRates = {
      USD: {
        EUR: 0.82,
        GBP: 0.71,
        CAD: 1.21,
        AUD: 1.29,
        JPY: 109.33,
        INR: 73.55, // 1 USD = 73.55 INR
 
      },
      EUR: {
        USD: 1.22,
        GBP: 0.86,
        CAD: 1.47,
        AUD: 1.57,
        JPY: 132.82,
        INR: 89.80, // 1 EUR = 89.80 INR
      
      },
      GBP: {
        USD: 1.40,
        EUR: 1.17,
        CAD: 1.70,
        AUD: 1.81,
        JPY: 153.54,
        INR: 104.46, // 1 GBP = 104.46 INR
      
      },
      CAD: {
        USD: 0.83,
        EUR: 0.68,
        GBP: 0.59,
        AUD: 1.07,
        JPY: 90.65,
        INR: 54.79, // 1 CAD = 54.79 INR

      },
      AUD: {
        USD: 0.78,
        EUR: 0.64,
        GBP: 0.55,
        CAD: 0.93,
        JPY: 84.45,
        INR: 48.73, // 1 AUD = 48.73 INR
      
      },
      JPY: {
        USD: 0.0091,
        EUR: 0.0075,
        GBP: 0.0065,
        CAD: 0.011,
        AUD: 0.012,
        INR: 0.65, // 1 JPY = 0.65 INR
      
      },
      INR: {
        USD: 0.014, // 1 INR = 0.014 USD
        EUR: 0.011, // 1 INR = 0.011 EUR
        GBP: 0.010, // 1 INR = 0.010 GBP
        CAD: 0.018, // 1 INR = 0.018 CAD
        AUD: 0.020, // 1 INR = 0.020 AUD
        JPY: 1.53,  // 1 INR = 1.53 JPY
      
      },
    };

    const convrate=conversionRates[selectedInputCurrency][selectedOutputCurrency];
    const output=(parseFloat(inputValue)*convrate);
    setOutputValue(output);

    
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    handleCurrencyConversion();
  };

  return (
    <div className="main">
      <div className="container">
        <h2 className="heading">Currency Converter</h2>

        <div className="calculations">
          <div className="input">
            <input
              type="number"
              value={inputValue}
              onChange={handleInputChange}
            />
            <select
              value={selectedInputCurrency}
              onChange={(event) => setSelectedInputCurrency(event.target.value)}
            >
              <option value="">Select currency</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="CAD">CAD</option>
              <option value="AUD">AUD</option>
              <option value="JPY">JPY</option>
              <option value="INR">INR</option> {/* Added INR */}
              {/* Add more currency options here */}
            </select>
          </div>
          <div className="output">
            <input type="text" value={outputValue} readOnly />
            <select
              value={selectedOutputCurrency}
              onChange={(event) =>
                setSelectedOutputCurrency(event.target.value)
              }
            >
              <option value="">Select currency</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="CAD">CAD</option>
              <option value="AUD">AUD</option>
              <option value="JPY">JPY</option>
              <option value="INR">INR</option> {/* Added INR */}
              {/* Add more currency options here */}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter;
