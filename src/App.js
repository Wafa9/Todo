import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import Header from "./components/Header/Header";
import NewTaskForm from "./components/NewTaskForm/NewTaskForm";
import TaskList from "./components/TaskList/TaskList";
import SearchBar from "./components/SearchBar/SearchBar";
import "./css/App.css";
import { getStoredListItems, storeListItems } from "./hooks/useLocalStorage";

const App = () => {
  const [listItems, setListItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    const storedListItems = getStoredListItems();
    if (storedListItems) {
      setListItems(storedListItems);
      setFilteredItems(storedListItems); 
    }
  }, []);
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const handleAddTask = (title) => {
    const newTask = { title: title };
    const newListItems = [...listItems, newTask];
    setListItems(newListItems);
    setFilteredItems(newListItems);
    storeListItems(newListItems);
    toast.success("Task added successfully!");
  };

  const handleDeleteTask = (taskToDelete) => {
    const updatedListItems = listItems.filter((task) => task !== taskToDelete);
    setListItems(updatedListItems);
    setFilteredItems(updatedListItems);
    storeListItems(updatedListItems);
    toast.error("Task deleted successfully!");
  };

  const handleSearch = (filtered) => {
    setFilteredItems(filtered);
  };
  
  return (
    <div className="app">
          <div className={`app ${darkMode ? "dark-mode" : "light-mode"}`}>
      <Header currentDate={new Date()} onToggleTheme={toggleTheme} />
    </div>
      <NewTaskForm onAddTask={handleAddTask} />
      <SearchBar listItems={listItems} onSearch={handleSearch} />
      <TaskList listItems={filteredItems} onDeleteTask={handleDeleteTask} />
    </div>
  );
};

export default App;