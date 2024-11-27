import {Banner} from '@/components/Banner';
import {ProductCard} from '@/components/ProductCard';

export function Fav() {
  const cards: number[] = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
  ];
  return (
    <>
      <div className='flex flex-col justify-center items-center'>
        <Banner heading='Favourites' subheading='Favourites' />

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 '>
          {cards.map((card, index) => (
            <ProductCard key={index} />
          ))}
        </div>
      </div>
    </>
  );
}
