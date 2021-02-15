export const throttle = function(fn,wait){
  let timer = null
  return function(){
    if(!timer){
      timer = setTimeout(function(){
        fn()
        timer = null
      },wait)
    }
  }
}

function debounce(fn, wait) {
  let timer;
  return function() {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn()
    }, wait)
  }
}