//              task 24 
function getMaxNum(array){
  array.sort((a , b) => a-b)
  return array[array.length-1]
}
// console.log(getMaxNum([1,2,5,7,1,4,9,10,54,14,1,2,4]))

//              task 25
function getMinNum(array){
  array.sort((a , b) => b - a)
  return array[array.length-1]
}
// console.log(getMinNum([70,2,5,7,1,4,9,10,54,14,1,2,4]))

//                 task 26

function sortNames(array){
  return array.map(item => `${item.firstName} ${item.lastName}`).sort((a , b) => a - b)
}
// console.log(sortNames(employees))

//        task 27
Array.prototype.mySort = function(cb) {
  for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - 1; j++) {
          if (cb? cb(this[j], this[j + 1]) > 0: this[j].toString() > this[j + 1].toString()) {
              const temp = this[j + 1];
              this[j + 1] = this[j];
              this[j] = temp;
          }
      }
  }
  return this;
}
// console.log([1,2,3,4,5,6,7,8].mySort((a ,b) => b -a))
