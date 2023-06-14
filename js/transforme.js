//로드 시 기준으로 적용되는 스크립트
window.addEventListener("load", handleLoad);
  
function handleLoad() {
    var container = document.getElementsByClassName("container")[0];
    var container2 = document.getElementsByClassName("container2")[0];
    var width = window.innerWidth;
    //화면넓이가 768보다 클시 style.css랑 HTML에 container2안에 내용 활성화
    if  (width >= 768) {
        loadStyleSheet("/css/test.css");
        loadStyleSheet("/css/reset.css");
        unloadStyleSheet("/css/style_app.css");
        container.style.display = "none";
        container2.style.display = "block";
    //화면넓이가 768보다 작을시 style_app.css(앱 전용 화면)랑 HTML에 container안에 내용 활성화
    } else {
      loadStyleSheet("/css/style_app.css");
        unloadStyleSheet("/css/reset.css");
        unloadStyleSheet("/css/test.css");
        container.style.display = "block";
        container2.style.display = "none";
    }
}

function loadStyleSheet(stylesheet) {
  var link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = stylesheet;
  document.head.appendChild(link);
}
function unloadStyleSheet(stylesheet) {
  var stylesheets = document.querySelectorAll('link[rel="stylesheet"][href="' + stylesheet + '"]');
  stylesheets.forEach(function (stylesheet) {
      stylesheet.parentNode.removeChild(stylesheet);
  });
}