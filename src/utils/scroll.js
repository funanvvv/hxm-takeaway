export const scrollHome = function() {
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