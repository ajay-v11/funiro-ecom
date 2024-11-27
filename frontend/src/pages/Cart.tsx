import {Banner} from '@/components/Banner';
import {CartCard} from '@/components/CartCard';
import {CartTable} from '@/components/CartTable';

export function Cart() {
  return (
    <>
      <Banner heading='Cart' subheading='Cart' />
      <div className='flex items-start mt-5 px-20'>
        <div className=' w-2/3 bg-slate-600 mx-5'>
          <CartTable />
        </div>
        <CartCard />
      </div>
    </>
  );
}
