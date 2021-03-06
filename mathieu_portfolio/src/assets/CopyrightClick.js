
export default function CopyrightClick (){

  let onLongTouch;
  let timer;
  let touchDuration = 800;

  function touchstart(e){
    e.preventDefault();
    if(!timer){
      timer = setTimeout(onLongTouch, touchDuration);
    }
  }

  function touchend(){
    if(timer){
      clearTimeout(timer);
      timer = null;
    }
  }

  onLongTouch = function() {
    document.body.addEventListener('ontouchstart', function(e){
      e.preventDefault();
      e.stopPropagation();
    });
  }

  document.body.addEventListener("touchstart", touchstart , false);
  document.body.addEventListener("touchend", touchend , false);

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
  document.body.addEventListener('dragover', function(e){
    e.preventDefault();
    e.stopPropagation();
  }, false);
  document.body.addEventListener('drop', function(e){
    e.preventDefault();
    e.stopPropagation();
  }, false);

  document.addEventListener("contextmenu", function(e){
    e.preventDefault();
  }, false);

  document.addEventListener("ontouchend", function(e){
    e.preventDefault();
  }, false);

  document.addEventListener("keydown", function(e) {
  //document.onkeydown = function(e) {
    // "I" key
    if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
      disabledEvent(e);
    }
    // "J" key
    if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
      disabledEvent(e);
    }
    // "S" key + macOS
    if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
      disabledEvent(e);
    }
    // "U" key
    if (e.ctrlKey && e.keyCode == 85) {
      disabledEvent(e);
    }
    // "F12" key
    if (e.keyCode == 123) {
      disabledEvent(e);
    }
  }, false);
  function disabledEvent(e){
    if (e.stopPropagation){
      e.stopPropagation();
    } else if (window.event){
      window.event.cancelBubble = true;
    }
    e.preventDefault();
    return false;
  }
}