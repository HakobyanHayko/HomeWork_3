//           task 47
Array.prototype.myIncludes = function(elem , start = 0 ){ 
   for(let i = start ; i < this.length;  i++){
      if(this[i] === elem) return true
   }
   return false ;
}
console.log([1,2,3,4,5,6,7,8,9].myIncludes(5,6))
