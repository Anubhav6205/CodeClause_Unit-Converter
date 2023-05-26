import "./css/Converter.css";
import { useState, useEffect } from "react";
import React from "react";
const TimeConverter = () => {
  const [inputValue, setInputValue] = useState("");
  const [selectedInputValue, setSelectedInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");
  const [selectedOutputValue, setSelectedOutputValue] = useState("");

  useEffect(() => {
    handleTimeConversions();
  }, [inputValue, selectedInputValue, selectedOutputValue]);

  const handleTimeConversions = () => {
    let input = inputValue;
    if (selectedInputValue == "") {
      setSelectedInputValue("seconds");
      setSelectedOutputValue("seconds");
    }

    switch (selectedInputValue) {
      case "seconds":
        input = inputValue;
        break;
      case "minutes":
        input = inputValue * 60;
        break;
      case "hours":
        input = inputValue * 3600;
        break;
      case "days":
        input = inputValue * 86400;
        break;
      case "months":
        input = inputValue * 2592000;
        break;
      case "years":
        input = inputValue * 31536000;
        break;
      case "decades":
        input = inputValue * 315360000;
        break;
      default:
        console.log("default input");
    }

    switch (selectedOutputValue) {
      case "seconds":
        setOutputValue(Number(input).toFixed(6));
        break;
      case "minutes":
        setOutputValue((input / 60).toFixed(6));
        break;
      case "hours":
        setOutputValue((input / 3600).toFixed(6));
        break;
      case "days":
        setOutputValue((input / 86400).toFixed(6));
        break;
      case "months":
        setOutputValue((input / 2592000).toFixed(6));
        break;
      case "years":
        setOutputValue((input / 31536000).toFixed(6));
        break;
      case "decades":
        setOutputValue((input / 315360000).toFixed(6));
        break;
      default:
        console.log("default output");
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    handleTimeConversions();
  };

  return (
    <div className="main">
      <div className="container">
        <h2 className="heading">Time Converter</h2>

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
              <option value="seconds">Seconds</option>
              <option value="minutes">Minutes</option>
              <option value="hours">Hours</option>
              <option value="days">Days</option>
              <option value="months">Months</option>
              <option value="years">Years</option>
              <option value="decades">Decades</option>
            </select>
          </div>
          <div className="output">
            <input type="number" value={outputValue} readOnly />
            <select
              value={selectedOutputValue}
              onChange={(event) => setSelectedOutputValue(event.target.value)}
            >
              <option value="seconds">Seconds</option>
              <option value="minutes">Minutes</option>
              <option value="hours">Hours</option>
              <option value="days">Days</option>
              <option value="months">Months</option>
              <option value="years">Years</option>
              <option value="decades">Decades</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeConverter;
