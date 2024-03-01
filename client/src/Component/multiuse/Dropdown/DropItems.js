import React from "react";
import Dropdown from "./Dropdown";

const options = ["Option 1", "Option 2", "Option 3"];

const App = () => {
  const handleSelect = (selectedOption) => {
    console.log(`Selected option: ${selectedOption}`);
    // You can perform additional actions here based on the selected option
  };

  return (
    <div>
      <h1>Your App</h1>
      <Dropdown options={options} onSelect={handleSelect} />
    </div>
  );
};

export default App;
