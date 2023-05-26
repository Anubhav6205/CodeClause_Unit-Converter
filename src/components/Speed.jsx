import React, { useState, useEffect } from "react";

const Speed = () => {
  const [inputValue, setInputValue] = useState("");
  const [selectedInputValue, setSelectedInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");
  const [selectedOutputValue, setSelectedOutputValue] = useState("");

  useEffect(() => {
    handleConversions();
  }, [inputValue, selectedInputValue, selectedOutputValue]);

  const handleConversions = () => {
    let input = inputValue;

    if (selectedInputValue === "") {
      setSelectedInputValue("m/s");
      setSelectedOutputValue("m/s");
    }

    switch (selectedInputValue) {
      case "m/s":
        input = inputValue;
        break;
      case "km/h":
        input = inputValue / 3.6;
        break;
      case "mi/h":
        input = inputValue / 2.237;
        break;
      case "m/min":
        input = inputValue / 60;
        break;
      case "km/s":
        input = inputValue * 1000;
        break;
      case "cm/h":
        input = inputValue / 0.036;
        break;
      case "cm/min":
        input = inputValue / 0.0006;
        break;
      case "cm/s":
        input = inputValue / 0.01;
        break;
      case "mm/h":
        input = inputValue / 0.000036;
        break;
      case "mm/min":
        input = inputValue / 0.000001;
        break;
      case "mm/sec":
        input = inputValue / 0.001;
        break;
      case "foot/hour":
        input = inputValue / 0.000084;
        break;
      case "foot/min":
        input = inputValue / 0.001389;
        break;
      case "foot/sec":
        input = inputValue / 0.3048;
        break;
      case "knot":
        input = inputValue / 1.944;
        break;
      case "cosmicvelocity":
        input = inputValue / 299792458;
        break;
      case "earthvelocity":
        input = inputValue / 29780;
        break;


      default:
        console.log("default input");
    }

    switch (selectedOutputValue) {
      case "m/s":
        setOutputValue(Number(input).toFixed(2));
        break;
      case "km/h":
        setOutputValue((input * 3.6).toFixed(2));
        break;
      case "mi/h":
        setOutputValue((input * 2.237).toFixed(2));
        break;
      case "m/min":
        setOutputValue((input * 60).toFixed(2));
        break;
      case "km/s":
        setOutputValue((input / 1000).toFixed(2));
        break;
      case "cm/h":
        setOutputValue((input * 0.036).toFixed(2));
        break;
      case "cm/min":
        setOutputValue((input * 0.0006).toFixed(2));
        break;
      case "cm/s":
        setOutputValue((input * 0.01).toFixed(2));
        break;
      case "mm/h":
        setOutputValue((input * 0.000036).toFixed(2));
        break;
      case "mm/min":
        setOutputValue((input * 0.000001).toFixed(2));
        break;
      case "mm/sec":
        setOutputValue((input * 0.001).toFixed(2));
        break;
      case "foot/hour":
        setOutputValue((input * 0.000084).toFixed(2));
        break;
      case "foot/min":
        setOutputValue((input * 0.001389).toFixed(2));
        break;
      case "foot/sec":
        setOutputValue((input * 0.3048).toFixed(2));
        break;
      case "knot":
        setOutputValue((input * 1.944).toFixed(2));
        break;
      case "cosmicvelocity":
        setOutputValue((input * 299792458).toFixed(2));
        break;
      case "earthvelocity":
        setOutputValue((input * 29780).toFixed(2));
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
        <h2 className="heading">Speed Converter</h2>

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
              <option value="m/s">m/s</option>
              <option value="km/h">km/h</option>
              <option value="mi/h">mi/h</option>
              <option value="m/min">m/min</option>
              <option value="km/s">km/s</option>
              <option value="cm/h">cm/h</option>
              <option value="cm/min">cm/min</option>
              <option value="cm/s">cm/s</option>
              <option value="mm/h">mm/h</option>
              <option value="mm/min">mm/min</option>
              <option value="mm/sec">mm/sec</option>
              <option value="foot/hour">foot/hour</option>
              <option value="foot/min">foot/min</option>
              <option value="foot/sec">foot/sec</option>
              <option value="knot">knot</option>
              <option value="cosmicvelocity">cosmicvelocity</option>
              <option value="earthvelocity">earthvelocity</option>
     
            </select>
          </div>
          <div className="output">
            <input type="number" value={outputValue} readOnly />
            <select
              value={selectedOutputValue}
              onChange={(event) => setSelectedOutputValue(event.target.value)}
            >
              <option value="m/s">m/s</option>
              <option value="km/h">km/h</option>
              <option value="mi/h">mi/h</option>
              <option value="m/min">m/min</option>
              <option value="km/s">km/s</option>
              <option value="cm/h">cm/h</option>
              <option value="cm/min">cm/min</option>
              <option value="cm/s">cm/s</option>
              <option value="mm/h">mm/h</option>
              <option value="mm/min">mm/min</option>
              <option value="mm/sec">mm/sec</option>
              <option value="foot/hour">foot/hour</option>
              <option value="foot/min">foot/min</option>
              <option value="foot/sec">foot/sec</option>
              <option value="knot">knot</option>
              <option value="cosmicvelocity">Cosmic Velocity</option>
              <option value="earthvelocity">Earth Velocity</option>
        
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speed;
