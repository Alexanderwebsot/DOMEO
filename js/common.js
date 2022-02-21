window.onload = function() {
  let phoneMask_arr = document.getElementsByClassName('phone');
  let footer_call = document.getElementById('footer-callback')
  let modal_callback = document.getElementById('modal-callback')
  let modal_parner = document.getElementById('modal-partner')
  let modal_dark = document.getElementById('modal-dark')
  let modal_close = document.getElementsByClassName('modal-window-close')
  let modals = document.getElementsByClassName('modal-window')
  let partenrs_btn = document.getElementsByClassName('btn');
  let html_el = document.getElementById('html-over');
  let btns_rev = document.getElementsByClassName('reviews-block__btn');
  let modals_rev = document.getElementsByClassName('modal-revievs');
  let modals_rev_over = document.getElementsByClassName('modal-revievs-over');
  let video_company = document.getElementsByClassName('companies-video-play');
  let btns_portfolio = document.getElementsByClassName('porfolio-slide__play');
  let video_potfolio = document.getElementsByClassName('porfolio-slide-video');
  let slid_potfolio = document.getElementsByClassName('porfolio-slide');
  
  for (let i = btns_portfolio.length - 1; i >= 0; i--) {
    btns_portfolio[i].onclick = function() {

        let parent_video = this.parentNode;
        let video = parent_video.querySelector('.porfolio-slide-video');
        
        parent_video.classList.add('porfolio-slide-select');

        let video_src = video.getAttribute('data-src')

        video.src = video_src;

        return false;
    }
  }

  for (let i = modals_rev_over.length - 1; i >= 0; i--) {
    modals_rev_over[i].onclick = function() {
        for (let i = modals.length - 1; i >= 0; i--) {
          modals[i].classList.remove('modal-window-active');
        }
        html_el.classList.remove('overflow');
        modal_dark.classList.remove('dark-window-active');
        return false;
    }
  }

  video_company[0].onclick = function() {
      let video = document.getElementById('video-ytube');
      let video_src = video.getAttribute('data-src')
      let video_wrapper = document.getElementById('video-comapany');
      video_wrapper.classList.add('companies-active');
      video.src = video_src;
      
      //$video.attr('src', src + '&autoplay=1');
      return false;
    }
  
  for (let i = phoneMask_arr.length - 1; i >= 0; i--) {
    let phoneMask = IMask(
    phoneMask_arr[i], {
      mask: '+{7}(000)000-00-00'
    });
  }


  for (let i = btns_rev.length - 1; i >= 0; i--) {
    btns_rev[i].onclick = function() {
        let indx = null;
        for (let btn_coun = btns_rev.length - 1; btn_coun >= 0; btn_coun--) {
          if (btns_rev[btn_coun] == this) {
            indx = btn_coun;
          }
        }
        modals_rev[indx].classList.add('modal-window-active');
        html_el.classList.add('overflow');
        modal_dark.classList.add('dark-window-active');
        return false;
    }
  }

  for (let i = modal_close.length - 1; i >= 0; i--) {
    
    modal_close[i].onclick = function() {
        for (let i = modals.length - 1; i >= 0; i--) {
          modals[i].classList.remove('modal-window-active');
        }
        html_el.classList.remove('overflow');
        modal_dark.classList.remove('dark-window-active');
        return false;
    }

  }

  for (let i = partenrs_btn.length - 1; i >= 0; i--) {
    
    partenrs_btn[i].onclick = function() {

        modal_parner.classList.add('modal-window-active');
        modal_dark.classList.add('dark-window-active');
        return false;
    }

  }

  footer_call.onclick = function() {
      modal_callback.classList.add('modal-window-active');
      modal_dark.classList.add('dark-window-active');

      return false;
  }

  modal_dark.onclick = function() {
      for (let i = modals.length - 1; i >= 0; i--) {
        modals[i].classList.remove('modal-window-active');
      }
      modal_dark.classList.remove('dark-window-active');
      html_el.classList.remove('overflow');
      return false;
  }

  let gallery_slider  = new Swiper('.gallery-slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3.8,
    spaceBetween: 20,
    centeredSlides: true,
    centeredSlidesBounds: true,
    speed: 600,
  });

  let portfolio_slider =  new Swiper('.porfolio-slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    centeredSlides: true,
    centeredSlidesBounds: true,
    speed: 600,
    spaceBetween: 60,
    navigation: {
      nextEl: '.porfolio-arrow_r',
      prevEl: '.porfolio-arrow_l',
    },
  });

  portfolio_slider.on('slideChange', function () {
   for (let i = video_potfolio.length - 1; i >= 0; i--) {
     video_potfolio[i].src = '';
   }
   for (let i2 = slid_potfolio.length - 1; i2 >= 0; i2--) {
     slid_potfolio[i2].classList.remove('porfolio-slide-select');
   }
  });
}