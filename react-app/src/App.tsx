import React from "react";
import Todo from "./components/todos/Todo";

function App() {
  const Style = {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    width: "70%",
    border: "1px #0af dashed",
    borderRadius: 9,
    margin: 10,
    backgroundColor: "#efefef",
    padding: 6
  };
  return (
    <>
    <h1>Test Ideas Env</h1>
      <div style={Style}>
        <Todo />
        <div className="card" Style="display:flex;width: 18rem;">
          <div className="card-body">
            <h5 className="card-title">周一的作业</h5>
            <p className="card-text">
              我小时候有道一个饭馆在我们学校附近。它很有名，
              菜很不错，甚至便宜。从周一到周五十二点才开门，
              因为很多学生来到那里吃饭。每天我跟朋友们去过在吃午餐。 
              每早我们算算我们的钱为了知道什么买的
            </p>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
