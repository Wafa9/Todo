import React from "react";
import ListItem from "../ListItem/ListItem";

const TaskList = ({ listItems, onDeleteTask }) => {
  return (
    <div className="list">
      {listItems && listItems.length > 0 ? (
        listItems.map((task, index) => (
          <ListItem key={index} task={task} onDelete={onDeleteTask} />
        ))
      ) : (
        <p>No tasks found</p>
      )}
    </div>
  );
};

export default TaskList;