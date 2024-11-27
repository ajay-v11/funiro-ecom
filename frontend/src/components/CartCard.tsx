export function CartCard() {
  return (
    <div className='flex-grow h-96 my-5   bg-[#f9f1e7] border rounded-lg shadow-lg sticky top-24'>
      <h1 className='text-center font-semibold text-3xl p-5'>Cart Totals</h1>
      <h2 className='text-left bg-center font-normal text-lg px-20 pt-10'>
        Items<span className='pl-10 text-slate-500'>10</span>
      </h2>
      <h2 className='text-left bg-center font-normal text-lg px-20 pt-10'>
        Total
        <span className='pl-10 text-[#ccae6b] text-xl'>Rs. 250,000</span>
      </h2>
      <button
        type='button'
        className='mx-36 mt-10 text-black text-xl bg-[#f9f1e7]  ring-4 ring-[#ccae6b] focus:ring-4 focus:ring-slate-700 focus:bg-slate-200 font-normal rounded-full  px-5 py-2.5 text-center me-2 mb-2 '>
        Checkout
      </button>
    </div>
  );
}
