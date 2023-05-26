import React, { useState, useEffect } from "react";

const LogConverter = () => {
  const [value, setValue] = useState("");
  const [base, setBase] = useState("");
  const [output, setOutput] = useState("");

  useEffect(() => {
    handleConversion();
  }, [value, base]);

  const handleConversion = () => {
    if (value === "" || base === "") {
      setOutput("0");
      return;
    }

    const result = Math.log(value) / Math.log(base);
    setOutput(result.toFixed(2));
  };

  const handleValueChange = (event) => {
    setValue(event.target.value);
  };

  const handleBaseChange = (event) => {
    setBase(event.target.value);
  };

  return (
    <div className="main">
      <div className="container">
        <h2 className="heading">Log Converter</h2>

        <div className="calculations">
          <div className="input">
            <input
              type="number"
              placeholder="Enter value"
              value={value}
              onChange={handleValueChange}
            />
            <input
              type="number"
              placeholder="Enter base"
              value={base}
              onChange={handleBaseChange}
            />
          </div>
          <div className="output">
            <input type="text" value={output} readOnly />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogConverter;
