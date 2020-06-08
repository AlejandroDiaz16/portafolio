function getWidth(){
	return $(window).width();
}
$('.burger-button').click(function(){
	if(getWidth()<=767){
		console.log("si sirve");
		if($('#showMenu').hasClass('is-Active')){
			$('#showMenu').removeClass("is-Active");
		}else {
			console.log("no sirve");
			$('#showMenu').addClass("is-Active");
		}
	}
});