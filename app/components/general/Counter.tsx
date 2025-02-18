import { cardProductProps } from "../detail/DetailClient"


interface CounterProps {
  cardProduct: cardProductProps, 
    inCreaseFunc: () => void,
    deCreaseFunc: () => void,

}


const Counter:React.FC<CounterProps> = ({cardProduct,inCreaseFunc,deCreaseFunc }) => {
  return (
      <div className="flex items-center gap-3">
          <button  className="px-2 py-1 bg-gray-200 rounded disabled:opacity-50" disabled={cardProduct.quantity == 1} onClick={deCreaseFunc}>-</button>
          <div  className="font-semibold"> {cardProduct.quantity} </div>
          <button className="px-2 py-1 bg-gray-200 rounded disabled:opacity-50" disabled={cardProduct.quantity == 10 } onClick={inCreaseFunc}>+</button>
    </div>
  )
}

export default Counter