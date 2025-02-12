"use client"
import TextClip from "@/utils/TextClip"
import { Rating } from "@mui/material"
import Image from "next/image"
import { useRouter } from "next/navigation"



const ProductCard = ({product}: {product: any}) => {

  let productRating = product?.reviews?.reduce((acc: number, item: any) => acc * item.rating, 0) / product?.reviews?.length

  const router = useRouter();


  
  return (
    <div onClick={() => router.push(`product/${product.id}`) } className="cursor-pointer w-[240px] shadow-lg p-2 rounded-lg" >
          <div className="relative flex justify-center items-center " >
              <Image src={product.image} width={150} height={300}
                  alt={product.name} className=" objective-contain " />
          </div> 
          <div className="text-center mt-2">
        <div> {TextClip(product.name) }  </div>      
        <Rating name="read-only" value={productRating} readOnly />
        <div className="font-bold space-y-1 text-orange-500 text-lg md:text-xl" > {product.price} ₺ </div>
      </div>
      </div>
  )
}

export default ProductCard