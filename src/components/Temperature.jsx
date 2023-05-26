import React, { useState, useEffect } from "react";

const Temperature = () => {
  const [inputValue, setInputValue] = useState("");
  const [selectedInputValue, setSelectedInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");
  const [selectedOutputValue, setSelectedOutputValue] = useState("");

  useEffect(() => {
    handleConversions();
  }, [inputValue, selectedInputValue, selectedOutputValue]);

  const handleConversions = () => {
    let input = parseFloat(inputValue);
  
    if (selectedInputValue === "") {
      setSelectedInputValue("Celsius");
      setSelectedOutputValue("Celsius");
    }
  
    switch (selectedInputValue) {
      case "Celsius":
        input = inputValue;
        break;
      case "Fahrenheit":
        input = (inputValue - 32) * (5 / 9);
        break;
      case "Kelvin":
        input = parseFloat(inputValue) + 273.15;
        break;
      case "Rankine":
        input = (inputValue - 491.67) * (5 / 9);
        break;
      case "Centigrade":
        input = inputValue;
        break;
      // Add more cases for other temperature units as needed
  
      default:
        console.log("default input");
    }
  
    switch (selectedOutputValue) {
      case "Celsius":
        setOutputValue(Number(input).toFixed(2));
        break;
      case "Fahrenheit":
        setOutputValue((input * (9 / 5) + 32).toFixed(2));
        break;
      case "Kelvin":
        setOutputValue((parseFloat(input) + 273.15)); // Corrected calculation
        break;
      case "Rankine":
        setOutputValue((input * (9 / 5) + 491.67).toFixed(2));
        break;
      case "Centigrade":
        setOutputValue(Number(input).toFixed(2));
        break;
      // Add more cases for other temperature units as needed
  
      default:
        console.log("default output");
    }
  };
  

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    handleConversions();
  };

  return (
    <div className="main">
      <div className="container">
        <h2 className="heading">Temperature Converter</h2>

        <div className="calculations">
          <div className="input">
            <input
              type="number"
              value={inputValue}
              onChange={handleInputChange}
            />
            <select
              value={selectedInputValue}
              onChange={(event) => setSelectedInputValue(event.target.value)}
            >
              <option value="Celsius">Celsius</option>
              <option value="Fahrenheit">Fahrenheit</option>
              <option value="Kelvin">Kelvin</option>
              <option value="Rankine">Rankine</option>
              <option value="Centigrade">Centigrade</option>
              {/* Add more temperature units here */}
            </select>
          </div>
          <div className="output">
            <input type="number" value={outputValue} readOnly />
            <select
              value={selectedOutputValue}
              onChange={(event) => setSelectedOutputValue(event.target.value)}
            >
              <option value="Celsius">Celsius</option>
              <option value="Fahrenheit">Fahrenheit</option>
              <option value="Kelvin">Kelvin</option>
              <option value="Rankine">Rankine</option>
              <option value="Centigrade">Centigrade</option>
              {/* Add more temperature units here */}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Temperature;
