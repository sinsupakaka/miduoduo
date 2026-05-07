

const ini = () => {
  // 接入七鱼客服
  ;(function (w, d, n, a) {
    w[n] =
      w[n] ||
      function () {
        ;(w[n].a = w[n].a || []).push(arguments)
      }
    const j = d.createElement('script')
    j.async = true
    j.src = 'https://qiyukf.com/script/5eda769117ad5ee96c7a5e04b32e7672.js'
    d.body.appendChild(j)
  })(window, document, 'ysf')
}

const quit = () => {
  window.ysf('logoff')
}

export async function customerservice () {
  await ini()
  await window.ysf('logoff')
  let data
  let ran
  if (localStorage.getItem('ran')) {
    ran = localStorage.getItem('ran')
  } else {
    ran = (Math.random() * 100000000).toFixed(0)
    localStorage.setItem('ran', ran)
  }
  window.ysf('config', {
    uid: ran, // 用户Id
    name: '游客' + ran, // 用户名称
    email: '', // 用户邮箱
    mobile: '', // 用户电话
    level: 1, // vip级别,
    groupid: 484828278,
    success: function () {
      // 成功回调
      // window.ysf('open');
    },
    error: function () {
      // 错误回调
      alert('客服系统打开错误,请刷新页面或重新登录!')
    }
  })
}
