import {Banner} from '../components/Banner';
import {FilterBar} from '../components/FilterBar';
import {ProductCard} from '../components/ProductCard';

import {useProduct} from '@/customHooks/product';
import {useRecoilValue} from 'recoil';
import {productsAtom} from '@/lib/atoms/cartatoms';
import {productType} from '@appollohera/furnero';

export function Shop() {
  const loading = useProduct();
  const products = useRecoilValue(productsAtom);

  return (
    <>
      <div className='flex flex-col justify-center items-center'>
        <Banner heading='Shop' subheading='Shop' />
        <FilterBar />
        {loading ? (
          <div className='text-center'>Loading products...</div>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-20 p-10'>
            {products.map((product: productType) => (
              <ProductCard key={product.sku} {...product} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
