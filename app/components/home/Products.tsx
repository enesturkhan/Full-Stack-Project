import { products } from "@/utils/Products"
import Heading from "../general/Heading"
import ProductCard from "./ProductCard"

const Products = () => {
  return (
      <div>
      <Heading text="Tüm Ürünler" />
      <div className="flex flex-wrap justify-center items-center gap-3 md:gap-10 px-3 md:gap-x-10">
        {
          products.map((product) => (
            <ProductCard key={product.id} product={product}/>
          ))
        }
      </div>
     
    </div>
  )
}

export default Products