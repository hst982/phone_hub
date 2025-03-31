import config from '../config'
import HomePage from '../pages/Home'
import Profile from '../pages/Profile'
import NotFound from '../pages/NotFound'
import Login from '../pages/Login'
import MobilePage from '../pages/Mobile'

const publicRoutes = [
  { path: config.routes.home, component: HomePage },
  { path: config.routes.mobile, component: MobilePage },
  { path: config.routes.login, component: Login, layout: null },
  { path: '*', component: NotFound, layout: NotFound },
]

const privateRoutes = [{ path: config.routes.profile, component: Profile }]

export { publicRoutes, privateRoutes }
