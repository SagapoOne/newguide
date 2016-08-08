var changeSize = function() {
  document.getElementsByTagName('html')[0].style.fontSize = (document.body.offsetWidth / 1080) * 625 + '%';
  window.onresize = function() {
    document.getElementsByTagName('html')[0].style.fontSize = (document.body.offsetWidth / 1080) * 625 + '%';
  }
}
