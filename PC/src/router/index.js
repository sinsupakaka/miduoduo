import CoupangIncubationPage from '../pages/CoupangIncubationPage.vue'
import BusinessSystemPage from '../pages/BusinessSystemPage.vue'
import JointOperationPage from '../pages/JointOperationPage.vue'
import AboutUs from '../pages/AboutUs.vue'
import DigitalMarketing from '../pages/DigitalMarketing.vue'
import DigitalExpoServicePage from '../pages/DigitalExpoServicePage.vue'
import IndustryThinkTank from '../pages/IndustryThinkTank.vue'
import CrossBorderBootcampPage from '../pages/CrossBorderBootcampPage.vue'

export const appRoutes = [
  { label: '首页', path: '/', component: BusinessSystemPage},
  { label: '业务体系',
    children: [
      { label: '数字营销', path: '/technology/digital-marketing', component: DigitalMarketing },
      { label: '数字展会', path: '/technology/digital-expo', component: DigitalExpoServicePage },
      { label: '联合运营', path: '/technology/joint-operation', component: JointOperationPage },
      { label: '全链孵化', path: '/technology/full-link-incubation', component: BusinessSystemPage },
    ],
  },
  {
    label: '技术平台'
  },
  { label: '中国跨交会'},
  { label: '行业智库', path: '/industry-think-tank', component: IndustryThinkTank },
  {
    label: '动态中心'
  },
  {
    label: '关于我们',
    children: [
      { label: '企业简介', path: '/about/company', component: AboutUs},
      { label: '联系我们', path: '/about/contact', externalUrl: "https://fjmidodo.com/aboutus"},
    ],
  },
  { label: '云建站管理', path: '/cloud-site' , externalUrl: "https://online.fjmidodo.com/"},

  
  { label: '跨境实战营', path: '/CrossBorderBootcampPage' , component: CrossBorderBootcampPage, hidden: true},
  { label: '低成本创业孵化营', path: '/CoupangIncubationPage' , component: CoupangIncubationPage, hidden: true},
]

export const navRoutes = appRoutes.filter((route) => !route.hidden)

const defaultRoute = navRoutes[0]
const flatRoutes = appRoutes.flatMap((route) => {
  const childRoutes = route.children?.map((child) => ({
    ...child,
    parentPath: route.path,
  })) || []

  return [
    {
      ...route,
      parentPath: route.path,
    },
    ...childRoutes,
  ]
})

export const getRouteHash = (path) => (path === '/' ? '#/' : `#${path}`)

export const getRouteHref = (route) => {
  if (route.externalUrl) return route.externalUrl
  if (route.path === undefined) return null

  return getRouteHash(route.path)
}

export const getCurrentPath = () => {
  if (typeof window === 'undefined') return defaultRoute.path

  const hashPath = window.location.hash.replace(/^#/, '')

  return hashPath || defaultRoute.path
}

export const resolveRoute = (path) => {
  const matchedRoute = flatRoutes.find((route) => route.path === path)

  return matchedRoute || defaultRoute
}

export const isNavItemActive = (item, activePath) => {
  if (item.path === activePath) return true

  return item.children?.some((child) => child.path === activePath) || false
}
