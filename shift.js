//            task  13
Array.prototype.myShift = function(){
    let firstElem = this[0];
    for(let i = 0 ; i < this.length ; i++){
        this[i] = this[i+1]
    }
    --this.length
    return firstElem
}
