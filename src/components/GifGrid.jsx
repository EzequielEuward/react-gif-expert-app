
import { GiftCard } from './GiftCard'
import { useFetchGifs } from './useFetchGifs'


export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);

    return (
        <div>
            <>
                <h2>{category}</h2>
                {
                    isLoading ? (
                    <div class="loader">
                        <div data-glitch="Loading..." class="glitch">Loading...</div>
                    </div>)
                        : null
                }

                <div className='card-grid'>
                    {

                        images.map((images) => (
                            <GiftCard key={images.id} {...images} />
                        ))
                    }
                </div>
            </>
        </div>
    )
}

export default GifGrid
