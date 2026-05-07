export const routes = {
  fullChainService: {
    path: '/pages/FullChainIncubationMain',
    title: '全链孵化服务',
  },
  fullChain: {
    path: '/pages/FullChainIncubationSub',
    title: '全链孵化',
  },
  coupangIncubation: {
    path: '/pages/CoupangIncubationPage',
    title: '跨境创业孵化营',
  },
  unionOperation: {
    path: '/pages/UnionOperation',
    title: '联合运营',
  },
  industryThinkTank: {
    path: '/pages/IndustryThinkTank',
    title: '行业智库',
  },
  aboutUs: {
    path: '/pages/AboutUs',
    title: '关于我们',
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
