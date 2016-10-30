function Words() {
	if(this instanceof Words){
		this.count = count;
		return this;
	}
	else {
		return new Words();
	}

	function count(input){
		// let listOfWords = input.match(/\w+/g);
		let listOfWords = input.split(/\s+/);
		let counts = {};
		listOfWords.forEach(function(element){
			element = element.toLowerCase();
			if(element in counts){
				
				if(typeof counts[element] != 'number') {
					counts[element]=0;
				}
				
				counts[element]++;
			}
			else if(element.length > 0){
				counts[element.toString()] = 1;
			}
		});
		return counts;
	}
}
module.exports = Words;