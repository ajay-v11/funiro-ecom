export function FilterBar() {
  return (
    <div className='h-12 w-full bg-[#fff3e3] px-20 flex flex-row justify-between items-center'>
      <div className='flex flex-row gap-4'>
        <img
          src='./public/filter.png'
          alt='filter icon'
          className='h-5 w-5'></img>
        <h1 className='font-medium'>Filter</h1>
      </div>
      <div className='flex flex-row gap-4'>
        <h1 className='font-normal'>Show</h1>
        <input className='w-6 rounded-md text-slate-400 ' value={13}></input>
        <h1 className='font-normal'>Sort by</h1>
        <input
          className='w-20 rounded-md text-slate-400 '
          value={"Default"}></input>
      </div>
    </div>
  )
}
