$(document).ready(function(){
    $(".toggle").click(function(){
        $("body").addClass("menuToggle");
      });
  });
  $(document).ready(function(){
    $(".close").click(function(){
        $("body").removeClass("menuToggle");
    });
  });
  
$(window).scroll(function(){
    if ($(window).scrollTop() >= 200) {
        $('header').addClass('fixed-header');
    }
    else {
        $('header').removeClass('fixed-header');
    }
});



$('.moreless-button').click(function() {
  var $this = $(this);
  var $moreText = $this.closest('.hotel-text').find('.moretext');

  $moreText.slideToggle();
  if ($this.html() == 'Les Mindre <i class="fa-solid fa-angle-up"></i>') {
    $this.html('Les Mer <i class="fa-solid fa-angle-down"></i>');
  } else {
    $this.html('Les Mindre <i class="fa-solid fa-angle-up"></i>');
  }
});






