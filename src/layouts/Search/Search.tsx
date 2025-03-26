import classNames from 'classnames/bind'
import HeadlessTippy from '@tippyjs/react/headless'
import { useState } from 'react'

import { SearchIcon } from '../../components/Icons'
import Button from '../../components/Button'
import { Wrapper as PopperWrapper } from '../../components/Popper'
import style from './Search.module.scss'
import SearchItem from '../../components/SearchItem'

const cx = classNames.bind(style)

const searchItems = [
  {
    _id: 'ip8767861',
    name: 'iPhone 13 Pro Max',
    image:
      'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-13-pro-max.png',
    price: 10000000,
    discount: 18000000,
  },
  {
    _id: 'ip8767862',
    name: 'iPhone 14 Pro Max',
    image:
      'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-14-pro-max.png',
    price: 12000000,
    discount: 0,
  },
  {
    _id: 'ip8767863',
    name: 'iPhone 15 Pro Max',
    image:
      'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-pro-max_5.png',
    price: 20000000,
    discount: 0,
  },
  {
    _id: 'ip8767864',
    name: 'iPhone 16 Pro Max',
    image:
      'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-pro-max.png',
    price: 35000000,
    discount: 40000000,
  },
]

function Search() {
  const [showResult, setShowResult] = useState(false)
  // const [searchResult, setSearchResult] = useState([])
  // const [searchValue, setSearchValue] = useState('')

  // interface HandleChangeEvent {
  //   target: {
  //     value: string;
  //   };
  // }

  // const handleChange = (e: HandleChangeEvent) => {
  //   const value = e.target.value;
  // }

  return (
    <div>
      <HeadlessTippy
        interactive
        visible={showResult}
        onClickOutside={() => setShowResult(false)}
        render={(attrs) => (
          <div className={cx('search-result')} tabIndex={-1} {...attrs}>
            <PopperWrapper>
              <h4 className={cx('search-title')}>Sản Phẩm</h4>
              {searchItems.map((result, index) => (
                <SearchItem key={index} data={result} />
              ))}
            </PopperWrapper>
          </div>
        )}
      >
        <div className={cx('search')}>
          <input
            className={cx('search-input')}
            type="text"
            onFocus={() => setShowResult(true)}
            placeholder="Nhập tên sản phẩm..."
          />
          <Button className={cx('search-btn')} primary small>
            <SearchIcon />
          </Button>
        </div>
      </HeadlessTippy>
    </div>
  )
}

export default Search
