import React from "react";

interface inputProps {
  handleEvent: (event: string) => void;
  value : string;
}
function Input({ handleEvent,value }: inputProps) {
  return (
    <>
      <input value ={value} onChange={e => handleEvent(e.target.value)} />
    </>
  );
}

export default Input;
