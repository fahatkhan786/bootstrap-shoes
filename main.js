$(window).scroll(function(){
	var scroll = $(window).scrollTop();
	if(scroll < 60){
		$('.header-1').removeclass('fixedbar');
	}
	else{
		$('.header-1').addclass('fixedbar');
	}
  });

var slideindex = 1;
showSlides(slideindex);
function plusSlides(n){
	showSlides(slideindex += n);
}
function showSlides(n){
	var i;
	var slides =  getElementByClassName('slides');
	if (n > slides.length) {
		slideindex = 1
	}
	if (n < 1) {
		slideindex = slides.length
	}
	for (var i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slides[slideindex-1].style.display = "block";
}