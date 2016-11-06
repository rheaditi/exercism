module.exports = function PhoneNumber(input) {
    if(!(this instanceof PhoneNumber)){
        return new PhoneNumber(input);
    }
    this.digits = (() => {
        return input.match(/[0-9]/g)
            .join('');
    })();
    this.number = () => {
        if(this.digits.length == 11 && this.digits[0] == '1')
            return this.digits.slice(1);
        if(this.digits.length != 10)
            return '0000000000';
        else
            return this.digits;
    };
    this.areaCode = () => {
        return this.digits.slice(0,3);
    };

    this.toString = () => {
        let number = this.number();
        return `(${number.slice(0,3)}) ${number.slice(3,6)}-${number.slice(6)}`;
    };
    return this;
}
