"use strict";

$(document).ready(function () {
  // $('.nav-sub .nav-sub-detail').mouseleave(function (e) {
  //     e.preventDefault();
  //     $(this).siblings(".nav-sub-detail").removeClass("active")
  // })
  // $('.nav-sub .nav-sub-detail').mouseover(function (e) {
  //     e.preventDefault();
  //     $(this).addClass("active");
  //     $(this).siblings(".nav-sub-detail").removeClass("active")
  // })
  // $('.nav .nav-detail').hover(function () {
  //     $(".nav-sub-detail").removeClass("active");
  // })
  $("#bar-mobi").on("click", function () {
    $('.menu-mobi').addClass("show");
    $('.under-shadow').addClass("show");
  });
  $(".under-shadow").on("click", function () {
    $('.menu-mobi').removeClass("show");
    $('.under-shadow').removeClass("show");
  });
  $(".under-shadow-img").on("click", function () {
    $('.under-shadow-img').removeClass("show");
    $('.image-zoom').removeClass("show");
  });
  $(".header-top__left img").on("click", function () {
    $('.header-search').show();
    $('.header-top__left').hide();
    $('.header-top__right').hide();
  });
  $(".header .header-search .fa-times").on("click", function () {
    $('.header-search').hide();
    $('.header-top__left').show();
    $('.header-top__right').show();
  });
  $(".main-img-item img").on("click", function (e) {
    e.preventDefault();
    $(".image-zoom img").attr("src", $(this).attr("src"));
    $('.under-shadow-img').addClass("show");
    $('.image-zoom').addClass("show");
  });
  $(".icon-toggle-menu").on("click", function (e) {
    e.preventDefault();
    $(this).siblings("ul").slideToggle(500);
    $(this).toggleClass("fa-chevron-up");
  });

  if ($(window).width() <= 992) {
    $('.infor-slide').hide();
    $('.infor-slide-mb').show();
    $('.header-search').hide();
    $('.header-top__left').show();
    $('.header-top__right').show();
  } else {
    $('.infor-slide').show();
    $('.infor-slide-mb').hide();
  }

  $(window).resize(function () {
    if ($(window).width() <= 992) {
      $('.infor-slide').hide();
      $('.infor-slide-mb').show();
    } else {
      $('.infor-slide').show();
      $('.infor-slide-mb').hide();
    }
  });
  $('.infor-multiple-items').slick({
    autoplay: true,
    dots: true,
    slidesPerRow: 3,
    rows: 2,
    appendDots: $('.infor-multiple-items'),
    nextArrow: '<i class="fa fa-chevron-right partner-arrow-next infor-arrow-next"></i>',
    prevArrow: '<i class="fa fa-chevron-left partner-arrow-pre infor-arrow-pre"></i>'
  });
  $('.infor-multiple-items-mb').slick({
    autoplay: true,
    dots: true,
    slidesPerRow: 1,
    rows: 1,
    appendDots: $('.infor-multiple-items-mb'),
    nextArrow: '<i class="fa fa-chevron-right partner-arrow-next infor-arrow-next"></i>',
    prevArrow: '<i class="fa fa-chevron-left partner-arrow-pre infor-arrow-pre"></i>',
    responsive: [{
      breakpoint: 992,
      settings: {
        arrows: false
      }
    }]
  });
  var length_Infor_Slide = $('#infor-slide').width() / 2 + $('#infor-slide .slick-dots li').length * $('#infor-slide .slick-dots li').width() / 2 + 60;
  $('.infor-arrow-next').css("left", length_Infor_Slide);
  $('.infor-arrow-pre').css("right", length_Infor_Slide);
  $('.special-event-slide').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: '<i class="fa fa-chevron-right partner-arrow-next"></i>',
    prevArrow: '<i class="fa fa-chevron-left partner-arrow-pre"></i>',
    dots: true,
    appendDots: $('.special-event .slick-slider-dots'),
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
  $('.slick-recruitment').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: '<i class="fa fa-chevron-right partner-arrow-next"></i>',
    prevArrow: '<i class="fa fa-chevron-left partner-arrow-pre"></i>',
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2
      }
    }]
  }); // Get the modal

  $('.detail-decription .icon-zoom.big').on('click', function () {
    var modal = document.getElementById('myModal1');
    var img = document.getElementById('img-zoom1');
    var modalImg = document.getElementById("img1");
    modal.style.display = "block";
    modalImg.src = img.src;
    modalImg.alt = img.alt;
  });
  $(".header-bottom .nav-title").each(function (i) {
    if ($(this).attr("href") == window.location.pathname) {
      $(this).parents(".nav-detail").addClass("active");
      $(this).parents(".nav-detail").siblings().removeClass("active");
    }
  });
  $(".header-bottom .nav-sub-title").each(function (i) {
    if ($(this).attr("href") == window.location.pathname) {
      $(this).parents(".nav-detail").addClass("active");
      $(this).parents(".nav-detail").siblings().removeClass("active");
    }
  });
  $('.multiple-items').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: '<i class="fa fa-chevron-right partner-arrow-next"></i>',
    prevArrow: '<i class="fa fa-chevron-left partner-arrow-pre"></i>',
    dots: true,
    appendDots: $('.partner-slide .slick-slider-dots'),
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });

  if (document.getElementById('myModal1') != null) {
    document.getElementById('myModal1').onclick = function () {
      img1.className += " out";
      setTimeout(function () {
        modal1.style.display = "none";
        img1.className = "modal-content";
      }, 400);
    };
  } //  new Zooming().listen('#zoom2')

});