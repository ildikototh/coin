$.fn.validate = function() {
    this.filter(function() {
    	if(this.value.match(/£?([0-9])+(.)?([0-9])*(p)?$/)){
    		return this.value;
    	} else {
    		return false;
    	}
    });
};
