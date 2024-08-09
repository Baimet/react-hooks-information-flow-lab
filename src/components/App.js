import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header";
import Filter from "./Filter";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const appClass = isDarkMode ? "App dark" : "App light";

  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredItems = itemData.filter((item) => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
  });

  return (
    <div className={appClass}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeToggle} />
      <Filter
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <ShoppingList items={filteredItems} />
    </div>
  );
}

export default App;
