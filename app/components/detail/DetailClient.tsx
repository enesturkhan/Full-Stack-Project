"use client"
import Image from "next/image"
import PageContainer from "../containers/PageContainer"
import Counter from "../general/Counter"
import { useState } from "react"
import { Rating } from "@mui/material"
import Button from "../general/Button"
import Comment from "./Comment"
import Heading from "../general/Heading"

export type cardProductProps = {
  id: string
  name: string
  description: string
  price: number
  quantity: number
  image: string
  inStock: boolean
}
 
const DetailClient = ({product}: {product:any}) => {

  const [cardProduct, setCardProduct] = useState<cardProductProps>({
    id: product.id,
    name: product.name,
    description: product.description,
    price: product.price,
    quantity:1,
    image: product.image,
    inStock: product.inStock,
  })
 

  const inCreaseFunc = () => {
      setCardProduct(prev => ({
        ...prev, 
        quantity: prev.quantity < 10 ? prev.quantity + 1 : prev.quantity
      }));
    };
  const deCreaseFunc = () => {
    setCardProduct(prev => ({
      ...prev, 
      quantity: prev.quantity > 1 ? prev.quantity - 1 : prev.quantity
    }));
  };
  const onClick = () => {
    console.log("One Milion Dolars")
  }


  const productRating = product?.reviews?.reduce((acc: number, item: any) => acc + item.rating, 0) / product?.reviews?.length
  return (
      <div className="my-2 md:my-10">
          
          <PageContainer>            
            
             <div className="flex flex-col md:flex-row gap-5 items-center md:items-start">
             <div className="relative h-[300px] md:h-[500px] w-full md:w-1/2 flex-shrink-0">
               <Image src={product.image} fill alt={product.name} className="object-contain rounded-lg" />
             </div>
             <div className="w-full md:w-1/2 space-y-3">
            <div className="text-xl md:text-2xl font-semibold">{product?.name}</div>
            <Rating name="read-only" value={productRating} readOnly />
               <div className="text-slate-500">{product?.description}</div>
               <div className="text-sm md:text-base font-medium">STOK DURUMU</div>
               <div className={product.inStock ? "text-green-500 font-bold" : "text-red-500 font-bold"}>
                 {product.inStock ? "Stokta var." : "Stokta yok."}
                      </div>
            <Counter cardProduct={cardProduct} inCreaseFunc={inCreaseFunc} deCreaseFunc={deCreaseFunc} />
            <div className="text-xl font-bold text-orange-500"> {product.price} ₺ </div>
            <Button onClick={onClick} text="Sepete Ekle" outline small  />
             </div>
        </div>

        <div>
        <Heading  text="Yorumlar" />
        </div>
        
        <div className="my-3" >
          {
              product?.reviews?.map((prd:any) => (  

                <Comment key={prd.id} prd={prd} />
              ))
          }
        </div>
         
        
     </PageContainer>        
          

      </div>
      
  )
}

export default DetailClient