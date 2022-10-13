/** import */
import React from "react";
import { FallbackProps } from "react-error-boundary";

/** Error Component */
const Error: React.FC<FallbackProps> = ({ error }) => {
  if (error === undefined) {
    return <div className="App">UnKnown Error!</div>;
  }
  return <div className="App">{error.message}</div>;
};

export default Error;
