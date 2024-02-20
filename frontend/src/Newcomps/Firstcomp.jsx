import { useState } from "react";
import { Component2 } from "./Secound";

export const Component1 = (props) => {
  const [name, setName] = useState("wwdasd");
  return <Component2 name={name} />;
};
