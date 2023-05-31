/* eslint-disable react/prop-types */
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { RemoveCategory } from "./RemoveCategory";

export const GifGrid = ({ category }) => {
    const { images, isLoading } = useFetchGifs(category);
    console.log(category);

    return (
        <>
            <div className="title-card-g">
                <h3>{category}</h3>
                <RemoveCategory onRemoveCategory={category} />
                {isLoading && <h2>Cargando...</h2>}
            </div>
            <div className="card-grid">
                {images.map((image) => (
                    <GifItem key={image.id} {...image} />
                ))}
            </div>
        </>
    );
};
