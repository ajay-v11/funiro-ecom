import {productType} from '@appollohera/furnero';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

//infocus should be passed down as props from the shop/fav page
//set the default to false and display the cards normally
//when the user hovers on the card, a pop up banner/text field comes in the fav page to remove the item from the fav list
//can also make a field in shop page to add a addto cart button, directly(not necessary though)

export function ProductCard({name, price, imageUrl, sku}: productType) {
  const [infocus] = useState(false);
  const [fillIcon, setFillIcon] = useState(false);
  const [style, setStyle] = useState('size-6');

  const navigate = useNavigate();

  const handleDiv = () => {
    navigate(`/product/${sku}`);
  };
  const handleClick = (e: React.MouseEvent<HTMLElement>): void => {
    e.stopPropagation();
    if (fillIcon) {
      setStyle(() => 'size-6');
      setFillIcon(false);
    } else {
      setStyle(() => 'size-6 fill-red-400');
      setFillIcon(true);
    }
  };

  if (!infocus) {
    return (
      <div
        onClick={handleDiv}
        className='flex flex-col h-[420px] w-72 bg-gray-100 justify-between  relative rounded-lg'>
        <div className='relative'>
          {/* Image */}
          <img src={imageUrl} alt='product' className='bg-blue-200 h-72 w-72' />
          {/* Favorite Button */}
          <button
            className='absolute bottom-2 right-2 rounded-full  p-1 shadow-lg'
            onClick={handleClick}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.7'
              stroke='currentColor'
              className={style}>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z'
              />
            </svg>
          </button>
        </div>
        {/* Title */}
        <h1
          className='text-lg text-slate-700 font-normal line-clamp-2  px-4'
          title={name} // Tooltip for overflowed text
        >
          {name}
        </h1>
        {/* Price */}
        <h1 className='text-lg font-semibold text-slate-700 py-4 px-4'>
          {price}
        </h1>
      </div>
    );
  } else {
    return null;
  }
}
