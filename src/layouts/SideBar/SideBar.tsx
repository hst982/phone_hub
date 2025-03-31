import classNames from 'classnames/bind'
import { Link } from 'react-router'

import style from './SideBar.module.scss'
import images from '@/assets/images'
import Menu, { MenuItem } from './Menu'

const cx = classNames.bind(style)

export default function SideBar() {
  return (
    <aside className={cx('sidebar')}>
      <Menu>
        <MenuItem
          title="Điện thoại"
          icon={images.iconSmartphone}
          path="/mobile"
        />
        <MenuItem title="Tablet" icon={images.iconTablet} path="/tablet" />
        <MenuItem title="Laptop" icon={images.iconLaptop} path="/laptop" />
        <MenuItem title="Đồng Hồ" icon={images.iconSmartwatch} path="/watch" />
        <MenuItem
          title="Phụ kiện"
          icon={images.iconHeadphone}
          path="/accessory"
        />
      </Menu>
    </aside>
  )
}
