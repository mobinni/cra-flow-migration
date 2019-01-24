import React from "react";

type BrokenFlowType = {
  someProp: number;
};

export const LegacyComponent = ({ someProp = 0 }: BrokenFlowType) => {
  return <div className="App">Broken component {someProp} </div>;
};
