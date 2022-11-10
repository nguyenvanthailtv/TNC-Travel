$(document).ready(function(){
    $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        isfinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        draggable: false,
        arrow:true,
        prevArrow:"<button type='button' class='slick-prev slick-arrow'><i class='ti-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next slick-arrow'><i class='ti-angle-right' aria-hidden='true'></i></button>",
        responsive: [
            {
                breakpoint: 769,
                settings: {
                  slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  arrows: false,
                },
            },
        ],
    });
  });

  // Mobile header box layout
$('.mobile__btn').click(function(){
  $('.box').css({
      'display':'flex',
      'justify-content':'flex-end',
      'opacity':'1',
  });

  setTimeout(function() {
    $('.box__wrapper').css({
      'transform':'translateX(0)',
      'opacity':'1',
  });
  },100)



});
$('.box').click(function(e){
    e.stopPropagation();
});
$('.close__btn').click(function(){
  $('.box__wrapper').css({
      'transform':'translateX(100%)',
      'opacity':'0',
  });
  setTimeout(function() {
    $('.box').css({
      'display':'none',
      'opacity':'0',
    });
  },500)


});


// footer 
// backtop
$('.backtop').fadeOut(1);
$(function(){
  $(window).scroll(function(){
  if($(this).scrollTop() > 100){
      $('.backtop').fadeIn();
  }
  else{
      $('.backtop').fadeOut();
  }
})
});

$('.backtop').click(function () {
$("body,html").animate({scrollTop: 0},200);
})

// home
// search item

$('.home-search__time input').click(function () {
  $('.home-search__box').css('display','block');
});

$('.home-search__item').click(function(e){
  var clas = $('.search--active')
  clas.removeClass('search--active')
  $('.search-time').val(e.target.textContent)
  $(this).addClass('search--active')

  $('.home-search__box').css('display','none');
});

// Tour detail page
// banner
var imgFeature = document.querySelector('.banner__img');
var list_img = document.querySelectorAll('.list-image .image');
var currentIndex =0;

function updateImg(index){
  document.querySelectorAll('.list-image div').forEach(item =>{
      item.classList.remove('img-active');
  })

  currentIndex= index;
  imgFeature.src= list_img[index].getAttribute('src');
  list_img[index].parentElement.classList.add('img-active');
}

list_img.forEach((imgElement,index) => {
  
  imgElement.addEventListener('click', e=>{
      imgFeature.style.opacity='0';
      
      setTimeout(()=>{
          updateImg(index);
          imgFeature.style.opacity ='1';
      },200)
  })

})

// tour plan
$(document).ready(function(){
$('.active').removeClass('.active');

$('.tour-plan__label').click(function(){
    $(this).parent().toggleClass('active');
    $(this).parent().children('.tour-plan__text').slideToggle();
});
})


// destination
// travel guide

$(document).ready(function(){
  $('.active').removeClass('.active');

  $('.travel-guide__label').click(function(){
      $(this).parent().toggleClass('active');
      $(this).parent().children('.travel-guide__text').slideToggle();
  });
});



// search
const listInput=document.querySelectorAll('.search__item');



listInput.forEach((item)=>{
  $(item).children().click(function(){
    const box = $($(item).children('.pick-list__box'));
    const input = $($(item).children('.search__input'));
    $(box).slideToggle(200);

    $($(box).children()).children().click(function(e){
      $(input).val(e.target.textContent);
      ($(box).children()).children('.pick-list__item--active').removeClass('pick-list__item--active')
      $(this).addClass('pick-list__item--active');
    })
  })
}); 


// const listInput=document.querySelectorAll('.search__input');
// listInput.forEach((input) =>{
//   $(input).click(function(){
//       $(this).next().slideToggle();
//       const c = $(this).next();
//       $($(c).children()).children().click(function(e){
//         $(c).prev().val(e.target.textContent);
//         $(c).css('display','none');
//         ($(c).children()).children('.pick-list__item--active').removeClass('pick-list__item--active')
//         $(this).addClass('pick-list__item--active');

//       })
//     })
// })



// $('.search__input').click(function(){
//   // console.log($(this).next().css('display','block'));
//   // const c = $(this).next();
//   // console.log($($(c).children()).children());
//   // // $('.search__input').click(function(){
//   // //   console.log($(c).parent());
    
//   // // })

//   // $($(c).children()).children().click(function(e){
//   //   $(c).prev().val(e.target.textContent)
//   // })

// })









