import React, { useState, useEffect } from "react";
import Button from "../button/Button";
import Input from "../input/Input";
import axios from "axios";

function Todo() {
  const [state, setstate] = useState("");
  let todoBtn = "todo test";
  const btnClick = () => {
    console.log(state);
    setstate("");
  };
  const handleInputField = (event: string) => {
    setstate(event);
  };

  const fetchCountries = async () => {
    const {data,status} = await axios.get("https://restcountries.com/v3.1/all");
    status === 200 && console.log(data);
  };

  useEffect(() => {
    fetchCountries();
  }, []);
  return (
    <>
      <Button
        label={todoBtn}
        btnClass={"btn btn-primary"}
        btnClick={btnClick}
      />
      <Input handleEvent={handleInputField} value={state} />
    </>
  );
}

export default Todo;
