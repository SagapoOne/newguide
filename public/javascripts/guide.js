var start = function() {
	changeSize()
	var pageChange = document.getElementById('page-change'),
			pageChangeUl = document.getElementById('page-change-ul'),
			hash = parseInt(location.hash.split('#')[1]),
			pageWidth = pageChange.offsetWidth,
			unit = 100 * (parseFloat(document.getElementsByTagName('html')[0].style.fontSize) / 625),
			canChange = true
	pageChangeUl.getElementsByTagName('li')[hash+1].className = 'now-page'
	pageChangeUl.style.left = (pageWidth / 2) - (hash + 1.5) * parseFloat(pageChangeUl.getElementsByTagName('li')[0].style.width) * unit + 'px'
  document.getElementById('page-content-' + hash).style.display = 'block'
  document.getElementById('page-content').style.height = document.body.offsetHeight - document.getElementById('page-change').offsetHeight + 'px'
  $('#page-content').on('touchstart', function(e) {
    var nowTop = parseFloat(document.getElementById('page-content-' + hash).style.marginTop),
        bY = e.originalEvent.changedTouches[0].pageY,
        aY = bY
    $('#page-content').on('touchmove', function(event) {
      aY = event.originalEvent.changedTouches[0].pageY
      var distance = aY - bY
      if(document.getElementById('page-content-' + hash).offsetHeight > document.getElementById('page-content').offsetHeight) {
        if(nowTop + distance > 0) {
          document.getElementById('page-content-' + hash).style.marginTop = '0px'
        }
        else if(nowTop + distance < document.getElementById('page-content').offsetHeight - document.getElementById('page-content-' + hash).offsetHeight) {
          document.getElementById('page-content-' + hash).style.marginTop = document.getElementById('page-content').offsetHeight - document.getElementById('page-content-' + hash).offsetHeight + 'px'
        }
        else {
          document.getElementById('page-content-' + hash).style.marginTop = nowTop + distance + 'px'
        }
      }
    })
  })
  $('.page-content-list li').on('touchstart', function(e) {
    this.className = 'data-image hover'
  })
  $('.page-content-list li').on('touchend', function(e) {
    this.className = 'data-image'
  })
  $('.page-content-list li').on('tap', function(e) {
    showMengBan(parseInt(this.getAttribute('page')), parseInt(this.getAttribute('list')))
  })
  $('#page-content-3 .page-content-title:first').on('tap', function(e) {
    showMengBan(parseInt(this.getAttribute('page')), parseInt(this.getAttribute('list')))
  })
  $('.open-site').on('tap', function(e) {
    window.open(this.getAttribute('href'))
  })
	$('#page-change').on('swipeleft', function(e) {
    e.stopPropagation()
		console.log('left')
		if(canChange) {
			canChange = false
			changePage(1)
		}
	})
	$('#page-change').on('swiperight', function(e) {
    e.stopPropagation()
		console.log('right')
		if(canChange) {
			canChange = false
			changePage(-1)
		}
	})


  $('body').on('touchstart', function(e) {
    e.preventDefault()
  })

	function jumpPage() {
		canChange = true
		if(pageChangeUl.getElementsByClassName('like-page')[0]) {
			var likeIndex = parseInt(pageChangeUl.getElementsByClassName('like-page')[0].getAttribute('index'))
			switch(likeIndex) {
				case 6:
					pageChangeUl.style.transition = '0s'
					pageChangeUl.style.left = (pageWidth / 2) - (2.5) * parseFloat(pageChangeUl.getElementsByTagName('li')[0].style.width) * unit + 'px'
					pageChangeUl.getElementsByClassName('like-page')[0].className = ''
					break
				case 1:
					pageChangeUl.style.transition = '0s'
					pageChangeUl.style.left = (pageWidth / 2) - (5.5) * parseFloat(pageChangeUl.getElementsByTagName('li')[0].style.width) * unit + 'px'
					pageChangeUl.getElementsByClassName('like-page')[0].className = ''
					break
			}
		}
	}
	pageChangeUl.addEventListener("webkitTransitionEnd", jumpPage);
	pageChangeUl.addEventListener('transitionend', jumpPage)

	function changePage(moveX) {

		var pageChangeLi = pageChangeUl.getElementsByTagName('li'),
				nowIndex = parseInt(pageChangeUl.getElementsByClassName('now-page')[0].getAttribute('index'))
		switch(moveX) {
			case 1:
				if(nowIndex === 5) {
          document.getElementById('page-content-4').style.display = 'none'
					hash = 1
          document.getElementById('page-content-1').style.display = 'block'
					location.hash = '#' + hash
					pageChangeLi[nowIndex].className = ''
					pageChangeLi[6].className = 'like-page'
					pageChangeLi[2].className = 'now-page'
					pageChangeUl.style.transition = '0.6s'
					pageChangeUl.style.left = (pageWidth / 2) - (nowIndex + 1.5) * parseFloat(pageChangeUl.getElementsByTagName('li')[0].style.width) * unit + 'px'
				}
				else{
          document.getElementById('page-content-' + hash).style.display = 'none'
					hash += 1
          document.getElementById('page-content-' + hash).style.display = 'block'
					location.hash = '#' + hash
					pageChangeLi[nowIndex].className = ''
					pageChangeLi[nowIndex+1].className = 'now-page'
					pageChangeUl.style.transition = '0.6s'
					pageChangeUl.style.left = (pageWidth / 2) - (nowIndex + 1.5) * parseFloat(pageChangeUl.getElementsByTagName('li')[0].style.width) * unit + 'px'
				} 
				break
			case -1:
				if(nowIndex === 2) {
          document.getElementById('page-content-1').style.display = 'none'
					hash = 4
          document.getElementById('page-content-4').style.display = 'block'
					location.hash = '#' + hash
					pageChangeLi[nowIndex].className = ''
					pageChangeLi[1].className = 'like-page'
					pageChangeLi[5].className = 'now-page'
					pageChangeUl.style.transition = '0.6s'
					pageChangeUl.style.left = (pageWidth / 2) - (nowIndex - 0.5) * parseFloat(pageChangeUl.getElementsByTagName('li')[0].style.width) * unit + 'px'
				}
				else{
          document.getElementById('page-content-' + hash).style.display = 'none'
					hash -= 1
          document.getElementById('page-content-' + hash).style.display = 'block'
					location.hash = '#' + hash
					pageChangeLi[nowIndex].className = ''
					pageChangeLi[nowIndex-1].className = 'now-page'
					pageChangeUl.style.transition = '0.6s'
					pageChangeUl.style.left = (pageWidth / 2) - (nowIndex - 0.5) * parseFloat(pageChangeUl.getElementsByTagName('li')[0].style.width) * unit + 'px'
				} 
				break
		}
	}
  var dataImage = document.getElementsByClassName('data-image');
  for(var i=0; i<dataImage.length; i++) {
    dataImage[i].style.backgroundImage = 'url(' + dataImage[i].getAttribute('data-src') + ')';
  }

	// var pageChange = document.getElementById('page-change'),
	//     pageChangeUl = document.getElementById('page-change-ul'),
	//     pageChangeLi = pageChangeUl.getElementsByTagName('li'),
	//     nowIndex = parseInt(pageChangeUl.getElementsByClassName('now-page')[0].getAttribute('index'))
	//     pageWidth = document.body.offsetWidth,
	//     bX = 0,
	//     aX = 0,
	//     time = 0,
	//     unit = 100 * (parseFloat(document.getElementsByTagName('html')[0].style.fontSize) / 625),
	//     canChange = true
	
	// pageChangeUl.style.left = (pageWidth / 2) - (nowIndex + 0.5) * unit * parseFloat(pageChangeLi[0].style.width) + 'px'
	// pageChange.addEventListener('touchmove', function(e) {
	//   if(time === 0) {
	//     bX = e.targetTouches[0].pageX
	//     time ++
	//   }
	//   else {
	//     aX = e.targetTouches[0].pageX
	//   }
	// })
	// pageChange.addEventListener('touchend', function(e) {
	//   var nowPage = pageChangeUl.getElementsByClassName('now-page')[0]
	//   nowIndex = parseInt(nowPage.getAttribute('index'))
	//   if(aX - bX > 20) {
	//     console.log('right')
	//     changePage(nowIndex, -1)
	//   }
	//   else if(aX - bX < -20) {
	//     console.log('left')
	//     changePage(nowIndex, 1)
	//   }
	// })
	// var changePage = function(nowIndex, toIndex) {
	//   if(canChange) {
	//     canChange = false
	//     pageChangeLi[nowIndex].className = ''
	//     pageChangeLi[nowIndex + toIndex].className = 'now-page'
	//     if(nowIndex + toIndex === 1) {
	//       pageChangeLi[5].className = 'like-page'
	//     }
	//     else if(nowIndex + toIndex === 6) {
	//       pageChangeLi[2].className = 'like-page'
	//     }
	//     else {
	//     }
	//     var moveDistance = (8.4 / 16) * unit, aaa = 0
	//     var timer = setInterval(function(){
	//       aaa ++
	//       pageChangeUl.style.left = parseFloat(pageChangeUl.style.left) - toIndex * moveDistance + 'px'
	//       if(aaa === 16) {
	//         if(nowIndex + toIndex === 1) {
	//           pageChangeUl.style.left = (pageWidth / 2) - (5 + 0.5) * unit * parseFloat(pageChangeLi[0].style.width) + 'px'
	//           pageChangeUl.getElementsByClassName('now-page')[0].className = ''
	//           pageChangeUl.getElementsByClassName('like-page')[0].className = 'now-page'
	//         }
	//         else if(nowIndex + toIndex === 6) {
	//           pageChangeUl.style.left = (pageWidth / 2) - (2 + 0.5) * unit * parseFloat(pageChangeLi[0].style.width) + 'px'
	//           pageChangeUl.getElementsByClassName('now-page')[0].className = ''
	//           pageChangeUl.getElementsByClassName('like-page')[0].className = 'now-page'
	//         }
	//         canChange = true
	//         clearInterval(timer)
	//       }
	//     }, 30)
	//   }
	// }


		// var pageChange = document.getElementById('page-change'), aPageLi = document.getElementById('page-change-ul').getElementsByTagName('li')
		// var checkChange = true, bX = 0, aX = 0
		// var time = 0
		// pageChange.addEventListener('touchmove', function(e) {
		//   if(time === 0){
		//     bX = e.targetTouches[0].pageX
		//   }
		//   else{
		//     aX = e.targetTouches[0].pageX
		//   }
		//   time++
		// })
		// pageChange.addEventListener('touchend', function(e) {
		//   var pageChangeUl = document.getElementById('page-change-ul'), pageChangeLi = pageChangeUl.getElementsByTagName('li'), nowPage = pageChangeUl.getElementsByClassName('now-page')[0]
		//   var nowIndex
		//   if(aX - bX > 50) {
		//     console.log('right')
		//     nowIndex = parseInt(nowPage.getAttribute('index'))
		//     if(nowIndex !== 0) {
		//       nowPage.className = ''
		//       pageChangeLi[nowIndex - 1].className = 'now-page'
		//       var moveDistance = nowIndex * 8.4 - 4.2
		//       moveDistance.toFixed(1)
		//       pageChangeUl.style.left = 'calc(50% - ' + moveDistance + 'rem)'
		//     }
		//   }
		//   else if(aX - bX < -50) {
		//     console.log('left')
		//       nowIndex = parseInt(nowPage.getAttribute('index'))
		//       if(nowIndex !== 5) {
		//         nowPage.className = ''
		//         pageChangeLi[nowIndex + 1].className = 'now-page'
		//         var moveDistance = nowIndex * 8.4 + 12.6
		//         moveDistance.toFixed(1)
		//         pageChangeUl.style.left = 'calc(50% - ' + moveDistance + 'rem)'
		//       }
		//   }
		//   bX = 0
		//   aX = 0
		//   time = 0
		// })
    function showMengBan(page,list) {
      document.getElementById('mengban').style.display = 'block'
      document.getElementById('word-content').innerHTML = words[page-1][list-1]

      $('#frame-scroll').on('touchstart', function(e) {
        var nowTop = parseFloat(document.getElementById('frame-scroll').style.top),
            bY = e.originalEvent.changedTouches[0].pageY,
            aY = bY
        $('#frame-scroll').on('touchmove', function(event) {
          aY = event.originalEvent.changedTouches[0].pageY
          var distance = aY - bY
          if(document.getElementById('frame-scroll-container').offsetHeight >= document.getElementById('frame-scroll').offsetHeight) {
            console.log('too short')
          }
          else{
            if(nowTop + distance > 0) {
              document.getElementById('frame-scroll').style.top = '0px'
            }
            else if(nowTop + distance < (document.getElementById('frame-scroll-container').offsetHeight - document.getElementById('frame-scroll').offsetHeight)) {
              console.log(123)
              document.getElementById('frame-scroll').style.top = document.getElementById('frame-scroll-container').offsetHeight - document.getElementById('frame-scroll').offsetHeight + 'px'
            }
            else {
              document.getElementById('frame-scroll').style.top = nowTop + distance + 'px'
            }
          }
          // console.log(document.getElementById('frame-scroll-container').offsetHeight - document.getElementById('frame-scroll').offsetHeight)
        })
      })
      // $('#frame-scroll').on('touchmove', function(e) {
      //   var nowTop = parseFloat(document.getElementById('frame-scroll').style.top),
      //       bY = nowTop,
      //       aY = e.originalEvent.changedTouches[0].pageY,
      //       distance = aY - bY
      //   console.log(aY)
      //   // document.getElementById('frame-scroll').style.top = nowTop + distance + 'px'
      // })
    }
    function hideMengBan() {
      document.getElementById('mengban').style.display = 'none'
    }
    $('#close-btn').on('touchend', function() {
      hideMengBan()
    })
}

start()