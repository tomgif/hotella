$(function() {  

	if($('.preloader').length > 0)
		$(window).load(function(){
			$('.preloader').fadeOut('slow', function(){
				$(this).hide('slow', function(){
					//загружаем все страницы
					$('.overlay').show();
					$('.page').addClass('page--overlay')
					$('.greeting').fadeIn('slow');
				});
			});
		});

});