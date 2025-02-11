import { Rating } from "@mui/material"
import Image from "next/image"

const ProductCard = ({product}: {product: any}) => {
  return (
    <div className="w-[240px] shadow-lg p-2 rounded-lg  flex flex-1 
      " >
          <div className="relative " >
              <Image src={product.image} width={200} height={350}
                  alt={product.name} className="objective-contain " />
          </div> 
          <div className="text-center mt-2">
        <div>{product.name}</div>      
        <Rating name="read-only" value={4} readOnly />
        <div className="font-bold space-y-1 text-orange-500 text-lg md:text-xl" > {product.price} ₺ </div>
      </div>
      </div>
  )
}

export default ProductCard