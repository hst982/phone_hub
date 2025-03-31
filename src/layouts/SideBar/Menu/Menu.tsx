import { ReactNode } from 'react'
import classNames from 'classnames/bind'
import style from './Menu.module.scss'

const cx = classNames.bind(style)

export default function Menu({ children }: { children: ReactNode }) {
  return (
    <nav>
      <ul className={cx('nav-list')}>{children}</ul>
    </nav>
  )
}
