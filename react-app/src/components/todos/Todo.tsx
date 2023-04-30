import React, { useState, useEffect } from "react";
import Button from "../button/Button";
import Input from "../input/Input";
import Country from "../countries/Country";
import List from "../countries/ListCountry";

function Todo() {
  const [search, setSearch] = useState("");
  const [country, setCountry] = useState([]);
  let todoBtn = "search ";
  const handleInputField = (event: string) => {
    setSearch(event)
    console.log(search)
  };
  const btnClick = () => {
    
  };
  
  const handleCountryRes = res => {
    
   if (res.status === 200){
     console.log(res)
    setCountry(res.data);
   }
  };

  return (
    <>
      
      <Input handleEvent={handleInputField} value={search} />
      <Button
        label={todoBtn}
        btnClass={"btn btn-primary"}
        btnClick={btnClick}
      />
      <Country sendToCaller={handleCountryRes} />
      <List data={country} search={search}/>
    </>
  );
}

export default Todo;
