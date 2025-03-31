import classNames from 'classnames/bind'
import { NavLink } from 'react-router'
import style from './Menu.module.scss'

const cx = classNames.bind(style)

interface MenuItemProps {
  icon: string
  title: string
  path: string
}

export default function MenuItem({ icon, title, path }: MenuItemProps) {
  return (
    <li className={cx('nav-item')}>
      <NavLink
        className={(nav) => cx('nav-item-link', { active: nav.isActive })}
        to={path}
      >
        <img src={icon} alt={title} />
        <span>{title}</span>
      </NavLink>
    </li>
  )
}
