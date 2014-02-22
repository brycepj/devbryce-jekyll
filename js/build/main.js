$(document).ready(function(){


//Masonry Configuration and Execution on Home Page

(function(){
   var blogHome = new MasonryConfig();
	blogHome.initHome();

})();


function MasonryConfig() {

	var $content = $('.content');

	this.initHome = function(){
		$content.masonry({
			"gutter":20,
			isFitWidth:true,
			transitionDuration:'0',
			itemSelector:'.post-preview',
			isInitLayout: true
		});
	};

}










});