interface cartItems {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export const CartTable = () => {
  const cartItems = [
    {
      id: 1,
      name: 'Asgaard Sofa',
      price: 250000,
      quantity: 1,
      image: 'placeholder.png', // Replace with actual image URL
    },
    {
      id: 1,
      name: 'Asgaard Sofa',
      price: 250000,
      quantity: 1,
      image: 'placeholder.png', // Replace with actual image URL
    },
    {
      id: 1,
      name: 'Asgaard Sofa',
      price: 250000,
      quantity: 1,
      image: 'placeholder.png', // Replace with actual image URL
    },
    {
      id: 1,
      name: 'Asgaard Sofa',
      price: 250000,
      quantity: 1,
      image: 'placeholder.png', // Replace with actual image URL
    },
    {
      id: 1,
      name: 'Asgaard Sofa',
      price: 250000,
      quantity: 1,
      image: 'placeholder.png', // Replace with actual image URL
    },
    {
      id: 1,
      name: 'Asgaard Sofa',
      price: 250000,
      quantity: 1,
      image: 'placeholder.png', // Replace with actual image URL
    },
    {
      id: 1,
      name: 'Asgaard Sofa',
      price: 250000,
      quantity: 1,
      image: 'placeholder.png', // Replace with actual image URL
    },
    {
      id: 1,
      name: 'Asgaard Sofa',
      price: 250000,
      quantity: 1,
      image: 'placeholder.png', // Replace with actual image URL
    },
  ];

  const calculateSubtotal = (items) =>
    items.reduce((total, item) => total + item.price * item.quantity, 0);

  const subtotal = calculateSubtotal(cartItems);

  return (
    <div className='min-h-screen bg-gray-50 p-6'>
      <div className='max-w-5xl mx-auto bg-white rounded-lg shadow-md p-2'>
        {/* Table */}
        <div className='overflow-x-auto'>
          <table className='w-full text-left border-collapse rounded-lg'>
            <thead className='bg-[#f9f1e7] rounded-lg'>
              <tr>
                <th className='p-4 font-medium text-gray-700'>Product</th>
                <th className='p-4 font-medium text-gray-700'>Price</th>
                <th className='p-4 font-medium text-gray-700'>Quantity</th>
                <th className='p-4 font-medium text-gray-700'>Subtotal</th>
                <th className='p-4 font-medium text-gray-700'>Remove</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} className='border-t'>
                  <td className='p-4 flex items-center'>
                    <img
                      src={item.image}
                      alt={item.name}
                      className='w-28 h-28 rounded-md mr-4 bg-gray-200'
                    />
                    <span>{item.name}</span>
                  </td>
                  <td className='p-4'>Rs. {item.price.toLocaleString()}</td>
                  <td className='p-4'>
                    <input
                      type='number'
                      min='1'
                      value={item.quantity}
                      className='w-16 border border-gray-300 rounded px-2 py-1'
                    />
                  </td>
                  <td className='p-4'>
                    Rs. {(item.price * item.quantity).toLocaleString()}
                  </td>
                  <td className='p-4 text-red-500 cursor-pointer hover:text-red-700'>
                    🗑
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
