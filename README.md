
## 🙌 안녕하세요. 공공기관 대전청년내일재단 리뉴얼 README 입니다!

**` 대전청년내일재단 공식 웹사이트를 리뉴얼한 프로젝트로, 전체 UI/UX 구조를 감각적이고, 심미성을 높여 사용자 친화적으로 개선하였습니다.`**
![Index_page_Design(desktop)](https://github.com/user-attachments/assets/8220aab4-9f01-444c-8e30-4bd7347c7523)

## 🎁 배포 링크 https://sohee-ux.github.io/Daejeon-Youth/ 

**디자인 시안**: [Figma Design](https://www.figma.com/design/2jwl2JhBaYHaLm5gVu9lFc/%EA%B3%B5%EA%B3%B5%EA%B8%B0%EA%B4%80-%EB%A6%AC%EB%89%B4%EC%96%BC_%EA%B9%80%EC%86%8C%ED%9D%AC?node-id=152-7&t=LYzzZaNmgfecAqFK-1)


## 🖥 사용 기술 / 툴
- HTML5
- CSS3
- JavaScript
- VSCode
- Figma 


## 🛠 웹사이트 기능 빠르게 엿보기  
1.  [헤더 상단, 네비게이션, 메인 비주얼]
2.  [주요서비스1 : 장학 사업]
3.  [주요서비스2 : 기부 참여]
4.  [주요서비스3 : 기부 현황]
5.  [주요서비스4 : 알림 소식]
6.  [주요서비스5 : 자주하는 질문]
7.  [주요서비스6 : 링크 서비스]
8.  [주요서비스7 : 후원사]
9.  [풋터 하단 영역]
10. [서브페이지 : 열린마당 > 공고]
    
    
----------------------------------------------

## 🧩 부가 기능 설명

### 💌 팝업 모달창 기능

- 로그인 버튼 클릭 시, 모달 창이 열리고 닫기 버튼 또는 바깥 영역을 클릭하면 모달이 닫히는 구조
- 
![image](https://github.com/user-attachments/assets/36968c1f-6a0e-45a4-a326-b8d778a3e0d5)


✅ [팝업 모달창] 사용 기술

```
window.onload = function () {
  document.body.classList.add("modal-open");
  document.body.style.overflow = "hidden";
  window.scrollTo(0, 0);
};

modalClose.addEventListener('click',function(){
  modal.style.display = 'none';
  document.body.style.overflow = "";
});

```

## 🔍 1. 페이지 로드 시 모달 무조건 열기
window.onload 이벤트를 사용해 페이지와 동시에 모달이 열리며, 배경 스크롤이 막히고 창 최상단으로 이동합니다.
즉, 별도 트리거 없이도 모달이 뜨는 구조입니다.

## 🔍 2. 배경 스크롤 제어
overflow: hidden으로 body 스크롤을 막는 방식은 일반적인 패턴입니다. 그러나 iOS Safari에서는 여전히 스크롤이 되는 버그가 있습니다
stackoverflow.com
bugs.webkit.org
이 방식은 잠깐 동작할 수 있지만, 스크롤 바 사라짐으로 인한 레이아웃 shift 이슈도 존재합니다.

## 🔍 3. 모달 닫기 처리
닫기 버튼만 연결되어 있어 ESC 키나 배경 클릭 시 닫히지 않습니다.
더불어, display: none 후 focus 반환이나 aria 속성 제거 같은 접근성 처리가 누락된 상태입니다.


### 🔐 로그인(login.html) 기능

- 로그인 버튼 클릭 시, 로그인 입력창 페이지로 이동됩니다.


### 🔐 회원가입(join.html) 기능

- 회원가입 버튼 클릭 시, 회원가입 입력창 페이지로 이동됩니다.
  

## 🧩 메인페이지(index.html) 기능 설명

### ✅ 헤더 상단, 네비게이션, 메인 비주얼 기능
1. 기존 사이트에서 전체적인 폰트 크기 및 심미성이 떨어지는 컬러감을 수정하여, 정렬 순서를 다르게 주었습니다.
   심플하지만 마우스 진입이 쉬운 구조로 제작하였습니다. [헤더상단, 네비게이션 영역]
2. 기존 사이트에서는 이미지 1개로 정보전달의 문제를 개선하기 위하여, 메인을 2개의 영역으로 나누어 오른쪽 영역의 카드 형태의 슬라이더로 다양한 청년 지원 공고를 이미지화하여 홍보하였습니다. [메인 비주얼]
3. 검색창 활성화와 슬로건, 장학생 후기를 깔끔하게 배치하여 디자인하였습니다. [메인 비주얼]
4. GNB 메뉴 아이콘 버튼으로 쉬운 접근성을 주었습니다.

![01Index_page_Design(desktop)](https://github.com/user-attachments/assets/1ffedfa9-3e93-43e2-b042-cf37473582e2)

### Code block

```
const slideWrapper = document.querySelector('.slide-wrapper');
const slides = document.querySelectorAll('.slide');
const slideHeight = slides[0].offsetHeight;
let index = 0;

setInterval(() => {
  index++;
  slideWrapper.style.transform = `translateY(-${slideHeight * index}px)`;

  if (index === slides.length) {
    setTimeout(() => {
      slideWrapper.style.transition = 'none';
      slideWrapper.style.transform = 'translateY(0)';
      index = 0;
    }, 600); // transition duration과 동일
    setTimeout(() => {
      slideWrapper.style.transition = 'transform 0.6s ease-in-out';
    }, 700);
  }
}, 3000);


```

## [메인 비주얼] 사용 기술
Vanilla JavaScript (순수 JS): 라이브러리 없이 DOM 요소를 직접 제어하고 setInterval, transform, transition을 활용해 슬라이드 애니메이션 구현.


## ✨ 좌측 ""청년 후기 코멘트 자동 슬라이드 동작 원리
- 슬라이드 요소 찾기
slide-wrapper와 .slide 컬렉션을 가져옵니다.

- 높이 계산
한 슬라이드의 높이를 구해, 이동 거리 계산에 사용합니다.

- 3초마다 슬라이드 이동
setInterval으로 인덱스(index)를 하나씩 증가시키고, translateY로 슬라이드를 위로 밀어 올립니다.
마지막 슬라이드 처리 (=무한 루프 효과) 인덱스가 전체 슬라이드 개수와 같아지면,
transition을 잠시 제거한 후 translateY(0)으로 순간 이동,
인덱스를 0으로 다시 설정해 다시 반복되도록 준비합니다. 그리고 나서 다시 transition을 복원합니다.



### Code block

```
new Swiper('.mainSlider', {
  slidesPerView: 2,
  spaceBetween: 6,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false, 
  },
  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 }
  }
});


```


## [메인 비주얼] 사용 기술
Swiper: 모바일 · 데스크탑 대응 터치 슬라이드 라이브러리


## ✨ 우측 청년공고 카드 자동 슬라이드 동작 원리

slidesPerView: 2 — 기본적으로 보이는 슬라이드 2개
spaceBetween: 6 — 슬라이드 간 간격 6px
loop: true — 끝나면 다시 처음으로 부드럽게 순환
navigation — 이전/다음 버튼 제어 설정
autoplay — 3초마다 자동 전환 & 사용자가 건드려도 멈추지 않음
breakpoints — 반응형 적용, 화면이 좁아지면 1개만 보이도록 조정


### ✅ 주요서비스1 : 장학 사업
## 1. 카드 형태의 여러 장학금 종류를 보여주며, 상세 설명을 한 번에 확인할 수 있습니다.
## 2. 카드 클릭 시, 장학금 신청 페이지로 이동됩니다. (작업 전)

![02Index_page_Design(desktop)](https://github.com/user-attachments/assets/656cf72d-b9a4-4178-a49c-cefc68457d91)


### ✅ 주요서비스2 : 기부 참여
## 1. 기부/후원 절차를 메인페이지에 보여주며, 문의 연락처를 확인할 수 있는 영역입니다.
## 2. 정기/일시 기부에 필요한 양식을 다운로드 받을 수 있는 영역이 함께 있습니다.

![03Index_page_Design(desktop)](https://github.com/user-attachments/assets/9d4126b0-b5d7-4800-aa5e-5f0917aa407b)


### ✅ 주요서비스3 : 기부 현황
## 누적 기부액과 지원액을 표시하여, 수혜자 수와 비례하도록 숫자를 강조하는 영역입니다.

![04Index_page_Design(desktop)](https://github.com/user-attachments/assets/98cd55b5-bf29-49f1-952b-d36c10d5227f)


### ✅ 주요서비스4 : 알림 소식
## 주요 공고를 카드형태로 표현하여 자세히보기 페이지로 이동되도록 제작하였습니다.

![05Index_page_Design(desktop)](https://github.com/user-attachments/assets/25e67328-45f7-41af-9c31-aa0e00bb171c)


### ✅ 주요서비스5 : 자주하는 질문
## 1. QNA 영역으로 자주하는 질문의 답변을 아코디언 형태로 표현하였습니다.
## 2. 자세히 보기 클릭 시, 상세페이지로 넘어가게 되면서 질문을 남길 수 있는 창이 나옵니다. (작업 전)

![06Index_page_Design(desktop)](https://github.com/user-attachments/assets/16662b8c-db70-47dd-a340-6ddf5a0dea55)


### ✅ 주요서비스6 : 링크 서비스
## 1. 세 가지(대전 주요사이트, 대전 주요대학교, 유관 기관)의 큰 영역으로 나누어 링크 서비스를 제공하는 영역입니다.
## 2. 기관 이름 클릭 시, 관련 홈페이지로 연결되어 빠르고 쉬운 홈페이지 이동이 가능합니다.

![07Index_page_Design(desktop)](https://github.com/user-attachments/assets/ad165a11-4ce2-4a17-b24b-c1fe9aebbb71)


### ✅ 주요서비스7 : 후원사
## 기존 페이지에서는 후원사 표시가 명확하지 않고, 서브페이지에서만 확인이 가능하기에, 하단 영역에 주요 후원사명을 이미지화하여 슬라이드 되도록 구성하였습니다. (슬라이드 기능부여 전)

![08Index_page_Design(desktop)](https://github.com/user-attachments/assets/a32f32d3-9f1f-4e46-a402-7d9bef6ac4c3)


### ✅ 풋터 하단 영역
## 깔끔하게 정렬되며, 서브메뉴로 접속이 가능하도록 구성하였습니다.

![09Index_page_Design(desktop)](https://github.com/user-attachments/assets/ab31cf94-d2ae-41fa-b1c0-d812303c985e)



## 🧩 서브페이지(notice_sub.html) 기능 설명  |  💌 열린마당 > 공고 – `notice_sub.html`

## 1. 공고사항 전환 기능 구현
## 2. 페이지네이션 기능 구현

한 화면에 일정 수(row)만 보여주고, 나머지는 페이지 번호를 클릭해서 부분적으로 보여주는 방식(페이지네이션)사용

💡 구현된 주요 기능 설명
1. 데이터 분할 기준 설정
```
let rowsPerpage = 15;
```
한 페이지에 15개 행(tr)씩 보여주겠다는 의미입니다.

2. 총 페이지 수 계산
```
let pageCount = Math.ceil(rowsCount / rowsPerpage);
```
테이블 행 수를 기반으로, 총 몇 페이지가 필요한지 계산합니다.

예: 100개의 행이면 Math.ceil(100 / 15) → 7 페이지

3. 페이지 버튼 동적 생성
```
for(let i = 1; i <= pageCount; i++){
  numbers.innerHTML += `<li><a href="">${i}</a></li>`;
}
```
<ul id="numbers"> 같은 HTML 요소에 페이지 번호를 생성합니다.

이걸로 사용자가 몇 번째 페이지를 클릭할 수 있게 됩니다.

4. 페이지 번호 클릭 이벤트 처리
```
numberBtn.forEach((item, index)=>{
  item.addEventListener('click', function(e){
    e.preventDefault();
    displayRow(index);
  });
});
```
각 페이지 번호를 클릭하면 해당 인덱스를 기반으로 테이블을 다시 표시합니다.

e.preventDefault()는 <a href="">로 인한 페이지 새로고침을 막는 역할입니다.

5. 테이블 행 보이기/숨기기
```
function displayRow(index) {
  let start = index * rowsPerpage;
  let end = start + rowsPerpage;

  rows.forEach(row => row.style.display = 'none');
  rowsArray.slice(start, end).forEach(row => row.style.display = '');

  // 현재 선택된 페이지 버튼에 스타일 지정
  numberBtn.forEach(nb => nb.classList.remove('active'));
  numberBtn[index].classList.add('active');
}
```

----------------------------------------------


⚠ 주의사항
- 본 프로젝트는 학습 및 포트폴리오 용도로만 사용됩니다.
- FC서울 구단과는 무관하며, 모든 저작권은 원저작자에게 있습니다.
  
<br>   

