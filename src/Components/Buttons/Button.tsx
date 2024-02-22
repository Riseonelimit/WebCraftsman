import { ButtonProp } from "../../types/interfaces"


const Button: React.FC<ButtonProp> = ({children,className,onClick}) => {
  return (
    <button className={`px-3 py-2 rounded-lg bg-yellow-400 hover:shadow-lg  duration-200 font-semibold ${className}`} onClick={onClick}>{children}</button>
  )
}

export default Button