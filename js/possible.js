const div = document.getElementById('people');
const result = document.getElementById('description2');

div.addEventListener('mousemove', (e) => {
  const imageRect = div.getBoundingClientRect();
  const offsetX = e.clientX - imageRect.left;
  const offsetY = e.clientY - imageRect.top;

  // 이미지 안에서 마우스 이동시 좌표를 표시
  if (offsetX >= 0 && offsetX <= imageRect.width && offsetY >= 0 && offsetY <= imageRect.height) {
    result.innerHTML = `<div>screenX, Y: (${e.screenX}, ${e.screenY})</div>`;
    result.innerHTML += `<div>clientX, Y: (${e.clientX}, ${e.clientY})</div>`;
    result.innerHTML += `<div>pageX, Y: (${e.pageX}, ${e.pageY})</div>`;
    result.innerHTML += `<div>offsetX, Y: (${offsetX}, ${offsetY})</div>`;
  } else {
    result.innerHTML = '';
  }
});

div.addEventListener('mouseout', () => {
  result.innerHTML = '';
});