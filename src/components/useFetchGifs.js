import { useEffect, useState } from "react";
import { getGifts } from "./helper/getGifs";

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([])
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        getGifts(category)
            .then(newImages => setImages(newImages));
        setLoading(false);

    }, []);


    return {
        images: images,
        isLoading: isLoading,
    }
}

export default useFetchGifs
