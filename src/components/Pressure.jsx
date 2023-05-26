import React, { useState, useEffect } from "react";

const Pressure = () => {
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
      setSelectedInputValue("Pa");
      setSelectedOutputValue("Pa");
    }

    switch (selectedInputValue) {
      case "Pa":
        input = inputValue;
        break;
      case "kPa":
        input = inputValue * 1000;
        break;
      case "bar":
        input = inputValue * 100000;
        break;
      case "psi":
        input = inputValue * 6894.76;
        break;
      case "ksi":
        input = inputValue * 6894760;
        break;
      case "atm":
        input = inputValue * 101325;
        break;
      case "exapascal":
        input = inputValue * 1e+18;
        break;
      case "petapascal":
        input = inputValue * 1e+15;
        break;
      case "gigapascal":
        input = inputValue * 1e+9;
        break;
      case "attopascal":
        input = inputValue * 1e-18;
        break;
      case "newton":
        input = inputValue * 0.00000980665;
        break;
      case "square cm":
        input = inputValue * 0.0001;
        break;
      case "millibar":
        input = inputValue * 100;
        break;
      case "microbar":
        input = inputValue * 0.1;
        break;
      case "tonforce/sq":
        input = inputValue * 98066.5;
        break;
      case "inch water":
        input = inputValue * 248.84;
        break;
      case "foot water":
        input = inputValue * 2980.98;
        break;
      default:
        console.log("default input");
    }

    switch (selectedOutputValue) {
      case "Pa":
        setOutputValue(Number(input).toFixed(2));
        break;
      case "kPa":
        setOutputValue((input / 1000).toFixed(2));
        break;
      case "bar":
        setOutputValue((input / 100000).toFixed(2));
        break;
      case "psi":
        setOutputValue((input / 6894.76).toFixed(2));
        break;
      case "ksi":
        setOutputValue((input / 6894760).toFixed(2));
        break;
      case "atm":
        setOutputValue((input / 101325).toFixed(2));
        break;
      case "exapascal":
        setOutputValue((input / 1e+18).toFixed(2));
        break;
      case "petapascal":
        setOutputValue((input / 1e+15).toFixed(2));
        break;
      case "gigapascal":
        setOutputValue((input / 1e+9).toFixed(2));
        break;
      case "attopascal":
        setOutputValue((input / 1e-18).toFixed(2));
        break;
      case "newton":
        setOutputValue((input / 0.00000980665).toFixed(2));
        break;
      case "square cm":
        setOutputValue((input / 0.0001).toFixed(2));
        break;
      case "millibar":
        setOutputValue((input / 100).toFixed(2));
        break;
      case "microbar":
        setOutputValue((input / 0.1).toFixed(2));
        break;
      case "tonforce/sq":
        setOutputValue((input / 98066.5).toFixed(2));
        break;
      case "inch water":
        setOutputValue((input / 248.84).toFixed(2));
        break;
      case "foot water":
        setOutputValue((input / 2980.98).toFixed(2));
        break;
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
        <h2 className="heading">Pressure Converter</h2>

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
              <option value="Pa">Pa</option>
              <option value="kPa">kPa</option>
              <option value="bar">bar</option>
              <option value="psi">psi</option>
              <option value="ksi">ksi</option>
              <option value="atm">atm</option>
              <option value="exapascal">exapascal</option>
              <option value="petapascal">petapascal</option>
              <option value="gigapascal">gigapascal</option>
              <option value="attopascal">attopascal</option>
              <option value="newton">newton</option>
              <option value="square cm">square cm</option>
              <option value="millibar">millibar</option>
              <option value="microbar">microbar</option>
              <option value="tonforce/sq">tonforce/sq</option>
              <option value="inch water">inch water</option>
              <option value="foot water">foot water</option>
            </select>
          </div>
          <div className="output">
            <input type="number" value={outputValue} readOnly />
            <select
              value={selectedOutputValue}
              onChange={(event) => setSelectedOutputValue(event.target.value)}
            >
              <option value="Pa">Pa</option>
              <option value="kPa">kPa</option>
              <option value="bar">bar</option>
              <option value="psi">psi</option>
              <option value="ksi">ksi</option>
              <option value="atm">atm</option>
              <option value="exapascal">exapascal</option>
              <option value="petapascal">petapascal</option>
              <option value="gigapascal">gigapascal</option>
              <option value="attopascal">attopascal</option>
              <option value="newton">newton</option>
              <option value="square cm">square cm</option>
              <option value="millibar">millibar</option>
              <option value="microbar">microbar</option>
              <option value="tonforce/sq">tonforce/sq</option>
              <option value="inch water">inch water</option>
              <option value="foot water">foot water</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pressure;
