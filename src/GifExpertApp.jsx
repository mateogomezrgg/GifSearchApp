import { useState } from "react";
import { AddCategory, GifGrid } from "./components";
import { RemoveAllCategories } from "./components/RemoveAllCategories";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories((cat) => [newCategory, ...cat]);
  };

  const onRemoveCategory = (categoryToRemove) => {
    const newCategories = categories.filter(
      (category) => category !== categoryToRemove
    );
    setCategories(newCategories);
  };

  const onRemoveAllCategories = (event) => {
    event.preventDefault();
    setCategories([]);
  };

  return (
    <>
      <h1>Search your Gifs</h1>
      <div className="search">
        <AddCategory onNewCategory={(event) => onAddCategory(event)} />
        <RemoveAllCategories onRemoveAllCategories={onRemoveAllCategories} />
      </div>
      {categories.map((category) => (
        <GifGrid
          key={category}
          category={category}
          onDeleteCategory={(event) => onRemoveCategory(event)}
        />
      ))}
    </>
  );
};
