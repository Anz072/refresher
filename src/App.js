import "./App.css";
import React, { useState } from "react";
import GoalList from "./components/GoalList/GoalList";
import NewGoal from "./components/NewGoal/NewGoal";

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { id: "cg1", text: "Finish the Course" },
    { id: "cg2", text: "Learn more" },
    { id: "cg3", text: "Get job" },
  ]);
 
  const newCourseGoalHandler = (newGoal) => {
    setCourseGoals((prevCourseGoals) => prevCourseGoals.concat(newGoal));
  };

  return (
    <div>
      <h1>Course Goals</h1>
      <NewGoal onAddGoal={newCourseGoalHandler} />
      <GoalList goals={courseGoals} />
    </div>
  );
};

export default App;
