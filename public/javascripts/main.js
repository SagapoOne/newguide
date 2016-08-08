var start = function() {
  changeSize()

  //生成guide-list
  {
    var startBtn = document.getElementById('start-page-btn')
    var startBtnOnce = true
    startBtn.addEventListener('touchend', function() {
      if(startBtnOnce) {
        startBtnOnce = false
        document.getElementById('start-page-welcome').style.opacity = '0'
        this.style.opacity = '0'
        setTimeout(function() {
          var guideUrl = ['1','2','3','4']
          var guideName = ['入校事宜','学业指导','校园文化','乐居香樟']
          for(var i=0; i<5; i++) {
            if(i === 4) {
              var clearDom = document.createElement('div')
              clearDom.className = 'clear'
              document.getElementById('guide-list').appendChild(clearDom)
            }
            else {
              var guideList = document.createElement('li')
              guideList.className = 'guide-li-' + (i + 1)
              guideList.setAttribute('index', i)
              guideList.innerHTML = '<a href="./guide#' + guideUrl[i] + '" style="background-image: url(images/guide-icon-' + (i+1) + '.png">' + guideName[i] + '</a>'
              guideList.style.backgroundImage = 'url(./images/guide-before-bg-' + (i + 1) + '.png)';
              document.getElementById('guide-list').appendChild(guideList)
              guideList.addEventListener('touchstart', function() {
                var thisIndex = parseInt(this.getAttribute('index'))
                this.style.backgroundImage = 'url(./images/guide-after-bg-' + (thisIndex + 1) + '.png)'
              })
              guideList.addEventListener('touchend', function() {
                var thisIndex = parseInt(this.getAttribute('index'))
                this.style.backgroundImage = 'url(./images/guide-before-bg-' + (thisIndex + 1) + '.png)'
              })
            }
          }
        }, 600)
      }
    })
  }
}

start()