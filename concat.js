//          task 15

let arr1 = [1,2,3,4,5,6,7]
let arr2 = [1,3,5,7]
let arr3 = arr1.concat(arr2)
let filteredArr = arr3.filter(function(item , index, array){
    return array.indexOf(item) === index
})
console.log(filteredArr)

//         task 16

Array.prototype.myConcat = function(){
    let result = [...this] ;
    for(let i = 0 ; i < arguments.length ; i++){
        for(let j = 0 ; j< arguments[i].length ; j++){
            result[result.length] = arguments[i][j]
        }
    }
    return result ;
}
