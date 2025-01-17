jQuery(document).ready(function ($) {


  // if (window.innerWidth <= 991) {
  //   jQuery(".header").addClass("active");
  // } else {
  // }
  jQuery(window).scroll(function () {
    var scroll = jQuery(window).scrollTop();

    if (scroll >= 250) {
      jQuery(".header").addClass("active");
    } else {
      jQuery(".header").removeClass("active");

    }
  });
  // hamburger menu start
  const menu = $(".menu");
  const hamburgerMenu = $(".hamburger-menu");

  hamburgerMenu.on("click", function () {
    menu.toggleClass("active");
  });
  // hamburger menu end

  // add arrow to submenu parents start
  var menuItems = $(".header-bottom .menu > li.menu-item-has-children");
  var siteURL = window.location.origin;
  menuItems.each(function () {
    var customHTML = $("<div></div>").addClass("submenu-toggler");
    var imgElement = $("<img>")
      .attr("src", siteURL + "/wp-content/themes/nursing-assignment/assets/img/icons/arrow-down.svg")
      .attr("alt", "icon")
      .attr("width", 13)
      .attr("height", 7);
    customHTML.append(imgElement);
    $(this).append(customHTML);
  });
  var menuToggler = $(".header-bottom .menu > li.menu-item-has-children .submenu-toggler");
  menuToggler.on("click", function () {
    console.log(4);
    $(this).siblings(".sub-menu").toggleClass("active");
  });
  // add arrow to submenu parents end

  // accordions start
  var accordionItems = $('.accordion-item');
  accordionItems.each(function () {
    var header = $(this).find('.accordion-header');
    var content = $(this).find('.accordion-content');

    header.on('click', function () {
      var isActive = $(this).parent().hasClass('active');

      // Close all content sections
      accordionItems.removeClass('active');
      accordionItems.find('.accordion-content').removeClass('show');

      // Toggle active class and show content
      if (!isActive) {
        $(this).parent().addClass('active');
        content.addClass('show');
      }
    });
  });
  // accordions end


  const $collageItems = $(".collage-item img");
  const $lightbox = $("#lightbox");
  const $lightboxImage = $(".lightbox-image");
  let currentIndex = 0;

  const showLightbox = (index) => {
    currentIndex = index;
    $lightboxImage.attr("src", $collageItems.eq(index).attr("src"));
    $lightbox.removeClass("hidden");
  };

  const updateLightbox = (step) => {
    currentIndex = (currentIndex + step + $collageItems.length) % $collageItems.length;
    showLightbox(currentIndex);
  };

  $collageItems.on("click", function () {
    showLightbox($collageItems.index(this));
  });

  $lightbox.on("click", function (e) {
    const $target = $(e.target);
    if ($target.is($lightbox) || $target.hasClass("close-lightbox")) {
      $lightbox.addClass("hidden");
    } else if ($target.hasClass("next")) {
      updateLightbox(1);
    } else if ($target.hasClass("prev")) {
      updateLightbox(-1);
    }
  });

  $(".announcement-bar").slick({
    autoplay: true,
    infinite: true,
    arrows: false,
    dots: false,
    slidesToScroll: 1,
    slidesToShow: 1,  
  });

  $(".brand-slider").slick({
    autoplay: true,
    infinite: true,
    arrows: false,
    dots: false,
    slidesToScroll: 1,
    slidesToShow: 5,
    responsive: [{
      breakpoint: 991,
      settings: {
        slidesToShow: 4
      }

    }, {

      breakpoint: 767,
      settings: {
        slidesToShow: 3
      }

    }, {

      breakpoint: 576,
      settings: {
        slidesToShow: 2
      }
    }]
  });

  $('.single-slider').slick({
    dots: true,
    arrows: true,
    dots: true,
    infinite: true,
    speed: 1500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          arrows: false,
        }
      }
    ]
  });

  $('.reviews-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        }
      }
    ]
  });
  $('.client-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          arrows: false,
        }
      },
    ]
  });

    const bigImages = $(".big-img");
    const smallImages = $(".small-img");

    const setActive = (index) => {
        bigImages.removeClass("active").hide().eq(index).addClass("active").show();
        smallImages.removeClass("active").eq(index).addClass("active");
    };

    smallImages.each((index, img) => {
        $(img).on("click", () => setActive(index));
    });

    setActive(0);

  const basePrice = 29.99;

  const update = (change) => {
      const quantityElement = $(".quantity");
      const priceElement = $(".products-price");
      const quantity = Math.max(1, parseInt(quantityElement.text(), 10) + change);
      quantityElement.text(quantity);
      priceElement.text(`$${(basePrice * quantity).toFixed(2)} USD`);
  };

  $(".plus").click(() => update(1));
  $(".minus").click(() => update(-1));
  update(0);


});

