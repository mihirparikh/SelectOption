// Application entrypoint
import React from "react";
import SelectOption from "./components/SelectOption";

const mockData = ["hero", "matrix"];

const App = () => {
  const onChangeHander = () => {
    console.log("Onchange called");
  };

  return (
    <div>
      <div>Select Option Component Tester</div>
      <SelectOption data={mockData} onChangeHandler={onChangeHander} />
    </div>
  );
};

export default App;
