$.fn.inputChecker = function(){
	var messageTextElement = $('[data-role="result"]');
	//checking keypressing
	$(this).keypress(function(e) {
		messageTextElement.html('').hide();
		//when enter pressed
        if(e.which == 13) {
        	//prevent page reload
        	e.preventDefault();
        	var amount = $(this).val();
        	if (amount) {
        		if(amount.match(/£?([0-9])+(.)?([0-9])*(p)?$/))
        		{
        			var coins = $(this).availableCoins();
        			messageTextElement.html($(this).coinCounter(amount,coins)).show();
        		}
        		else
    			{
        			messageTextElement.html('wrong input parameters').show();
    			}
        	} else {
        		messageTextElement.html('empty string').show();
        	}
        }
    });
	};