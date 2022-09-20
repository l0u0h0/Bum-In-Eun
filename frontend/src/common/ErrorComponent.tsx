import React from "react";
import { FallbackProps } from "react-error-boundary";

const Error: React.FC<FallbackProps> = ({ error }) => {
  if (error === undefined) {
    return <div>UnKnown Error</div>;
  }
  return <div>{error.message}</div>;
};

export default Error;
