import { ReactNode } from 'react'
import classNames from 'classnames/bind'

import Header from '../Header'
import Footer from '../Footer'
import SideBar from '../SideBar'
import style from './DefaultLayout.module.scss'

const cx = classNames.bind(style)

function DefaultLayout({ children }: { children: ReactNode }) {
  return (
    <div className={cx('wrapper')}>
      <Header />
      <div className={cx('container')}>
        <SideBar />
        <div className={cx('content')}>{children}</div>
      </div>
      <Footer />
    </div>
  )
}

export default DefaultLayout
