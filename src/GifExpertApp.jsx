import { useState } from "react";
import { AddCategory, GifGrid } from "./components";
import { RemoveCategory } from "./components/RemoveCategory";
import { RemoveAllCategories } from "./components/RemoveAllCategories";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState([]);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories((cat) => [newCategory, ...cat]);
    };

    return (
        <>
            <h1>Search your Gifs</h1>
            <div className="search">
                <AddCategory onNewCategory={(event) => onAddCategory(event)} />
                <RemoveCategory />
                <RemoveAllCategories />
            </div>
            {categories.map((category) => (
                <GifGrid key={category} category={category} />
            ))}
        </>
    );
};
