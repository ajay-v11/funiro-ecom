import {ReactNode} from 'react';

interface PageWrapperProps {
  children: ReactNode;
  title: string;
  discription: string;
  imageSrc: string;
  altText: string;
}

export function PageWrapper({
  title,
  discription,
  children,
  imageSrc,
  altText,
}: PageWrapperProps) {
  return (
    <div className='flex h-screen'>
      {/* Left Section */}
      <div className='flex-1 flex justify-end bg-[#eeeee6] pt-32'>
        <div className='flex flex-col pr-28 w-1/2'>
          <h1 className='text-4xl text-slate-700 font-extrabold'>{title}</h1>
          <p className='text-slate-500 pb-5'>{discription}</p>
          {children}
        </div>
      </div>

      {/* Right Section */}
      <div className='flex-1 bg-slate-200'>
        <div className='pt-16'>
          <img
            src={imageSrc}
            alt={altText}
            className='w-full h-screen object-scale-down rounded-xl'
          />
        </div>
      </div>

      {/* Right Section 
      <div className='flex-1 relative bg-slate-200'>
        
      <div
        className='absolute inset-0 bg-cover bg-center'
        style={{
          backgroundImage: `url('./public/loginbg.jpg')`,
        }}></div>

      {/* Optional overlay if needed 
        <div className='absolute inset-0 bg-black bg-opacity-20'></div>
      </div>
      */}
    </div>
  );
}
