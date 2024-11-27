import {Search} from './Search';
import {UserDropDown} from './UserDropDown';

export function Header() {
  return (
    <div className='flex flex-row w-full items-center justify-between p-4 fixed bg-white z-50'>
      {/* Logo Section */}
      <div className='basis-1/3 pl-16'>
        <span className='flex items-center gap-3'>
          <a href='/'>
            <img src='./public/logo.png' alt='logo' className='h-8 w-8'></img>
          </a>
          <a href='/' className='text-3xl font-bold text-slate-800'>
            Furniro
          </a>
        </span>
      </div>

      {/* Navigation Section */}
      <div className='basis-1/3 text-center'>
        <span className='flex items-center gap-20 justify-center'>
          <a
            href='/'
            className='text-base font-medium text-slate-600 hover:text-slate-800'>
            Home
          </a>
          <a
            href='/shop'
            className='text-base font-medium text-slate-600 hover:text-slate-800'>
            Shop
          </a>
          <a
            href='/about'
            className='text-base font-medium text-slate-600 hover:text-slate-800'>
            About
          </a>
          <a
            href='/contact'
            className='text-base font-medium text-slate-600 hover:text-slate-800'>
            Contact
          </a>
        </span>
      </div>

      {/* User Section */}
      <div className='basis-1/3 text-right pr-16'>
        <span className='flex items-center gap-10 justify-end'>
          <UserDropDown />
          <Search />

          <a href='/fav'>
            <img src='/fav.png' alt='user' className='h-6 w-6'></img>
          </a>

          <a href='/cart'>
            <img src='/cart.png' alt='user' className='h-6 w-6'></img>
          </a>
        </span>
      </div>
    </div>
  );
}
