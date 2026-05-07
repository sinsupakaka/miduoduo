export const routes = {
  fullChainService: {
    path: '/pages/FullChainIncubationMain',
    title: '全链孵化',
    isShow: true
  },
  fullChain: {
    path: '/pages/FullChainIncubationSub',
    title: '全链孵化',
    isShow: false
  },
  coupangIncubation: {
    path: '/pages/CoupangIncubationPage',
    title: '跨境创业孵化营',
    isShow: false
  },
  unionOperation: {
    path: '/pages/UnionOperation',
    title: '联合运营',
    isShow: true
  },
  digitalMarketingService: {
    path: '/pages/DigitalMarketingService',
    title: '数字营销',
    isShow: true
  },
  digitalExpoService: {
    path: '/pages/DigitalExpoService',
    title: '数字展会',
    isShow: true
  },
  industryThinkTank: {
    path: '/pages/IndustryThinkTank',
    title: '行业智库',
    isShow: true
  },
  aboutUs: {
    path: '/pages/AboutUs',
    title: '关于我们',
    isShow: true
  },
}

export const routeEntries = Object.entries(routes).map(([key, route]) => ({
  key,
  ...route,
}))

export const getRouteHash = (routeKey) => {
  const route = routes[routeKey]
  return route ? `#${route.path}` : '#/'
}

export const goRoute = (routeKey) => {
  const route = routes[routeKey]

  if (!route) return

  // H5 uses hash routing via manifest.json. uni.redirectTo keeps the same
  // routing behavior on supported uniapp runtimes.
  if (typeof uni !== 'undefined' && uni.redirectTo) {
    uni.redirectTo({ url: route.path })
    return
  }

  if (typeof window !== 'undefined') {
    window.location.hash = route.path
  }
}
