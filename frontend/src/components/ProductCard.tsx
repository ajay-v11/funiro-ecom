export function ProductCard() {
  return (
    <div className='flex flex-col h-96 w-64 bg-slate-300 m-10'>
      <div className='relative'>
        <img src='' alt='product' className='bg-blue-200 h-72 w-64'></img>
        {/* Favorite Button */}
        <button className='absolute bottom-2 right-2  rounded-full '>❤️</button>
      </div>
      <h1 className='text-lg font-semibold p-2'>Product Name</h1>

      <h1 className='text-lg font-semibold p-2 text-slate-700'>$2523</h1>
    </div>
  )
}
