
const start = function() {
  changeSize()

  {
    const pageChange = document.getElementById('page-change'), aPageLi = document.getElementById('page-change-ul').getElementsByTagName('li')
    let checkChange = true, bX = 0, aX = 0
    let time = 0
    pageChange.addEventListener('touchmove', function(e) {
      if(time === 0){
        bX = e.targetTouches[0].pageX
      }
      else{
        aX = e.targetTouches[0].pageX
      }
      time++
    })
    pageChange.addEventListener('touchend', function(e) {
      const pageChangeUl = document.getElementById('page-change-ul'), pageChangeLi = pageChangeUl.getElementsByTagName('li'), nowPage = pageChangeUl.getElementsByClassName('now-page')[0]
      let nowIndex
      if(aX - bX > 50) {
        console.log('right')
        nowIndex = parseInt(nowPage.getAttribute('index'))
        if(nowIndex !== 0) {
          nowPage.className = ''
          pageChangeLi[nowIndex - 1].className = 'now-page'
          const moveDistance = nowIndex * 8.4 - 4.2
          moveDistance.toFixed(1)
          pageChangeUl.style.left = 'calc(50% - ' + moveDistance + 'rem)'
        }
      }
      else if(aX - bX < -50) {
        console.log('left')
          nowIndex = parseInt(nowPage.getAttribute('index'))
          if(nowIndex !== 5) {
            nowPage.className = ''
            pageChangeLi[nowIndex + 1].className = 'now-page'
            const moveDistance = nowIndex * 8.4 + 12.6
            moveDistance.toFixed(1)
            pageChangeUl.style.left = 'calc(50% - ' + moveDistance + 'rem)'
          }
      }
      bX = 0
      aX = 0
      time = 0
    })
  }

}

window.onload = start