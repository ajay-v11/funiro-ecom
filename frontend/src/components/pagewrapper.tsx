import {ReactNode} from "react"

import {AspectRatio} from "@/components/ui/aspect-ratio"

interface PageWrapperProps {
  children: ReactNode
  title: string
  discription: string
  imageSrc: string
  altText: string
}

export function PageWrapper({
  children,
  imageSrc,
  altText,
  title,
  discription,
}: PageWrapperProps) {
  return (
    <div className='flex h-screen '>
      <div className='flex-1 flex justify-end bg-[#fff3e3] pt-32'>
        <div className='flex flex-col pr-28 w-1/2'>
          <h1 className='text-4xl text-slate-700 font-extrabold '>{title}</h1>
          <p className='text-slate-500 pb-5'>{discription}</p>
          {children}
        </div>
      </div>

      <div className='flex-1 bg-slate-200 flex justify-center pt-16 '>
        <AspectRatio ratio={8 / 9}>
          <img
            src={imageSrc}
            alt={altText}
            className='w-full h-full object-fill rounded-xl'
          />
        </AspectRatio>
      </div>
    </div>
  )
}
