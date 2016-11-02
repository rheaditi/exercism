var Gigasecond = function(time) {
    this.time = time;
};

Gigasecond.prototype.date = function() {
    return new Date((this.time).getTime()+1000000000*1000);
};

module.exports = Gigasecond;
