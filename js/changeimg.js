const people = document.getElementById('people');
const description = document.getElementById('description');
const backButton = document.getElementById('backButton');
const image = document.querySelector('#people img');
const twinButton = document.getElementById('twin');

let currentImage = '/images/front.png';
let previousImage = '/images/front.png';

people.addEventListener('click', handleClick);
people.addEventListener('click', handleBackImageClick);
backButton.addEventListener('click', handleBackButtonClick);
//전면 필터
function handleClick(event) {
  const { offsetX, offsetY } = event;
  //전면에서 상,중,하 분리
  if (currentImage === '/images/front.png') {
    if ((offsetX >= 41 && offsetX <= 167) && (offsetY >= 174 && offsetY <= 283)) {
      changeImage('/images/bottom.png', '하체');
    } else if ((offsetX >= 25 && offsetX <= 100) && (offsetY >= 283 && offsetY <= 398)) {
      changeImage('/images/bottom.png', '하체');
    } else if ((offsetX >= 100 && offsetX <= 180) && (offsetY >= 283 && offsetY <= 398)) {
      changeImage('/images/bottom.png', '하체');
    } else if ((offsetX >= 18 && offsetX <= 187) && (offsetY >= 0 && offsetY <= 109)) {
      changeImage('/images/top.png', '상체');
    } else if ((offsetX >= 10 && offsetX <= 40) && (offsetY >= 109 && offsetY <= 227)) {
      changeImage('/images/top.png', '상체');
    } else if ((offsetX >= 168 && offsetX <= 196) && (offsetY >= 109 && offsetY <= 227)) {
      changeImage('/images/top.png', '상체');
    }
    //복근 이동시
    else if ((offsetX >= 52 && offsetX <= 156) && (offsetY >= 110 && offsetY <= 173)) {
      changeImage('/images/middle.png', '복근(복직근, 내외복사근)');
    }
    //하체 이동시
  } else if (currentImage === '/images/bottom.png') {
    if ((offsetX >= 36 && offsetX <= 80) && (offsetY >= 218 && offsetY <= 366)) {
      changeImage('/images/bottom-1.png', '전경골근');
    } else if ((offsetX >= 117 && offsetX <= 156) && (offsetY >= 218 && offsetY <= 366)) {
      changeImage('/images/bottom-1.png', '전경골근');
    } else if ((offsetX >= 30 && offsetX <= 97) && (offsetY >= 0 && offsetY <= 186)) {
      changeImage('/images/bottom-2.png', '장요근, 대퇴근막장근, 대퇴사두');
    } else if ((offsetX >= 98 && offsetX <= 166) && (offsetY >= 0 && offsetY <= 186)) {
      changeImage('/images/bottom-2.png', '장요근, 대퇴근막장근, 대퇴사두');
    }
    //상체 이동시
  } else if (currentImage === '/images/top.png') {
    if ((offsetX >= 6 && offsetX <= 43) && (offsetY >= 108 && offsetY <= 308)) {
      changeImage('/images/top-1.png', '이두, 전완근');
    } else if ((offsetX >= 153 && offsetX <= 194) && (offsetY >= 108 && offsetY <= 308)) {
      changeImage('/images/top-1.png', '이두, 전완근');
    } else if ((offsetX >= 48 && offsetX <= 151) && (offsetY >= 62 && offsetY <= 145)) {
      changeImage('/images/top-2.png', '대흉근-(디테일, 소흉근)');
    } else if ((offsetX >= 48 && offsetX <= 151) && (offsetY >= 0 && offsetY <= 61)) {
      changeImage('/images/top-3.png', '상부승모, 사각근');
    } else if ((offsetX >= 13 && offsetX <= 47) && (offsetY >= 42 && offsetY <= 107)) {
      changeImage('/images/top-4.png', '어깨(삼각근 - 전면, 측면)');
    } else if ((offsetX >= 152 && offsetX <= 183) && (offsetY >= 42 && offsetY <= 107)) {
      changeImage('/images/top-4.png', '어깨(삼각근 - 전면, 측면)');
    }
  }
}
//후면 필터
function handleBackImageClick(event) {
  const { offsetX, offsetY } = event;
  //후면에서 상,중,하 분리
  if (currentImage === '/images/back.png') {
    if ((offsetX >= 39 && offsetX <= 162) && (offsetY >= 255 && offsetY <= 297)) {
      changeImage('/images/b.bottom.png', '하체');
    } else if ((offsetX >= 43 && offsetX <= 156) && (offsetY >= 226 && offsetY <= 373)) {
      changeImage('/images/b.bottom.png', '하체');
    } else if ((offsetX >= 24 && offsetX <= 178) && (offsetY >= 374 && offsetY <= 398)) {
      changeImage('/images/b.bottom.png', '하체');
    } else if ((offsetX >= 49 && offsetX <= 149) && (offsetY >= 142 && offsetY <= 176)) {
      changeImage('/images/b.middle.png', '허리');
    } else if ((offsetX >= 40 && offsetX <= 160) && (offsetY >= 177 && offsetY <= 225)) {
      changeImage('/images/b.middle.png', '허리');
    } else if ((offsetX >= 80 && offsetX <= 117) && (offsetY >= 40 && offsetY <= 61)) {
      changeImage('/images/b.top.png', '상체');
    } else if ((offsetX >= 49 && offsetX <= 150) && (offsetY >= 62 && offsetY <= 142)) {
      changeImage('/images/b.top.png', '상체');
    } else if ((offsetX >= 10 && offsetX <= 35) && (offsetY >= 69 && offsetY <= 236)) {
      changeImage('/images/b.top.png', '상체');
    } else if ((offsetX >= 153 && offsetX <= 188) && (offsetY >= 69 && offsetY <= 238)) {
      changeImage('/images/b.top.png', '상체');
    }
    //후면 하체 이동시
  } else if (currentImage === '/images/b.bottom.png') {
    if ((offsetX >= 14 && offsetX <= 71) && (offsetY >= 346 && offsetY <= 398)) {
      changeImage('/images/b.bottom-1.png', '아킬레스건,발바닥');
    } else if ((offsetX >= 124 && offsetX <= 184) && (offsetY >= 346 && offsetY <= 398)) {
      changeImage('/images/b.bottom-1.png', '아킬레스건,발바닥');
    } else if ((offsetX >= 36 && offsetX <= 84) && (offsetY >= 191 && offsetY <= 345)) {
      changeImage('/images/b.bottom-2.png', '가자미근, 비복근');
    } else if ((offsetX >= 111 && offsetX <= 160) && (offsetY >= 191 && offsetY <= 345)) {
      changeImage('/images/b.bottom-2.png', '가자미근, 비복근');
    } else if ((offsetX >= 28 && offsetX <= 166) && (offsetY >= 0 && offsetY <= 190)) {
      changeImage('/images/b.bottom-3.png', '둔근,햄스트링');
    }
    //후면 상체 이동시
  } else if (currentImage === '/images/b.top.png') {
    if ((offsetX >= 79 && offsetX <= 119) && (offsetY >= 7 && offsetY <= 40)) {
      changeImage('/images/b.top-1.png', '상부승모,사각근');
    } else if ((offsetX >= 72 && offsetX <= 127) && (offsetY >= 41 && offsetY <= 74)) {
      changeImage('/images/b.top-1.png', '상부승모,사각근');
    } else if ((offsetX >= 13 && offsetX <= 22) && (offsetY >= 82 && offsetY <= 112)) {
      changeImage('/images/b.top-2.png', '후면삼각근,대원근');
    } else if ((offsetX >= 35 && offsetX <= 42) && (offsetY >= 60 && offsetY <= 83)) {
      changeImage('/images/b.top-2.png', '후면삼각근,대원근');
    } else if ((offsetX >= 169 && offsetX <= 186) && (offsetY >= 82 && offsetY <= 112)) {
      changeImage('/images/b.top-2.png', '후면삼각근,대원근');
    } else if ((offsetX >= 144 && offsetX <= 185) && (offsetY >= 60 && offsetY <= 83)) {
      changeImage('/images/b.top-2.png', '후면삼각근,대원근');
    } else if ((offsetX >= 43 && offsetX <= 68) && (offsetY >= 83 && offsetY <= 131)) {
      changeImage('/images/b.top-2.png', '후면삼각근,대원근');
    } else if ((offsetX >= 125 && offsetX <= 155) && (offsetY >= 83 && offsetY <= 131)) {
      changeImage('/images/b.top-2.png', '후면삼각근,대원근');
    } else if ((offsetX >= 78 && offsetX <= 124) && (offsetY >= 42 && offsetY <= 174)) {
      changeImage('/images/b.top-3.png', '하부승모');
    } else if ((offsetX >= 47 && offsetX <= 73) && (offsetY >= 144 && offsetY <= 182)) {
      changeImage('/images/b.top-4.png', '광배중하부');
    } else if ((offsetX >= 126 && offsetX <= 153) && (offsetY >= 144 && offsetY <= 182)) {
      changeImage('/images/b.top-4.png', '광배중하부');
    } else if ((offsetX >= 11 && offsetX <= 37) && (offsetY >= 118 && offsetY <= 204)) {
      changeImage('/images/b.top-5.png', '삼두');
    } else if ((offsetX >= 161 && offsetX <= 187) && (offsetY >= 118 && offsetY <= 204)) {
      changeImage('/images/b.top-5.png', '삼두');
    }
    //후면 몸통 이동시
  } else if (currentImage === '/images/b.middle.png') {
    if ((offsetX >= 18 && offsetX <= 62) && (offsetY >= 0 && offsetY <= 200)) {
      changeImage('/images/b.top-4.png', '광배중하부');
    } else if ((offsetX >= 131 && offsetX <= 175) && (offsetY >= 0 && offsetY <= 200)) {
      changeImage('/images/b.top-4.png', '광배중하부');
    } else if ((offsetX >= 86 && offsetX <= 124) && (offsetY >= 107 && offsetY <= 276)) {
      changeImage('/images/b.middle-1.png', '척추(기립)');
    } else if ((offsetX >= 63 && offsetX <= 135) && (offsetY >= 228 && offsetY <= 272)) {
      changeImage('/images/b.middle-1.png', '척추(기립)');
    } else if ((offsetX >= 8 && offsetX <= 191) && (offsetY >= 277 && offsetY <= 400)) {
      changeImage('/images/b.bottom-3.png', '둔근,햄스트링');
    }
  }
}

//초기화 기능
function handleBackButtonClick() {
  if (currentImage !== previousImage) {
    if (currentImage.includes('back.png')) {
      if (currentImage === '/images/back.png') {
        changeImage('/images/back.png', '근육을 클릭해 주세요!');
      } else {
        changeImage('/images/back.png', '근육을 클릭해 주세요!');
      }
    } else if (currentImage.includes('b.')) {
      // b.로 시작하는 이미지에서 초기화 버튼을 눌렀을 때 back.png로 돌아가도록 변경
      changeImage('/images/back.png', '근육을 클릭해 주세요!');
    } else {
      changeImage('/images/front.png', '근육을 클릭해 주세요!');
    }
  }
}

//뒤돌기기능
twinButton.addEventListener('click', () => {
  if (image.src.includes('front.png')) {
    changeImage('/images/back.png', '근육을 클릭해 주세요!');
  } else if (image.src.includes('back.png')) {
    changeImage('/images/front.png', '근육을 클릭해 주세요!');
  }
});

//버튼 클릭시 초기 텍스트 애니메이션 효과
function changeImage(src, desc) {
  const paragraphElement = document.querySelector('#description p');
  image.src = src;
  paragraphElement.textContent = desc || '근육을 클릭해 주세요!';
  
  previousImage = currentImage;
  currentImage = src;
 // CSS 애니메이션을 사용하여 부드러운 효과 적용
 paragraphElement.style.animation = 'fadeIn 0.5s ease forwards';
  setTimeout(function() {
    image.src = src;
    paragraphElement.textContent = desc || '근육을 클릭해 주세요!';

    paragraphElement.style.animation = '';
    paragraphElement.style.opacity = 1;
  });
}


