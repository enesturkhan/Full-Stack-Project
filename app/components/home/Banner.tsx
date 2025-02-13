import Image from "next/image"
const Banner = () => {
  return (
      <div className='h-[237px] bg-orange-700 flex items-center' >
          <div className='h-[170px] relative w-full'>
            <Image className="object-cover" src="/banner.webp " fill alt="" />
          </div>
    </div>
  )
}

export default Banner