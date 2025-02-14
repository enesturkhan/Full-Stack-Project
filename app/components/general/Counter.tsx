

interface CounterProps {
    productCard: any, 
    increaseFunc: () => void,
    decreaseFunc: () => void,

}


const Counter:React.FC<CounterProps> = (productCard,increaseFunc,decreaseFunc ) => {
  return (
      <div>
          <div>-</div>
          <div> {productCard} </div>
          <div>+</div>
    </div>
  )
}

export default Counter