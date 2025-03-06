'use strict';

$(document).on('ready', function() {
  $(".regular").slick({
    autoplay: true, // 自動再生を設定
    autoplaySpeed: 8000, // 自動再生のスピード（ミリ秒単位）
    dots: true // ドットインジケーターの表示
  });
});

{
  $(".regular").slick({
    autoplay: true,
    arrows: false,
    speed: 800,
    autoplaySpeed: 3000,
    variableWidth: true,
    pauseOnHover: false,
    pauseOnFocus: false
  });

  $('header ul li a').hover(
    function() {
      $(this).css('color','rgba(255, 255, 255, 0.8)');
    },

    function() {
      $(this).css('color','');
    }
  );

  $('.line-text').hover(
    function() {
      $('.line_under',this).css('width','100%');
    },

    function() {
      $('.line_under', this).css('width','');
    }
  );
}

{

  $(function(){
    var open = $(".work_content"),
    close = $('.modal_close'),
    container = $('.modal_content');

    open.on('click',function() {
      var targetId = $(this).data("target");
      $('.modal_content[data-id="' + targetId + '"]').addClass('active');
      return false;
    });

    close.on('click', function(){
      container.removeClass('active');
    });

    $(document).on('click', function(e){
      if(!$(e.target).closest('.modal_content div').length) {
        container.removeClass('active');
      }
    });
  }
  );
}

{
  $('.form_gender input[type="radio"]').change(function(){
    console.log('状態が変わりました');
    $('.form_gender input[type="radio"]').removeClass('checked');
    console.log('checked削除');

    if($(this).prop('checked')) {
      $(this).addClass('checked');
      console.log('checked追加');
    }
  });
}

{
  $('.checkbox_wrapper input[type="checkbox"]').change(function(){
    console.log('状態が変わりました');
    
    if($(this).prop('checked')) {
      $(this).addClass('checked');
      console.log('checked追加');
    } else {
      $(this).removeClass('checked');
      console.log('checked削除');  
    }
  });
}

{
  var position = $('.fast-view').offset().top;
  console.log($('.fast-view'));
  console.log(position)

  $('.top_button').click(function() {
    $("html").animate(
      {scrollTop : position},
      {duration: 600, queue : false}
  );
  });
}

{
  $('.header_menu_button').click(function(){
    $('.header_menu_button').toggleClass('close');
    $('header ul').toggleClass('open');
  });

  $('header ul li a').click(function() {
    $('.header_menu_button').removeClass('close');
    $('header ul').removeClass('open');
  });
}

{
  const mediaQuery = window.matchMedia('(max-width: 430px)')

  function toggleBr() {
    if(mediaQuery.matches) {
      $('.fast-view > h2 br:first-of-type').show();
      $('.main_service_content:first-of-type .service_content_text > h3 br').hide();
      $('.work_content:first-of-type h4 br').hide();
      $('.footer_copyright p br').show();
    } else {
      $('.fast-view > h2 br:first-of-type').hide();
      $('.main_service_content:first-of-type .service_content_text > h3 br').show();
      $('.work_content:first-of-type h4 br').show();
      $('.footer_copyright p br').hide();
    }
  }

  function toggleImg() {
    const imgFirst = $('.main_about .main_bg img:first-of-type')
    const imgSecond = $('.main_about .main_bg img:nth-of-type(2)')

    if(mediaQuery.matches) {
      imgFirst.hide();
      imgSecond.show();
      $('.work_content img:first-of-type').hide();
      $('.work_content img:nth-of-type(2)').show();
    } else {
      imgFirst.show();
      imgSecond.hide();
      $('.work_content img:first-of-type').show();
      $('.work_content img:nth-of-type(2)').hide();
    }
  }

  toggleBr();
  toggleImg();

  mediaQuery.addEventListener('change',toggleBr);
  mediaQuery.addEventListener('change',toggleImg);

}
