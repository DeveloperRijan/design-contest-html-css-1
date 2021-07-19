$(document).ready(function(){
	//hide and show arrows top more
	$(".top_section .navbar .nav-item  .moreLinks").on('mouseover', function(){
		$(".top_section .navbar .nav-item  .moreLinks .downArrow").hide()
		$(".top_section .navbar .nav-item  .moreLinks .upArrow").show()
	})

	$(".top_section .navbar .nav-item  .moreLinks").on('mouseleave', function(){
		$(".top_section .navbar .nav-item  .moreLinks .downArrow").show()
		$(".top_section .navbar .nav-item  .moreLinks .upArrow").hide()
	})


	//login modal handler
	$(".showLoginModal_").on('click', function(){
		$("#loginModal_").modal('show')
	})
})