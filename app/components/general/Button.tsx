

interface buttonProps {
    text: string,
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
    small?: boolean
    outline?: boolean
    disabled?:boolean
}

const Button:React.FC<buttonProps> = ( {text, onClick, small, outline, disabled} ) => {
  return (
      <button onClick={() => (onClick)} >
          {text}
      </button>
  )
}

export default Button