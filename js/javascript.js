///////////////////////////////////////////////// subMenu
const gnbItems = document.querySelectorAll('.gnb_item');
const submenuContainer = document.querySelector('.submenu_container');

gnbItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    submenuContainer.classList.add('active');
  });
  item.addEventListener('mouseleave', () => {
    // 짧은 지연 후 사라지게 (사용자가 아래로 내릴 시간 확보)
    setTimeout(() => {
      if (!submenuContainer.matches(':hover')) {
        submenuContainer.classList.remove('active');
      }
    }, 100);
  });
});

submenuContainer.addEventListener('mouseleave', () => {
  submenuContainer.classList.remove('active');
});
////////////////////////////////////////////// main_visual [swiper]
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
    new Swiper('.mainSlider', {
    slidesPerView: 2,
    spaceBetween: 6,
    loop: true, // 반복
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false, 
    },
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      }
    }
  });
    //////////////////////////////////////// Initialize Swiper
    var swiper = new Swiper(".swiper-pagination", {
      slidesPerView: 3,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      }
    });
