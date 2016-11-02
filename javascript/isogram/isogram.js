function Isogram(input){
    if(this instanceof Isogram){
        this.word = input;
        this.isIsogram = function (){
            let chars = this.word.split(/[\s-]*/);
            let counts = {};

            for(let i in chars){
                let element = chars[i].toLowerCase();
                if(element in counts){
                    return false;
                }
                else {
                    counts[element] = true;
                }
            }
            return true;
        };
        return this;
    }
    else {
        return new Isogram(input);
    }
}

module.exports = Isogram;
