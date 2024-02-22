import {ReactProps} from "../../types/interfaces"


const Container : React.FC <ReactProps> = ({children,className})  => {
  return (
    <section className={` w-full min-h-screen flex-box flex-col  ${className}`}>
      {children}
    </section>
  )
}

export default Container