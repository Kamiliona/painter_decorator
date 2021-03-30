const Paint = function(litres) {
    this.litres = litres
}

Paint.prototype.emptyCan = function(){
    this.litres = 0 
}

module.exports = Paint;