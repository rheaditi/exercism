module.exports = function Anagram(input){
    if(!(this instanceof Anagram)){
        return new Anagram(input);
    }
    this.word = input.toLowerCase();
    this.sortString = (str) => {
        return str
                .toLowerCase()
                .split('')
                .sort()
                .join('')
    };
    this.matches = function(words){
        words = (typeof arguments != 'array') ? Array.prototype.slice.call(arguments,1) : words;
        let results = [];
        let wordSorted = this.sortString(input);
        Array.prototype.forEach.call(words, (element) => {
            element = element.toLowerCase();
            if( wordSorted === this.sortString(element) && element != this.word){
                results.push(element);
            }
        });
        return results;
    };
    return this;
};
