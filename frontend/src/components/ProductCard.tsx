import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

//infocus should be passed down as props from the shop/fav page
//set the default to false and display the cards normally
//when the user hovers on the card, a pop up banner/text field comes in the fav page to remove the item from the fav list
//can also make a field in shop page to add a addto cart button, directly(not necessary though)

export function ProductCard() {
  const [infocus, SetInFoucs] = useState(false);
  const [style, setStyle] = useState('size-6');

  const navigate = useNavigate();
  const handleClick = () => {
    setStyle((e) => 'size-6 fill-red-400');
  };

  if (!infocus) {
    return (
      <div className='flex flex-col h-96 w-64 bg-slate-300 m-10 '>
        <div className='relative'>
          <img src='' alt='product' className='bg-blue-200 h-72 w-64'></img>
          {/* Favorite Button */}
          <button
            className='absolute bottom-2 right-2  rounded-full '
            onClick={handleClick}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='currentColor'
              className={style}>
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z'
              />
            </svg>
          </button>
        </div>
        <h1 className='text-lg font-semibold p-2'>Product Name</h1>

        <h1 className='text-lg font-semibold p-2 text-slate-700'>$2523</h1>
      </div>
    );
  } else {
    return null;
  }
}
