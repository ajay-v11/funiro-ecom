export function ProductCard() {
  return (
    <div className='flex flex-col h-96 w-64 bg-slate-300 m-10'>
      <img src='' alt='product' className='bg-blue-200 h-72 w-64'></img>
      <h1 className='text-lg font-semibold p-2'>Product Name</h1>
      <h2 className='font-light pl-2'>description of the product</h2>
      <h1 className='text-lg font-semibold p-2'>$2523</h1>
    </div>
  )
}
