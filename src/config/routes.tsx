interface RoutePaths {
  home: string
  product: string
  category: string
  search: string

  // Nhóm tài khoản
  login: string
  register: string
  checkout: string
  cart: string
  profile: string

  // Nhóm Admin
  dashboard: string
  manageProduct: string
  manageOrder: string
  manageUsers: string

  // Nhóm phụ
  wishlist: string
  orderHistory: string
  about: string
  contact: string
}

const routes: Readonly<RoutePaths> = {
  home: '/',
  product: '/product/:id',
  category: '/category/:categoryName',
  search: '/search',

  // Nhóm tài khoản
  login: '/login',
  register: '/register',
  checkout: '/checkout',
  cart: '/cart',
  profile: '/profile',

  // Nhóm Admin
  dashboard: '/admin',
  manageProduct: '/admin/products',
  manageOrder: '/admin/orders',
  manageUsers: '/admin/users',

  // Nhóm phụ
  wishlist: '/wishlist',
  orderHistory: '/orders',
  about: '/about',
  contact: '/contact',
}

export default routes
