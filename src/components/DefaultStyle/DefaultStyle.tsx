import { ReactNode } from 'react'

interface DefaultStyleProps {
  children: ReactNode
}

const DefaultStyle = ({ children }: DefaultStyleProps) => {
  return <>{children}</>
}

export default DefaultStyle
