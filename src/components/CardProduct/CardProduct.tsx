import classNames from 'classnames/bind'
import styles from './CardProduct.module.scss'
import { Link } from 'react-router'

const cx = classNames.bind(styles)

interface Props {
  titleHeading: string
  children: React.ReactNode
  menu: Array<{ link: string; title: string }>
}
export default function TopMobile({ titleHeading, menu, children }: Props) {
  return (
    <div className={cx('wrapper', 'card')}>
      <div className={cx('inner', 'd-flex')}>
        <h2 className={cx('title')}>{titleHeading}</h2>
        <ul className={cx('list')}>
          {menu.map((item, index) => (
            <li className={cx('menu-item')} key={index}>
              <Link className={cx('menu-item-link')} to={item.link}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={cx('content')}>{children}</div>
    </div>
  )
}
