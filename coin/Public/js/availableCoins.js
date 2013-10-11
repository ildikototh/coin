$.fn.availableCoins = function() {
	var coins = 
		 [
		  { name: "\u00A32", value: 200 },
		  { name: "\u00A31", value: 100 },
		  { name: "50p", value: 50 },
		  { name: "20p", value: 20 },
		  { name: "10p",  value: 10 },
		  { name: "2p", value:2 },
		  { name: "1p", value:1  }
		];
	//reverse sort for the coins
	coins.sort(function (a, b) {
	    if (a.value > b.value) {
	      return -1;
	    }
	    if (a.value < b.value){
	      return 1;
	    }
	    // a must be equal to b
	    return 0;
	});

	return coins;
}