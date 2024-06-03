import React from "react";
import "./ListItem.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbtack, faTrash ,faCalendarAlt} from '@fortawesome/free-solid-svg-icons';

const ListItem = ({ task, onDelete }) => {
  const handleDeleteClick = () => {
    console.log("Delete task:", task);
    onDelete(task);
  };
  const formattedDate =  new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) ;

  return (
    <div className="list-item">
      <FontAwesomeIcon icon={faThumbtack} className="icon" />
      <input
     type="checkbox"
     checked={task.done} 
     onChange={() => {
       
     }}
   />
      <h3>{task.title}</h3>
    <button className="delete-button" onClick={handleDeleteClick}>
      <FontAwesomeIcon icon={faTrash} id= "date-icon"/>
    </button>
    <div className="date">
   <FontAwesomeIcon icon={faCalendarAlt} /> {formattedDate}
 </div>
  </div>
);
};

export default ListItem;