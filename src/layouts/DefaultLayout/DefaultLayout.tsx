import { ReactNode } from 'react'
import classNames from 'classnames/bind'

import Header from '../Header'
import Footer from '../Footer'
import style from './DefaultLayout.module.scss'
import SideBar from '../SideBar'

const cx = classNames.bind(style)

export default function DefaultLayout({ children }: { children: ReactNode }) {
  return (
    <div className={cx('wrapper')}>
      <Header />
      <div className={cx('container')}>
        <div className={cx('main')}>
          <div className={cx('content')}>
            <SideBar />
            {children}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
