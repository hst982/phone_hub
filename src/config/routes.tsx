interface RoutePaths {
    home: string
    login: string
    register: string
    checkout: string
    cart: string
    profile: string
    product: string
    category: string
    search: string
    dashboard: string
    manageProduct: string
    manageOrder: string
    manageUsers: string
    wishlist: string
    orderHistory: string
    about: string
    contact: string
}

const routes: RoutePaths = {
    home: '/',
    product: '/product/:id',
    category: '/category/:categoryName',
    search: '/search',
    // nhóm trang tài khoản

    login: '/login',
    register: '/register',
    checkout: '/checkout',
    cart: '/cart',
    profile: '/profile',
    // admin

    dashboard : '/admin',
    manageProduct: '/admin/products',
    manageOrder: '/admin/orders',
    manageUsers: '/admin/users',
    // nhóm trang phụ

    wishlist: '/wishlist',
    orderHistory: '/orders',
    about: '/about',
    contact: '/contact',
}

export default routes