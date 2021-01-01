window.onscroll = function() {
  const nav = document.getElementsByClassName('nav-bar')[0]

  const dom = document.getElementsByClassName('el-input')[0]
  const val = dom.getBoundingClientRect().top - 40

  const dom2 = document.getElementsByClassName('home-shop-list-title')[0]
  if(dom2) {
    const val2 = dom2.getBoundingClientRect().top
    if(val <= 10) {
      dom.style.setProperty('border-top-left-radius', val * 3 + 'px')
      dom.style.setProperty('border-top-right-radius', val * 3 + 'px')
    }
    if(val == 0 && val2 != 90) {
      nav.style.setProperty('background-color', '#f7f7f7')
      dom.style.setProperty('background-color', '#f7f7f7')
      dom2.style.setProperty('background-color', '#f7f7f7')
    } else if(val !=0 && val2 != 90) {
      nav.style.setProperty('background-color', '#333')
    } else if(val2 == 90 && val ==0) {
      // dom.style.setProperty('background-color', '#fff')
      // dom2.style.setProperty('background-color', '#fff')
      // nav.style.setProperty('background-color', '#fff')
    }
  }
}