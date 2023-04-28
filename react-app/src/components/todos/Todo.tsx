import React,{useState}from "react";
import Button from "../button/Button";
import Input from "../input/Input";

function Todo() {
    const [state, setstate] = useState("");
  let todoBtn = "todo test";
  const btnClick =() =>{
      console.log(state);
  }
  const handleInputField =(event:string)=>{
      setstate(event);
  }
  return (
    <>
      <Button 
      label={todoBtn} 
      btnType={"btn btn-secondary"} 
      btnClick ={btnClick}/>
      <Input handleEvent ={handleInputField}/>
    </>
  );
}

export default Todo;
