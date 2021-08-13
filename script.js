$(function() {

  // 新規登録モーダル

  $('.signup-show').click(function() {
    $('#signup-modal').fadeIn();
  });

  $('#close-modal').click(function() {
    $('#signup-modal').fadeOut();
  });

  // 言語一覧

  $('.lesson').hover(
    function() {
      $(this).find('.text-contents').addClass('text-active');
    },
    function() {
      $(this).find('.text-contents').removeClass('text-active');
    }
  );
  
  // FAQ
  $('.faq-list-item').click(function() {
    var $answer = $(this).find('.answer');
    if($answer.hasClass('open')) {
      $answer.removeClass('open').slideUp(); //隱藏
      $(this).find('span').text('+');  //隱時符號變-
    } else {
      $answer.addClass('open').slideDown();  //顯示
      $(this).find('span').text('-');  //顯示時符號變-
    }
  });
});
