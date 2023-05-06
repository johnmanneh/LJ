import React from "react";
import Button from "../button/Button";

interface TodoProps {
  todo: [];
  btnClick :(id:number)=>void;
}

function TodoList({ todo,btnClick }: TodoProps) {
  return (
    <>
      {todo.map((e, i) => (
        <ol key={i}>
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
