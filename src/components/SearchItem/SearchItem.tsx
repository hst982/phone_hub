import classNames from 'classnames/bind'
import { Link } from 'react-router'

import styles from './SearchItem.module.scss'

const cx = classNames.bind(styles)

interface Data {
  _id: string
  image: string
  name: string
  price: number
  discount: number
}

export default function SearchItem({ data }: { data: Data }) {
  return (
    <Link to={`/product/${data._id}`} className={cx('search-item')}>
      <div className={cx('search-item-image')}>
        <img src={data.image} alt={data.name} />
      </div>
      <div className={cx('search-item-info')}>
        <h4 className={cx('search-item-name')}>{data.name}</h4>
        <div className={cx('search-item-price-wrapper')}>
          <span className={cx('search-item-price')}>
            {data.price.toLocaleString()}đ
          </span>
          {data.discount > 0 && (
            <span className={cx('search-item-discount')}>
              {data.discount.toLocaleString()}đ
            </span>
          )}
        </div>
      </div>
    </Link>
  )
}
