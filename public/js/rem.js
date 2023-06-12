function remSize(){
  var deviceSize = document.documentElement.clientWidth || window.innerWidth;
  if(deviceSize >= 750){
    deviceSize = 750;
  }
  if(deviceSize <= 320){
    deviceSize = 320;
  }
  // 750px->1rm = 100px
  document.documentElement.style.fontSize = deviceSize / 7.5 + 'px';
  document.documentElement.querySelector('body').style.fontSize = 0.3 + 'rem';
}
remSize();
window.onresize = function(){
  remSize(); 
}