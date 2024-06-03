export const getStoredListItems = () => {
    const storedItems = localStorage.getItem("listItems");
    if (storedItems) {
      return JSON.parse(storedItems);
    }
    return null;
  };

  export const storeListItems = (items) => {
    const updatedItems = Array.isArray(items) ? items : [];
    localStorage.setItem("listItems", JSON.stringify(updatedItems));
  };