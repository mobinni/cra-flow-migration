import React from "react";

type BrokenFlowType = {
  someProp: 0
};

export const LegacyComponent = ({ someProp = 0 }: BrokenFlowType) => {
  return <div className="App">Broken component {someProp} </div>;
};
