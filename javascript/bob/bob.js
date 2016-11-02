function Bob() {

    function silence(text){
        return /^\s*$/.test(text);
    }

    function asking(text){
        return /[?]$/.test(text);
    }

    function shouting(text){
        return text.toUpperCase() === text
            && text.toLowerCase() !== text;
    }

    this.hey = function(input){
        if(shouting(input)){
            return 'Whoa, chill out!';
        }
        else if(asking(input)){
            return 'Sure.';
        }
        else if(silence(input)){
            return 'Fine. Be that way!';
        }
        else {
            return 'Whatever.';
        }
    };
}

module.exports = Bob;
