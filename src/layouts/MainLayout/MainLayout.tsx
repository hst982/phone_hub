import clsx from 'clsx'
import { ReactNode } from 'react'

import Header from '../Components/Header'
import Footer from '../Components/Footer'

function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className={clsx('wrapper')}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default MainLayout
