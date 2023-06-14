window.addEventListener("load", handleLoad);

function handleLoad() {
  applyStyle();

  // 초기 로드 후에 resize 이벤트 제거
  window.removeEventListener("resize", handleResize);
}

function handleResize() {
  applyStyle();
}

function applyStyle() {
  var container = document.getElementsByClassName("container")[0];
  var container2 = document.getElementsByClassName("container2")[0];
  var width = document.documentElement.clientWidth;
  if (width <= 768) {
  //width가 768 보다 작을 시 모바일 환경
    loadStyleSheet("/css/style_app.css");
    unloadStyleSheet("/css/reset.css");
    unloadStyleSheet("/css/test.css");
    container.style.display = "block";
    container2.style.display = "none";
  } else {
  //width가 768 보다 클 시 웹 환경
    loadStyleSheet("/css/test.css");
    loadStyleSheet("/css/reset.css");
    unloadStyleSheet("/css/style_app.css");
    container.style.display = "none";
    container2.style.display = "block";
  }
}

function loadStyleSheet(url) {
  var link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = url;
  document.head.appendChild(link);
}

function unloadStyleSheet(url) {
  var stylesheets = document.querySelectorAll('link[rel="stylesheet"][href="' + url + '"]');
  for (var i = 0; i < stylesheets.length; i++) {
    stylesheets[i].parentNode.removeChild(stylesheets[i]);
  }
}