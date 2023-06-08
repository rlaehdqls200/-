const menu = document.querySelector('.menu');
const bg = document.querySelector('.bg');
const menuicon = document.getElementById('menuicon');
const dropdowns = document.querySelectorAll('.dropdown');

//메뉴 클릭시 bg 활성화
menu.addEventListener('click', () => {
  if (bg.style.display === 'block') {
    bg.style.display = 'none';
    resetDropdowns(); // 사이드바가 닫힐 때 드롭다운 초기화
  } else {
    bg.style.display = 'block';
  }
});

bg.addEventListener('click', () => {
  if (bg.style.display === 'block') {
    menuicon.checked = false; // menuicon 체크박스 상태 해제
    bg.style.display = 'none'; // bg 숨기기
    resetDropdowns(); // 사이드바가 닫힐 때 드롭다운 초기화
  }
});

menu.addEventListener('click', (event) => {
  event.stopPropagation();
});


//드론다운 기능
dropdowns.forEach((dropdown) => {
  dropdown.addEventListener('click', function () {
    const submenu = this.nextElementSibling;
    submenu.classList.toggle('active');
  });
});

function resetDropdowns() {
  dropdowns.forEach((dropdown) => {
    const submenu = dropdown.nextElementSibling;
    submenu.classList.remove('active');
  });
}

dropdowns.forEach((dropdown) => {
  const submenuItems = dropdown.querySelectorAll('.submenu li');
  const lastItem = submenuItems[submenuItems.length - 1];
  lastItem.style.borderBottom = '1px solid gray';
});