import classNames from 'classnames/bind'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Link } from 'react-router'

// import required modules
import { Pagination, Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

// import SideBar from '@/layouts/SideBar'
import style from './Home.module.scss'
import images from '@/assets/images'
import FlashSale from '@/components/FlashSale'

const cx = classNames.bind(style)

const data = [
  {
    _id: 'ip8767861',
    name: 'iPhone 13 Pro Max',
    image:
      'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-13-pro-max.png',
    price: 10000000,
    oldPrice: 18000000,
  },
  {
    _id: 'ip8767862',
    name: 'iPhone 14 Pro Max',
    image:
      'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-14-pro-max.png',
    price: 12000000,
    oldPrice: 19000000,
  },
  {
    _id: 'ip8767863',
    name: 'iPhone 15 Pro Max',
    image:
      'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-pro-max_5.png',
    price: 20000000,
    oldPrice: 25000000,
  },
  {
    _id: 'ip8767864',
    name: 'iPhone 16 Pro Max',
    image:
      'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-pro-max.png',
    price: 35000000,
    oldPrice: 40000000,
  },
  {
    _id: 'glxs25ultra12gb',
    name: 'SamSung Galaxy S25 Ultra 12GB 256GB',
    image:
      'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/d/i/dien-thoai-samsung-galaxy-s25-ultra_3__3.png',
    price: 27990000,
    oldPrice: 33990000,
  },
  {
    _id: 'xiaomi14tpro12512',
    name: 'Xiaomi 14T Pro 12GB 512GB',
    image:
      'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/x/i/xiaomi_14t_pro_1_.png',
    price: 17990000,
    oldPrice: 14990000,
  },
  {
    _id: 'xiaomi155256',
    name: 'Xiaomi 15 5G 12GB 256GB',
    image:
      'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/d/i/dien-thoai-xiaomi-15_11_.png',
    price: 21990000,
    oldPrice: 24990000,
  },
]

const bannerSlidesItem = [
  {
    id: 1,
    src: images.bannerSlide1,
    alt: 'bannerSlide1',
  },
  {
    id: 2,
    src: images.bannerSlide2,
    alt: 'bannerSlide2',
  },
  {
    id: 3,
    src: images.bannerSlide3,
    alt: 'bannerSlide3',
  },
  {
    id: 4,
    src: images.bannerSlide4,
    alt: 'bannerSlide4',
  },
]

export default function HomePage() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('banner')}>
        <div className={cx('banner-slide')}>
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={20}
            className={cx('home-banner-slide')}
          >
            {bannerSlidesItem.map((value) => (
              <SwiperSlide key={value.id}>
                <img src={value.src} alt={value.alt} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={cx('banner-image')}>
          <Link to={'/product/galaxym5'}>
            <img src={images.banner_iphone16prm} alt="rightbanner 1" />
          </Link>

          <Link to={'/product/galaxym5'}>
            <img src={images.banner_glxs25ultra} alt="rightbanner 1" />
          </Link>
        </div>
      </div>
      <div className={cx('content')}>
        <FlashSale timer={8200} listProduct={data} />
      </div>
    </div>
  )
}
