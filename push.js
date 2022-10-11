//       push

//           task 10
function evenDigits(num){
    let digitArr = num.toString().split("")
    let evenDig = [] ;
    for(let i= 0 ; i < digitArr.length ; i++){
        if(+digitArr[i] % 2===0) evenDig.push(+digitArr[i])
    }
    return evenDig ;
}
// console.log(evenDigits(10))

//             task 11

function addsEmployees(arr1 , arr2){
    for(let i = 0 ; i < arr2.length ; i++){
        arr1.push(arr2[i])
    }
    return arr1
}

//              task 12

Array.prototype.myPush = function(){
     for(let i = 0 ; i < arguments.length ; i++){
         this[this.length] = arguments[i]
     }
     return this.length ;
}
