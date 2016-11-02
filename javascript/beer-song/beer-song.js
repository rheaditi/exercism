module.exports = function Song(){
    if(!(this instanceof Song)){
        return new Song();
    }

    this.verse = (number) => {
        if(number === 0){
            return `No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n`;
        }
        else if(number === 1){
            return `1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n`;
        }
        else if(number === 2){
            return `2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n`;
        }
        else if(number <= 99){
            return `${number} bottles of beer on the wall, ${number} bottles of beer.\nTake one down and pass it around, ${number-1} bottles of beer on the wall.\n`;
        }
    };

    this.sing = (start, end) => {
        end = end ? end : 0;
        let song = '';
        for(let i=start; i>=end; i--){
            song += this.verse(i);
            if(i!=end) song += '\n';
        }
        return song;
    };
    return this;
};
