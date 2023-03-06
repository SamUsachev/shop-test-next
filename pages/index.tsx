import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { ProductCard } from '@/types/typesProducts'
import Card from '@/components/card'
import { fetcher } from "@/helpers/fetcher";
import useSWR from "swr"

// interface ResponseTypeInterface {
//   productCard: ProductCard[]

// }

const Main = () => {
  const { data } = useSWR<ProductCard[]>
    ('http://localhost:3004/product', fetcher)
  return (
    <div className='goods-grid'>
      {!data ? (
        <h1>spinner</h1>
      ) : (
        <div className='card-flex'>
          {data.map((product) => (
            <Card {...product} key={product.id} />
          )

          )}
        </div>
      )
      }
    </div>
  )
}

// const Main: React.FC<ResponseTypeInterface> = ({ productCard }) => {
//   const { data, error } = useSWR<ProductCard[]>
//   ('http://localhost:3004/product', fetcher)

//   return (
//     <div>
//       {productCard.map((item) => (
//         <div key={item.id}>
//           <Card {...item} />
//         </div>
//       ))}
//     </div>
//   )
// }

export default Main

// export default function Home() {
//   return (
//     <>
//       <h1>Shop</h1>

//     </>
//   )
// }
