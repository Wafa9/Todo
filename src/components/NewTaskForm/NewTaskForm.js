import React from "react";
import Input from "../Input/Input";
import "./NewTaskForm.css";

const NewTaskForm = ({ onAddTask }) => {
  const handleSubmit = (title, subHeading) => {
    onAddTask(title, subHeading);
  };

  return (
    <div className="new-task-form">
      <Input onSubmit={(title) => handleSubmit(title, "Subheading")} />
    </div>
  );
};

export default NewTaskForm;