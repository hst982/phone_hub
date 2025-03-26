import { ReactNode } from 'react'
import classNames from 'classnames/bind'
import style from './Popper.module.scss'

const cx = classNames.bind(style)

interface WrapperProps {
  children: ReactNode
  className?: string
}

export default function Wrapper({ children, className = '' }: WrapperProps) {
  return <div className={cx('wrapper', className)}>{children}</div>
}
