import React from "react";
import Button from "../button/Button";

interface TodoProps {
  todo: [];
  btnClick :(id:number)=>void;
}

function TodoList({ todo,btnClick }: TodoProps) {
  const todoStyle = {
    display: 'flex',
    justifyContent: 'center',
    width :'30%',
    border: "1px #0af dashed",
    borderRadius: 9,
    margin: 10,
    backgroundColor: "#efefef",
    padding: 6
  };
  return (
    <>
      {todo.map((e, i) => (
        <ol key={i} style={todoStyle}>
          {e}
          <span></span>
          <Button
            label="Delete"
            btnClass={"btn btn-danger"}
            btnClick={()=>btnClick(i)}
          />
        </ol>
      ))}
    </>
  );
}

export default TodoList;
