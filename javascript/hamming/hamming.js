function Hamming() {
    if(this instanceof Hamming){
        this.compute = compute;
        return this;
    }
    else {
        return new Hamming();
    }
}

function compute(a,b) {
    let first = a.split(''), second = b.split('');
    let distance = 0;
    if(first.length != second.length){
        throw new Error('DNA strands must be of equal length.');
    }
    first.forEach(function (element, index){
        if(first[index] != second[index]){
            distance = distance + 1;
        }
    });
    return distance;
}

module.exports = Hamming;
