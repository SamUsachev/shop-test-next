import useSWR from "swr"
import { fetcher } from "@/helpers/fetcher";
import { ProductCart } from "@/types/typesProducts";

const FavouritesCount = () => {
    const { data } = useSWR<ProductCart[]>("http://localhost:3004/favourites", fetcher)
    return (
        <span>{data?.length || ''}</span>
    );
};

export default FavouritesCount;