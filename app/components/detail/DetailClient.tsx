"use client"
import Image from "next/image"
import PageContainer from "../containers/PageContainer"

const DetailClient = ({product}: {product:any}) => {

  return (
      <div className="my-2 md:my-10">
          
          <PageContainer>            
              <div className="block md:flex gap-5" >
                  <div className="relative h-[400px] w-[400px] flex-1 " >
                      <Image src={product.image} fill alt={product.name} />
                      
                  </div>
                  <div className="w-1/2 " >
                      <div className=" text-xl md:text-2xl "> {product?.name} </div>
                      <div className="text-slate-500" > {product?.description} </div>
                      <div>STOK DURUMU</div>
                      <div>
                          {
                              product.inStock ? <div className="text-green-500" >Stokta vardır.</div> : <div className="text-red-500" >Stokta yoktur.</div>
                          }
                      </div>
                      
                  </div>
                  
             </div>
          </PageContainer>

      </div>
      
  )
}

export default DetailClient