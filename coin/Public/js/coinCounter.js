$.fn.coinCounter = function(amount,coins){
	var quo = new Array();
	var coinText = '';
	var amountInP = '';

	//remove the last p if it's in an  amount
	if (amount.slice(-1) == 'p' ){
		amount = amount.substring(0, amount.length - 1);
		//when the amount also contains pound symbol remove that but the result will counted in pound
		if (amount.indexOf('\u00A3') != -1){
			amount = amount.replace(/\u00A3/g, '');
			amountInP = 100*amount;
		} else if (amount.indexOf('.') != -1){
			amountInP = amount;
		}
	} else {
		amount = amount.replace(/\u00A3/g, '');
		amountInP = 100*amount;
	}
	
	//convert the number into a penny amount
	$.each(coins, function(item) {
		//quotient of the coin in the left-over
		quo[coins[item].name] = Math.floor(amountInP/coins[item].value);
		//left-over
		amountInP = amountInP-(quo[coins[item].name]*coins[item].value);
		if (quo[coins[item].name]!=0){
			coinText = coinText + quo[coins[item].name] + '*' + coins[item].name +', ' ; 
		}
		//if no left-over then sip
		if (amountInP == 0) {
			return false;
		}
	});
	
	return coinText;
}