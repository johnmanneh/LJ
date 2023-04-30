import React, { useState, useEffect } from "react";
import Button from "../button/Button";
import Input from "../input/Input";
import Country from "../countries/Country";
import List from "../countries/ListCountry";

function Todo() {
  const [search, setSearch] = useState("");
  const [country, setCountry] = useState([]);
  let todoBtn = "todo test";
  const btnClick = () => {
    console.log(search);
    setSearch("");
  };
  const handleInputField = (event: string) => {
    setSearch(event);
  };
  const handleCountryRes = res => {
    
   if (res.status === 200){
     console.log(res)
    setCountry(res.data);
   }
  };

  return (
    <>
      <Button
        label={todoBtn}
        btnClass={"btn btn-primary"}
        btnClick={btnClick}
      />
      <Input handleEvent={handleInputField} value={search} />
      <Country sendToCaller={handleCountryRes} />
      <List data={country} search={search}/>
    </>
  );
}

export default Todo;
