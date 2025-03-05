"use client"

import { cardProductProps } from "@/app/components/detail/DetailClient";
import { createContext, useCallback, useContext, useEffect, useState } from "react";

interface CartContextProps {
  productsQty: number
  cardPrdts:cardProductProps[] | null
  addToBasket: (product: cardProductProps ) => void
  //removeFromBasket: () => void
}

const CartContext = createContext<CartContextProps | null>(null)

interface Props {
  [propName:string]:any
}

export const CartContextProvider = (props: Props) => {

  const [productsQty, setProductsQty] = useState(0);
  const [cardPrdts, setCardPrdts] = useState<cardProductProps[] | null>(null);

  useEffect(() => {
    const getItem: any = localStorage.getItem("cart")
    const getItemParse: cardProductProps[] | null = JSON.parse(getItem)
    setCardPrdts(getItemParse)
  }, [] )    


  
  const addToBasket = useCallback((product:cardProductProps) => {
    setProductsQty(prev => prev + product.quantity);
    setCardPrdts(prev => {
      let updateCart;
      if (prev) {
        updateCart = [...prev, product]
      } else {
        updateCart = [product]
      }
      localStorage.setItem("cart", JSON.stringify(updateCart))
      return updateCart
    })
  }, [])
  
  const value = {
    productsQty,
    addToBasket,
    cardPrdts
  }
 
  return (
   <CartContext.Provider value={value} {...props} />
  )
}

const useCart = () => {
  const context = useContext(CartContext)
  if (context == null) {
   throw new Error ("Bir hata oluştu")
  }
  return context
}

export default useCart