$(document).ready(function() {
	$('.clearForm').each(function(){
		var setDefault = $(this).attr('value');
		$(this).attr('rel', setDefault);
	}).focus(function() {
		var currentVal = $(this).attr('value');
		var defaultVal = $(this).attr('rel');
		if(currentVal == defaultVal){
			$(this).attr('value', '');
		}
	}).focusout(function() {
		var inputVal = $(this).attr('value');
		if(inputVal == '') {
			var defaultVal = $(this).attr('rel');
			$(this).attr('value', defaultVal);
		}
	});
});