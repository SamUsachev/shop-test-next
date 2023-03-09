import { Products } from '@/types/typesProducts';
import Card from '@/components/card';
import { fetcher } from '@/helpers/fetcher';
import useSWR from 'swr';

const Main = () => {

  const { data } = useSWR<Products[]>(
    'http://localhost:3004/product',
    fetcher
  );

  return (

    <div className="products-grid">
      {!data ? (
        <h1>spinner</h1>
      ) : (
        <div className="card-flex">
          {data.map((product) => (
            <Card {...product} key={product.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Main;
