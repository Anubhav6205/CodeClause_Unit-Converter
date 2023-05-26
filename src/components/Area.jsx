import "./css/Converter.css";
import { useState, useEffect } from "react";
const Area = () => {
  const [inputValue, setInputValue] = useState("");
  const [selectedInputValue, setSelectedInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");
  const [selectedOutputValue, setSelectedOutputValue] = useState("");

  useEffect(() => {
    handleAreaConversions();
  }, [inputValue, selectedInputValue, selectedOutputValue]);

  const handleAreaConversions = () => {
    let input = inputValue;
    if (selectedInputValue == "") {
      setSelectedInputValue("sqkm");
      setSelectedOutputValue("sqkm");
    }
    switch (selectedInputValue) {
      case "sqkm":
        input = inputValue * 1000000;
        break;
      case "sqm":
        input = inputValue * 1;
        break;
      case "sqcm":
        input = inputValue * 0.0001;
        break;
      case "sqmm":
        input = inputValue * 0.000001;
        break;
      // Add more metric area conversions
      case "ac":
        input = inputValue * 4046.86;
        break;
      case "ha":
        input = inputValue * 10000;
        break;
      case "sqmi":
        input = inputValue * 2589988.11;
        break;
      case "sqyd":
        input = inputValue * 0.836127;
        break;
      case "sqft":
        input = inputValue * 0.092903;
        break;
      case "sqin":
        input = inputValue * 0.00064516;
        break;
      // Add more imperial area conversions
      default:
        console.log("default input");
    }

    switch (selectedOutputValue) {
      case "sqkm":
        setOutputValue(input * 0.000001);
        break;
      case "sqm":
        setOutputValue(input * 1);
        break;
      case "sqcm":
        setOutputValue(input * 10000);
        break;
      case "sqmm":
        setOutputValue(input * 1000000);
        break;
      case "ac":
        setOutputValue(input * 0.000247105);
        break;
      case "ha":
        setOutputValue(input * 0.0001);
        break;
      case "sqmi":
        setOutputValue(input * 0.000000386102);
        break;
      case "sqyd":
        setOutputValue(input * 1.19599);
        break;
      case "sqft":
        setOutputValue(input * 10.7639);
        break;
      case "sqin":
        setOutputValue(input * 1550.0031);
        break;
      // Add more imperial area conversions
      default:
        console.log("default output");
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    handleAreaConversions(); // Move handleConversions call here
  };
  return (
    <div className="main">
      <div className="container">
        <h2 className="heading">Area Converter</h2>

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
                <option value="sqkm">Square Kilometer</option>
                <option value="sqm">Square Meter</option>
                <option value="sqcm">Square Centimeter</option>
                <option value="sqmm">Square Millimeter</option>
                {/* Add more metric area units */}
              </optgroup>
              <optgroup label="Imperial">
                <option value="ac">Acre</option>
                <option value="ha">Hectare</option>
                <option value="sqmi">Square Mile</option>
                <option value="sqyd">Square Yard</option>
                <option value="sqft">Square Foot</option>
                <option value="sqin">Square Inch</option>
                {/* Add more imperial area units */}
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
                <option value="sqkm">Square Kilometer</option>
                <option value="sqm">Square Meter</option>
                <option value="sqcm">Square Centimeter</option>
                <option value="sqmm">Square Millimeter</option>
                {/* Add more metric area units */}
              </optgroup>
              <optgroup label="Imperial">
                <option value="ac">Acre</option>
                <option value="ha">Hectare</option>
                <option value="sqmi">Square Mile</option>
                <option value="sqyd">Square Yard</option>
                <option value="sqft">Square Foot</option>
                <option value="sqin">Square Inch</option>
                {/* Add more imperial area units */}
              </optgroup>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Area;
