//       pop
//        task 7
function reverse(array){
    let reversed = []
    while(array.length){
        reversed.push(array.pop())
    }
    return reversed ;
}
console.log(reverse([1,2,3,4,5]))

//          task 8
function isPalindrome(string){
    let letterArr = string.split("")
    for(let i = 0 ; i< letterArr.length ; i++){
        if(letterArr[i] !== letterArr.pop()) return false
    }
    return true
}
console.log(isPalindrome("21212"))

//          task 9
Array.prototype.myPop = function(){
    let lastItem = this[this.length-1]
    --this.length
    return lastItem
}
