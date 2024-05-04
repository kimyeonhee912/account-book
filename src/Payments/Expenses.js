import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = (props) => {
  return (
    <div className="list-box">
      {props.items.map((item) => (
        <ExpenseItem name={item.name} />
      ))}
    </div>
  );
};

export default Expenses;
