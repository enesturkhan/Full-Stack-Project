"use client"

import { cardProductProps } from "@/app/components/detail/DetailClient";
import { createContext, useCallback, useContext, useState } from "react";

interface CartContextProps {
  productsQty: number
  cardPrdts:cardProductProps[]
  addToBasket: (product: cardProductProps ) => void
  removeFromBasket: () => void
}

const CartContext = createContext<CartContextProps | null>(null)

interface Porops {
  [propName:string]:string
}
export const CartContextProvider = (props: Props) => {

  const [productsQty, setProductsQty] = useState(0);
  const [cardPrdts, setCardPrdts] = useState<cardProductProps[] | null>(null);

  const addToBasket = useCallback((product:cardProductProps) => {
    setCardPrdts(prev => {
      let updateCart;
      if (prev) {
        updateCart = [...prev, product]
      } else {
        updateCart = [product]
      }
      return updateCart
    })
 }, [cardPrdts] )
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