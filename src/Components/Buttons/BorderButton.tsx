import { ButtonProp } from "../../types/interfaces"


const BorderButton: React.FC<ButtonProp> = ({children,className,onClick}) => {
  return (
    <button className={`px-3 py-2 rounded-lg border-2 border-yellow-400 hover:bg-yellow-400 duration-200 font-semibold ${className}`} onClick={onClick}>{children}</button>
  )
}

export default BorderButton