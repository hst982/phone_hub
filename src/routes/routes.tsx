import config from '../config'
import HomePage from '../pages/Home'
import Profile from '../pages/Profile'

const publicRoutes = [
  { path: config.routes.home, component: HomePage },
  { path: config.routes.profile, component: Profile },
]

const privateRoutes = []

export { publicRoutes, privateRoutes }
