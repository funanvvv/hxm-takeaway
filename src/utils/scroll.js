export const dynamicNav = () => {
  const nav = document.getElementsByClassName('nav-bar')[0]

  const dom = document.getElementById('home-search')
  let val = 0
  if(dom) {
    val = dom.getBoundingClientRect().top - 30
  }

  const dom2 = document.getElementsByClassName('home-shop-list-title')[0]
  if(dom2) {
    const val2 = dom2.getBoundingClientRect().top
    if(val == 0 && val2 != 90) {
      nav.style.setProperty('background-color', '#f7f7f7')
      dom2.style.setProperty('background-color', '#f7f7f7')
    } else if(val !=0 && val2 != 90) {
      nav.style.setProperty('background-color', '#333')
    }
  }
}

export const touchBottom = (targetFn) => {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop; //滚动条上端距离顶部的距离
  const windowHeight = document.documentElement.clientHeight || document.body.clientHeight; //是可视区的高度
  const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight; //是滚动条的总高度（当前可滚动的页面的总高度）
  if(scrollTop+windowHeight>=scrollHeight-1){
    try {
      targetFn()
    } catch(e) {
      return
    }
  }
}