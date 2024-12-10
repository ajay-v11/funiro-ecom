import {BACKEND_URL} from '@/config';
import axios from 'axios';
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

function Product() {
  const params = useParams();

  const rawSku = params['*']; // Access wildcard parameter
  console.log('Raw SKU:', rawSku);

  const jwt = localStorage.getItem('token');

  const [details, setDetails] = useState([]);

  useEffect(() => {
    async function getDetails() {
      const response = await axios.get(
        `${BACKEND_URL}product/details/${rawSku}`,
        {
          headers: {Authorization: jwt},
        }
      );

      setDetails(response.data);
    }

    getDetails();
  }, []);
  console.log(details);

  return (
    <div className='product-page pt-20 '>
      {/* Breadcrumbs */}
      <div className='breadcrumbs bg-[#f9f1e7] py-6 px-20 text-sm'>
        <span className='text-slate-500 pr-3'>Home </span> &gt;{' '}
        <span className='text-slate-500 pr-3 pl-3'>Shop</span> &gt;{' '}
        <span className='font-bold'>{details.name}</span>
      </div>

      {/* Main Content */}
      <div className='main-content container mx-auto grid grid-cols-12 gap-6 py-8 px-20'>
        {/* Left Column - Image Gallery */}
        <div className='image-gallery col-span-5 bg-gray-50 rounded-md p-4'>
          <div className='main-image bg-purple-800 h-96 rounded-md object-fill'>
            <img src={details.imageUrl} alt='cant load image'></img>
          </div>
          <div className='thumbnails mt-4 flex gap-2'>
            <div className='thumbnail bg-gray-200 w-16 h-16 rounded-md'></div>
            <div className='thumbnail bg-gray-200 w-16 h-16 rounded-md'></div>
            <div className='thumbnail bg-gray-200 w-16 h-16 rounded-md'></div>
          </div>
        </div>

        {/* Right Column - Product Details */}
        <div className='product-details col-span-7'>
          {/* Product Title */}
          <h1 className='text-2xl font-bold mb-2'>{details.name}</h1>
          <p className='text-xl text-gray-500 mb-4'>{details.price}</p>

          {/* Ratings */}
          <div className='ratings mb-4'>
            <span className='text-yellow-400'>★★★★☆</span>
            <span className='ml-2 text-gray-500'>(5 Customer Reviews)</span>
          </div>

          {/* Short Description */}
          <p className='text-gray-600 mb-4'>
            Setting the bar as one of the loudest speakers in its class, the
            Kilburn is a compact, stout-hearted hero with a well-balanced
            audio...
          </p>

          {/* Options */}
          <div className='options mb-4'>
            <div className='size mb-2'>
              <p className='font-semibold'>Size:</p>
              <button className='px-3 py-1 border rounded-md mx-1'>L</button>
              <button className='px-3 py-1 border rounded-md mx-1'>XL</button>
              <button className='px-3 py-1 border rounded-md mx-1'>XS</button>
            </div>
            <div className='color mb-2'>
              <p className='font-semibold'>Color:</p>
              <div className='colors flex gap-2'>
                <div className='w-6 h-6 rounded-full bg-purple-500'></div>
                <div className='w-6 h-6 rounded-full bg-black'></div>
                <div className='w-6 h-6 rounded-full bg-gold-500'></div>
              </div>
            </div>
          </div>

          {/* Quantity Selector and Buttons */}
          <div className='actions flex items-center gap-4'>
            <div className='quantity flex items-center border rounded-md'>
              <button className='px-2 py-1'>-</button>
              <input
                type='number'
                min='1'
                defaultValue='1'
                className='w-12 text-center border-l border-r'
              />
              <button className='px-2 py-1'>+</button>
            </div>
            <button className='px-6 py-2 bg-black text-white rounded-md'>
              Add To Cart
            </button>
            <button className='px-6 py-2 border rounded-md'>+ Compare</button>
          </div>

          {/* SKU, Category, Tags */}
          <div className='product-meta mt-4 text-sm text-gray-500'>
            <p>{details.sku}</p>
            <p>Category: Sofas</p>
            <p>Tags: Sofa, Chair, Home, Shop</p>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className='description container mx-auto border-t pt-8 px-20'>
        <div className='tabs flex gap-4'>
          <button className='px-4 py-2 border-b-2 font-bold border-black'>
            Description
          </button>
          <button className='px-4 py-2 border-b-2'>
            Additional Information
          </button>
          <button className='px-4 py-2 border-b-2'>Reviews [5]</button>
        </div>
        <div className='content mt-4 text-gray-600'>
          <p>{details.details}</p>
        </div>
      </div>
    </div>
  );
}

export default Product;
