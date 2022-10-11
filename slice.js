//                     task 20
function getClone(array){
    return array.slice()
}
// console.log(getClone([1,2,3,4,5]))

// //                     task 21
function getLastElem(array ,n){
   if(!n) return array[array.length-1]
   return array.slice(array.length-n)
}
console.log(getLastElem([1,2,3,4,5,6,7,8,9,10] , 5))

                task 22
function getFirstElem(array ,n){
   if(!n) return array[0]
   return array.slice(0,n)
}
// console.log(getFirstElem([1,2,3,4,5,6,7,8,9,10] , 5))

//                task 23
Array.prototype.mySlice = function(start=0, end = this.length){
   let result = [] ;
   for(let i = start ; i < end ; i++){
      result.push(this[i])
   }
   return result ;
}
// console.log([1,2,3,4].mySlice())
