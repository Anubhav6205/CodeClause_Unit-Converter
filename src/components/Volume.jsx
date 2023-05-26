import "./css/Converter.css";
import { useState, useEffect } from "react";
const Volume = () => {
  const [inputValue, setInputValue] = useState("");
  const [selectedInputValue, setSelectedInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");
  const [selectedOutputValue, setSelectedOutputValue] = useState("");

  useState("length");

  useEffect(() => {
    handleVolumeConversions();
  }, [inputValue, selectedInputValue, selectedOutputValue]);

  const handleVolumeConversions = () => {
    let input = inputValue;
    console.log(selectedInputValue);
    if (selectedInputValue == "") {
      setSelectedInputValue("cuM");
      setSelectedOutputValue("cuM");
    }

    // Convert input to cubic meters (base unit)
    switch (selectedInputValue) {
      case "cuM":
        input = inputValue * 1;
        break;
      case "cuL":
        input = inputValue * 0.001;
        break;
      case "ml":
        input = inputValue * 0.000001;
        break;
      case "cucm":
        input = inputValue * 0.000001;
        break;
      case "cuft":
        input = inputValue * 0.0283168;
        break;
      case "cuyd":
        input = inputValue * 0.764555;
        break;
      case "cuin":
        input = inputValue * 0.0000163871;
        break;
      case "gallon":
        input = inputValue * 0.00378541;
        break;
      case "quart":
        input = inputValue * 0.000946353;
        break;
      case "pint":
        input = inputValue * 0.000473176;
        break;
      // Add more imperial volume units here
      default:
        console.log("default input");
    }

    // Convert input from cubic meters to the selected output unit
    switch (selectedOutputValue) {
      case "cuM":
        setOutputValue(input * 1);
        break;
      case "cuL":
        setOutputValue(input * 1000);
        break;
      case "ml":
        setOutputValue(input * 1000000);
        break;
      case "cucm":
        setOutputValue(input * 1000000);
        break;
      case "cuft":
        setOutputValue(input * 35.3147);
        break;
      case "cuyd":
        setOutputValue(input * 1.30795);
        break;
      case "cuin":
        setOutputValue(input * 61023.7);
        break;
      case "gallon":
        setOutputValue(input * 264.172);
        break;
      case "quart":
        setOutputValue(input * 1056.69);
        break;
      case "pint":
        setOutputValue(input * 2113.38);
        break;
      // Add more imperial volume units here
      default:
        console.log("default output");
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    handleVolumeConversions(); // Move handleConversions call here
  };
  return (
    <div className="main">
      <div className="container">
        <h2 className="heading">Volume Converter</h2>

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
              {/* Volume options */}
              <optgroup label="Metric">
                <option value="cuM">Cubic Meter</option>
                <option value="cuL">Cubic Liter</option>
                <option value="ml">Milliliter</option>
                <option value="cucm">Cubic Centimeter</option>
              </optgroup>
              <optgroup label="Imperial">
                <option value="cuft">Cubic Foot</option>
                <option value="cuyd">Cubic Yard</option>
                <option value="cuin">Cubic Inch</option>
                <option value="gallon">Gallon</option>
                <option value="quart">Quart</option>
                <option value="pint">Pint</option>
              </optgroup>
            </select>
          </div>
          <div className="output">
            <input type="number" value={outputValue} />
            <select
              value={selectedOutputValue}
              onChange={(event) => setSelectedOutputValue(event.target.value)}
            >
              {/* Volume options */}
              <optgroup label="Metric">
                <option value="cuM">Cubic Meter</option>
                <option value="cuL">Cubic Liter</option>
                <option value="ml">Milliliter</option>
                <option value="cucm">Cubic Centimeter</option>
              </optgroup>
              <optgroup label="Imperial">
                <option value="cuft">Cubic Foot</option>
                <option value="cuyd">Cubic Yard</option>
                <option value="cuin">Cubic Inch</option>
                <option value="gallon">Gallon</option>
                <option value="quart">Quart</option>
                <option value="pint">Pint</option>
              </optgroup>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Volume;
