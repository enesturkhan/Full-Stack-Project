
interface HeadingProps {
    center?: boolean
    text: string
}

const Heading:React.FC<HeadingProps> = ({center, text} ) => {
  return (
    <div className= {`text-slate-700 px-3 md:px-10 md:text-xl my-3 md:my-10 ${center? "text center" : "text-start"}  `} >{text}</div>
  )
}

export default Heading