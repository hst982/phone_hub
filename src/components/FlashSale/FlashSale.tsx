import { useEffect, useRef, useState } from 'react'
import classNames from 'classnames/bind'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Link } from 'react-router'
// import required modules
import { Navigation } from 'swiper/modules'
import '/node_modules/swiper/swiper-bundle.css'

import style from './FlashSale.module.scss'

const cx = classNames.bind(style)

interface FlashSaleProps {
  timer: number
  listProduct: Array<{
    _id: string
    name: string
    image: string
    price: number
    oldPrice: number
  }>
}

export default function FlashSale({
  timer = 3600,
  listProduct,
}: FlashSaleProps) {
  const [time, setTime] = useState(timer)

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0))
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [time])

  const hours = Math.floor(time / 3600)
  const minutes = Math.floor((time % 3600) / 60)
  const seconds = time % 60

  const navNextRef = useRef(null)
  const navPrevRef = useRef(null)

  return (
    <div className={cx('flash_sale-box', 'card')}>
      <div className={cx('flash_sale')}>
        <div className={cx('flash_sale-title', 'd-flex')}>
          <div className={cx('flash_sale-img')}></div>
          <div className={cx('time', 'd-flex')}>
            <div className={cx('hour')}>{String(hours).padStart(2, '0')}</div>:
            <div className={cx('minute')}>
              {String(minutes).padStart(2, '0')}
            </div>
            :
            <div className={cx('second')}>
              {String(seconds).padStart(2, '0')}
            </div>
          </div>
        </div>
        <div className={cx('see-all')}>
          <Link to="/flash-sale">Xem tất cả &gt;</Link>
        </div>
      </div>
      <div className={cx('flash_sale-list')}>
        <Swiper
          navigation={{
            nextEl: navNextRef.current,
            prevEl: navPrevRef.current,
          }}
          modules={[Navigation]}
          onBeforeInit={(swiper) => {
            if (navNextRef.current && navPrevRef.current) {
              swiper.navigation.nextEl = navNextRef.current
              swiper.navigation.prevEl = navPrevRef.current
            }
          }}
          spaceBetween={20}
          slidesPerView={5}
        >
          {listProduct.map((item) => (
            <SwiperSlide key={item._id}>
              <Link className={cx('it_wrap')} to={`/product/${item._id}`}>
                <div className={cx('it_img')}>
                  <img src={item.image} alt={item.name} />
                </div>
                <div className={cx('it_content')}>
                  <h2 className={cx('it_name')}>{item.name}</h2>
                  <div className={cx('it_price', 'd-flex')}>
                    <p>{item.price}</p>
                    <p>{item.oldPrice}</p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        <button className={cx('swiper-prev')} ref={navPrevRef}>
          <svg
            fill="currentColor"
            enable-background="new 0 0 13 20"
            viewBox="0 0 13 20"
            x="0"
            y="0"
          >
            <polygon points="4.2 10 12.1 2.1 10 -.1 1 8.9 -.1 10 1 11 10 20 12.1 17.9"></polygon>
          </svg>
        </button>
        <button className={cx('swiper-next')} ref={navNextRef}>
          <svg
            fill="currentColor"
            enable-background="new 0 0 13 21"
            viewBox="0 0 13 21"
            x="0"
            y="0"
          >
            <polygon points="11.1 9.9 2.1 .9 -.1 3.1 7.9 11 -.1 18.9 2.1 21 11.1 12 12.1 11"></polygon>
          </svg>
        </button>
      </div>
    </div>
  )
}
