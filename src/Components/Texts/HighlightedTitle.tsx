import React from 'react'
import { ReactProps } from '../../types/interfaces'
import Title from './Title'

const HighlightedTitle: React.FC<ReactProps> = ({children,className}) => {
  return (
    <Title className={` bg-yellow-200 px-1 -skew-x-6 skew-y-1 hover:skew-x-0 duration-20+-0  ${className}`}>{children}</Title>
  )
}

export default HighlightedTitle