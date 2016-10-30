function Year(input) {
	input = input || 1970;

	if(this instanceof Year){
		var self = this;
		this.value = input;
		this.isLeap = function(){
			if( (self.value%4 === 0 && self.value%100 != 0) || (self.value%400 === 0) ){
				return true;
			}
			else {
				return false;
			}
		};
		return this;
	}
	else {
		return new Year(input);
	}
}

module.exports = Year;
