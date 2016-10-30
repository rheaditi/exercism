function Transcriber(){
	if(this instanceof Transcriber){
		this.toRna = function (dnaString){
			let dna = dnaString.split('');
			let rna = [];
			dna.forEach(function (element, index){
				switch(element) {
					case 'G':
						rna.push('C'); break;
					case 'C':
						rna.push('G'); break;
					case 'T':
						rna.push('A'); break;
					case 'A':
						rna.push('U'); break;
					default:
						throw new Error(`Invalid DNA nucleotide found: ${element}`);
				}
			});
			return rna.join('');
		};
	}
	else return new Transcriber();
}

module.exports = Transcriber;