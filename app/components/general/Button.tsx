import { IconType } from "react-icons"


interface buttonProps {
    text: string,
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
    small?: boolean
    outline?: boolean
    disabled?: boolean
  //  icon: IconType
}

const Button:React.FC<buttonProps> = ( {text, onClick, small, outline, disabled} ) => {
  return (
      <button disabled={disabled} className={`rounded-lg p-3 ${small ? "w-[ 250px ]" : "w-full "}    ${outline ? " border text-black bg-orange-500 " : " text-orange-500 bg-black border-none "}`} onClick={onClick} >
           {/* { Icon && <Icon/> }  */}
          {text}
      </button>
  )
}

export default Button