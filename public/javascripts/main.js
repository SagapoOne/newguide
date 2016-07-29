const start = function() {
  changeSize()

  //生成guide-list
  {
    const startBtn = document.getElementById('start-page-btn')
    let startBtnOnce = true
    startBtn.addEventListener('touchend', function() {
      if(startBtnOnce) {
        startBtnOnce = false
        document.getElementById('start-page-welcome').style.opacity = '0'
        this.style.opacity = '0'
        setTimeout(function() {
          const guideUrl = ['arrangements','advising','culture','xz']
          const guideName = ['入校事宜','学业指导','校园文化','乐居香樟']
          for(let i=0; i<5; i++) {
            if(i === 4) {
              const clearDom = document.createElement('div')
              clearDom.className = 'clear'
              document.getElementById('guide-list').appendChild(clearDom)
            }
            else {
              const guideList = document.createElement('li')
              guideList.className = 'guide-li-' + (i + 1)
              guideList.innerHTML = '<a href="./guide#' + guideUrl[i] + '" style="background-image: url(images/guide-icon-' + (i+1) + '.png">' + guideName[i] + '</a>'
              guideList.style.backgroundImage = 'url(./images/guide-before-bg-' + (i + 1) + '.png)';
              document.getElementById('guide-list').appendChild(guideList)
              guideList.addEventListener('touchstart', function() {
                this.style.backgroundImage = 'url(images/guide-after-bg-' + (i + 1) + '.png)'
              })
              guideList.addEventListener('touchend', function() {
                this.style.backgroundImage = 'url(images/guide-before-bg-' + (i + 1) + '.png)'
              })
            }
          }
        }, 600)
      }
    })
  }
}

window.onload = start