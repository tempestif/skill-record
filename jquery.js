// $(window).load(function () {
//     // 消えるタイミングはお好みで
//     $('.loading').fadeOut(300);
// });
$('.loading').delay(1300).fadeOut(300);
$('.haikei').delay(1300).fadeOut(300);
// $('.open').delay(1500).fadeIn(300);
// $('.open').delay(1400).fadeOut(300);
$('#slider').delay(3600).fadeOut(1);
$('.txt').delay(3800).fadeIn(900);
$('.txt').delay(4600).fadeOut(1500);
$('.kaiten').delay(4500).fadeOut(1500);


// 要素が見えたら...
$(window).on('scroll' , function(){
  if ($("select-btn").is(":hidden")) {
    $('select-btn').hidden();
  } else {
    $('select-btn').fadeIn();
  }
});
