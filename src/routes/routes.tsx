import config from '../config'
import HomePage from '../pages/Home'
import Profile from '../pages/Profile'
import NotFound from '../pages/NotFound'
import Login from '../pages/Login'

const publicRoutes = [
  { path: config.routes.home, component: HomePage },
  { path: config.routes.profile, component: Profile },
  { path: config.routes.login, component: Login, layout: null },
  { path: '*', component: NotFound, layout: NotFound },
]

const privateRoutes = []

export { publicRoutes, privateRoutes }
