import "./css/Converter.css";
import { useState, useEffect } from "react";
const Length = () => {
  const [inputValue, setInputValue] = useState("");
  const [selectedInputValue, setSelectedInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");
  const [selectedOutputValue, setSelectedOutputValue] = useState("");

  useEffect(() => {
    handleLengthConversions();
  }, [
    inputValue,
    selectedInputValue,
    selectedOutputValue,
  
  ]);

  const handleLengthConversions = () => {
    let input = inputValue;
    console.log(selectedInputValue);
    if (selectedInputValue == "") {
      setSelectedInputValue("km");
      setSelectedOutputValue("km");
    }
    switch (selectedInputValue) {
      case "km":
        input = inputValue * 1000;
        break;
      case "m":
        input = inputValue * 1;
        break;
      case "cm":
        input = inputValue * 0.01;
        break;
      case "mm":
        input = inputValue * 0.001;
        break;
      case "mim":
        input = inputValue * 0.000001;
        break;
      case "nm":
        input = inputValue * 0.000000001;
        break;
      case "me":
        input = inputValue * 1609.34;
        break;
      case "yd":
        input = inputValue * 0.9144;
        break;
      case "ft":
        input = inputValue * 0.3048;
        break;
      case "in":
        input = inputValue * 0.0254;
        break;
      default:
        console.log("default input");
    }

    switch (selectedOutputValue) {
      case "km":
        setOutputValue(input * 0.001);
        break;
      case "m":
        setOutputValue(input * 1);
        break;
      case "cm":
        setOutputValue(input * 100);
        break;
      case "mm":
        setOutputValue(input * 1000);
        break;
      case "mim":
        setOutputValue(input * 1000000);
        break;
      case "nm":
        setOutputValue(input * 1000000000);
        break;
      case "me":
        setOutputValue(input * 0.000621371);
        break;
      case "yd":
        setOutputValue(input * 1.09361);
        break;
      case "ft":
        setOutputValue(input * 3.28084);
        break;
      case "in":
        setOutputValue(input * 39.3701);
        break;
      default:
        console.log("default output");
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    handleLengthConversions(); // Move handleConversions call here
  };
  return (
    <div className="main">
      <div className="container">
        <h2 className="heading">Length Converter</h2>

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
              <optgroup label="Metric">
                <option value="km">Kilometer</option>
                <option value="m">Meter</option>
                <option value="cm">Centimeter</option>
                <option value="mm">Millimeter</option>
                <option value="mim">Micrometre</option>
                <option value="nm">Nanometer</option>
              </optgroup>
              <optgroup label="Imperial">
                <option value="me">Mile</option>
                <option value="yd">Yard</option>
                <option value="ft">Foot</option>
                <option value="in">Inch</option>
              </optgroup>
            </select>
          </div>
          <div className="output">
            <input type="number" value={outputValue} />
            <select
              value={selectedOutputValue}
              onChange={(event) => setSelectedOutputValue(event.target.value)}
            >
              <optgroup label="Metric">
                <option value="km">Kilometer</option>
                <option value="m">Meter</option>
                <option value="cm">Centimeter</option>
                <option value="mm">Millimeter</option>
                <option value="mim">Micrometre</option>
                <option value="nm">Nanometer</option>
              </optgroup>
              <optgroup label="Imperial">
                <option value="me">Mile</option>
                <option value="yd">Yard</option>
                <option value="ft">Foot</option>
                <option value="in">Inch</option>
              </optgroup>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Length;
