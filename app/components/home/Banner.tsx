import Image from "next/image"
const Banner = () => {
  return (
      <div className='h-[237px] bg-black flex items-center' >
          <div className='h-[137px] relative w-full'>
            <Image src="/banner.gif " fill alt="" />
          </div>
    </div>
  )
}

export default Banner