import React from "react";
import Button from "../button/Button";

interface TodoProps {
  todo: [];
  btnClick :()=>void;
}

function TodoList({ todo,btnClick }: TodoProps) {
  return (
    <>
      {todo.map((e, i) => (
        <ol key={i}>
          {e}
          
          <Button
            label="Delete"
            btnClass={"btn btn-danger"}
            btnClick={btnClick}
          />
        </ol>
      ))}
    </>
  );
}

export default TodoList;
