import useSWR from "swr"
import { fetcher } from "@/helpers/fetcher";
import { ProductCart } from "@/types/typesProducts";

const CartCount = () => {

    const { data } = useSWR<ProductCart[]>("http://localhost:3004/cart", fetcher)

    return (

        <span>{data?.length || ''}</span>
    );
};

export default CartCount;