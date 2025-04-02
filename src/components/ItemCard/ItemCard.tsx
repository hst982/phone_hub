import { Link } from 'react-router'
import classNames from 'classnames/bind'

import style from './ItemCard.module.scss'

const cx = classNames.bind(style)

interface Iprops {
  link: string
  name: string
  image: string
  price: number
  oldPrice: number
  rate?: number
  classname?: string
}

export default function ItemCard({
  link,
  name,
  image,
  price,
  oldPrice,
  rate,
  classname,
}: Iprops) {
  return (
    <div className={cx('it_wrap', classname)}>
      <Link className={cx('it_link')} to={link}>
        <div className={cx('it_img')}>
          <img src={image} alt={name} />
        </div>
        <div className={cx('it_content')}>
          <h2 className={cx('it_name')}>{name}</h2>
          <div className={cx('it_price', 'd-flex')}>
            <p>{price.toLocaleString()}</p>
            {oldPrice && <p>{oldPrice.toLocaleString()}</p>}
          </div>
          {rate && (
            <div className={cx('it_rate')}>
              <span className={cx('it_rate_text')}>Đánh giá: {rate}</span>
              <span className={cx('it_rate_icon')}>
                <svg
                  height="15"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  fill="#f59e0b"
                >
                  <path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"></path>
                </svg>
              </span>
            </div>
          )}
        </div>
      </Link>
    </div>
  )
}
