"use client"
import Image from "next/image"
import PageContainer from "../containers/PageContainer"
import Counter from "../general/Counter"
import { useState } from "react"

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



  return (
      <div className="my-2 md:my-10">
          
          <PageContainer>            
            
             <div className="flex flex-col md:flex-row gap-5 items-center md:items-start">
             <div className="relative h-[300px] md:h-[500px] w-full md:w-1/2 flex-shrink-0">
               <Image src={product.image} fill alt={product.name} className="object-contain rounded-lg" />
             </div>
             <div className="w-full md:w-1/2 space-y-3">
               <div className="text-xl md:text-2xl font-semibold">{product?.name}</div>
               <div className="text-slate-500">{product?.description}</div>
               <div className="text-sm md:text-base font-medium">STOK DURUMU</div>
               <div className={product.inStock ? "text-green-500 font-bold" : "text-red-500 font-bold"}>
                 {product.inStock ? "Stokta var." : "Stokta yok."}
                      </div>
            <Counter cardProduct={cardProduct} inCreaseFunc={inCreaseFunc}  deCreaseFunc= {deCreaseFunc} />
             </div>
           </div>
           
          </PageContainer>

      </div>
      
  )
}

export default DetailClient