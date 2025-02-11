import { products } from "@/utils/Products"
import Heading from "../general/Heading"
import ProductCard from "./ProductCard"

const Products = () => {
  return (
      <div>
      <Heading text="Tüm Ürünler" />
      <div className="flex flex-wrap  gap-5 md:-10">
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