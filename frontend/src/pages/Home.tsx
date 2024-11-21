import {Button} from "@/components/ui/button"
import {useNavigate} from "react-router-dom"

export function Home() {
  const navigate = useNavigate()

  return (
    <div>
      <div className='h-screen  w-full '>
        <img
          src='../public/bg.jpg'
          alt='bg-image'
          className=' inset-0 h-full w-full '></img>
        <div className='absolute right-20 h-80 w-2/6 top-1/4 bg-[#fff3e3]  p-6 rounded-lg shadow-lg'>
          <p className='text-[#444342] text-xl font-medium'>New Arrival</p>
          <h1 className='text-5xl font-extrabold text-[#b88e2f] text-left'>
            Discover Our New Collection
          </h1>
          <p className='mt-4 text-lg text-gray-600 pb-5'>
            Discover unique furniture for every room in your home.
          </p>
          <Button
            onClick={() => navigate("./login")}
            className='bg-[#b88e2f] text-white font-bold text-xl p-6 w-52 rounded-lg mt-5'>
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  )
}
