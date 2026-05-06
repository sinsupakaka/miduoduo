import CoupangIncubationPage from '../pages/CoupangIncubationPage.vue'
import BusinessSystemPage from '../pages/BusinessSystemPage.vue'
import JointOperationPage from '../pages/JointOperationPage.vue'
import AboutUs from '../pages/AboutUs.vue'
import DigitalMarketing from '../pages/DigitalMarketing.vue'
import IndustryThinkTank from '../pages/IndustryThinkTank.vue'

export const navRoutes = [
  { label: '首页', path: '/', component: CoupangIncubationPage },
  { label: '业务体系', path: '/business', component: BusinessSystemPage },
  { label: '技术平台', path: '/technology', component: JointOperationPage },
  { label: '中国跨交会', path: '/cross-border-fair', component: DigitalMarketing },
  { label: '行业智库', path: '/industry-think-tank', component: IndustryThinkTank },
  { label: '动态中心', path: '/news' },
  { label: '关于我们', path: '/about', component: AboutUs },
  { label: '云建站管理', path: '/cloud-site' },
]

const defaultRoute = navRoutes[0]

export const getRouteHash = (path) => (path === '/' ? '#/' : `#${path}`)

export const getCurrentPath = () => {
  if (typeof window === 'undefined') return defaultRoute.path

  const hashPath = window.location.hash.replace(/^#/, '')

  return hashPath || defaultRoute.path
}

export const resolveRoute = (path) => {
  const matchedRoute = navRoutes.find((route) => route.path === path)

  return matchedRoute || defaultRoute
}
