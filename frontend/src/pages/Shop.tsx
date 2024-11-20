import {Banner} from "../components/Banner"
import {FilterBar} from "../components/FilterBar"
import {ProductCard} from "../components/ProductCard"

const cards: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]

export function Shop() {
  return (
    <div>
      <div className='flex flex-col justify-center items-center'>
        <Banner heading='Shop' subheading='Shop' />
        <FilterBar />
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 '>
          {cards.map((card, index) => (
            <ProductCard key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}
