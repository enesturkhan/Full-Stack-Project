"use client"

import { cardProductProps } from "@/app/components/detail/DetailClient";
import { createContext, useCallback, useContext, useState } from "react";

interface CartContextProps {
  productsQty: number
  addToBasket: (product: cardProductProps ) => void
  removeFromBasket: () => void
}

const CartContext = createContext<CartContextProps | null>(null)

interface Porops{
  [propName:string]:string
}
export const CartContextProvider = (props: Props) => {

  const [productsQty, setProductsQty] = useState(0);

  const addToBasket = useCallback(() => {
  
 }, [] )
  const value = {
    productsQty,
    addToBasket
   
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