interface BannerProps {
  heading: string
  subheading: string
}

export function Banner({heading, subheading}: BannerProps) {
  return (
    <div className=' h-72 w-full bg-slate-200 flex flex-col justify-center items-center '>
      <h1 className='text-4xl font-semibold py-5'>{heading}</h1>
      <h2 className='font-medium'>
        Home {">"}
        <span className='font-light'> {subheading}</span>
      </h2>
    </div>
  )
}
