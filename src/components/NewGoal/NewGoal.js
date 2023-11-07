import React, { useState } from "react";
import "./NewGoal.css";

const NewGoal = ({ onAddGoal }) => {
   
  const [enteredText, setEnteredText] = useState('');

  const textChangeHandler = (event) => {
    setEnteredText(event.target.value);
  };

  const addGoalHandler = (event) => {
    event.preventDefault();
    if(enteredText == ''){
        return;
    }
    const newGoal = {
      id: Math.random().toString(),
      text: enteredText,
    };
    setEnteredText('');
    onAddGoal(newGoal);
  };

  return (
    <form className="form-container" onSubmit={addGoalHandler}>
      <input type="text" value={enteredText} onChange={textChangeHandler}></input>
      <button type="submit">Add Goal</button>
    </form>
  );
};

export default NewGoal;
