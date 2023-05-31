export const RemoveCategory = (setCategories) => {
    const onRemoveCategory = (delCategory) => {
        setCategories((existingCategory) => {
            return existingCategory.filter((item) => item !== delCategory);
        });
    };

    return <button onClick={onRemoveCategory}>Remove this search</button>;
};
