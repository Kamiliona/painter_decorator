const Room = function(size, painted){
    this.size = size;
    this.painted = false
}

Room.prototype.roomNotPainted = function(){
    this.size = 0 
}

module.exports = Room;