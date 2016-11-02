module.exports = function Pangram(input){
    if(!(this instanceof Pangram)){
        return new Pangram(input);
    }

    this.sentence = input;
    this.ALPHABET = (function(){
        return 'abcdefghijklmnopqrstuvwxyz'
              .split('')
              .map((element) => new RegExp(element,'g'));
    })();

    this.isPangram = function(){
        if(!this.sentence || !this.sentence.length){
            return false;
        }
        let letters = this.sentence
                    .toLowerCase()
                    .match(/[a-z]/g)
                    .join('');
        for(let i in this.ALPHABET){
            if(! this.ALPHABET[i].test(letters) ){
                return false;
            }
        }
        return true;
    };
    return this;
};
