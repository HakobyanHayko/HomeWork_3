//           task 17
function fillMissingNum(array){
    let count = array[array.length-1] ;
    for(let i = 0 ; i < count-1; i++){
        if(array[i+1]-array[i] !== 1){
            array.splice(i+1,0,array[i]+1)

        }
    }
    return array
}
console.log(fillMissingNum([1,2,3,6,7,10,20]))

//             task 18
function removingDuplNums(array){
    for(let i = 0 ; i < array.length ; i++){
        if(array[i] === array[i+1]){
            array.splice(i+1,1)
            i--
        }
    }
    return array
}
console.log(removingDuplNums([1,1,1,1,2,3,4,4,5,5,5,5,5,6,7,8,8,9,9,9,9]))

//               task 19
Array.prototype.mySplice = function (start, delCount = this.length, ...addElem) {
  let splicedArr = [] ;
  for(let i = start ; i < Math.min(this.length , delCount + start) ; i++ ){
    splicedArr.push(this[i])
  }
  if (addElem.length) {
    for (let i = this.length - 1; i >= start; i--) {
      this[i + addElem.length] = this[i];
    }
  }
  return splicedArr;
};
let a = [1,2,3,4,5,]
console.log([1, 2, 3, 4, 5].mySplice(1,3));
