import { MouseEventHandler } from "react"

export interface ReactProps {
    children: React.ReactNode,
    className?: String
}

export interface ButtonProp extends ReactProps{
    onClick?: MouseEventHandler<HTMLButtonElement>
}
