import React, { useState, useEffect } from "react";
import Button from "../button/Button";
import Input from "../input/Input";
import Country from "../countries/Country";
import List from "../countries/ListCountry";
import Todos from "../todos/TodoList";

function Todo() {
  const [todo, setTodo] = useState([]);
  const [todoInput, setTodoInput] = useState("");

  const [search, setSearch] = useState("");
  const [country, setCountry] = useState([]);
  let todoBtn = "search ";
  const handleInputField = (event: string) => {
    setSearch(event);
    console.log(search);
  };
  const btnClick = () => {};

  const handleCountryRes = res => {
    if (res.status === 200) {
      console.log(res);
      setCountry(res.data);
    }
  };

  const AddTodoItem =()=>{
    setTodo([...todo,todoInput]);
    setTodoInput('');
  }
  const removeTodoItem =(id:number)=>{
   const rmv =  todo.filter((e,i)=> i !== id)
    console.log(rmv)
    setTodo(rmv);
  }
  const handleTodoInput =(e:string)=>{
    setTodoInput(e);
  }

  return (
    <>
      <Input handleEvent={handleTodoInput} value={todoInput} />
      <Button
            label="ADD"
            btnClass={"btn btn-primary"}
            btnClick={AddTodoItem}
          />  
     <Todos todo ={todo} btnClick={removeTodoItem}/>
<br/>
      <Input handleEvent={handleInputField} value={search} />
      <Button
        label={todoBtn}
        btnClass={"btn btn-primary"}
        btnClick={btnClick}
      />
      <Country sendToCaller={handleCountryRes} />
      <List data={country} search={search} />
    </>
  );
}

export default Todo;
