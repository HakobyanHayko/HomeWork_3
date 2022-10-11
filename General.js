//                       task 49 
function findDeference(arr1 , arr2){
   let result = []
   for(let i = 0 ; i< Math.max(arr1.length , arr2.length) ; i++){
      if(arr1[i] !== arr2[i]){
         result.push(`arr1[${i}]=${arr1[i]} : arr2[${i}]=${arr2[i]}`)
      }
   }
   return result
}
// console.log(findDeference([1,2,3,4,5,6],[1,2,4,5,6,7,8,9]))

//                    task 50
function prefillArray(n , item){
   let arr = []
   for(let i = 0 ; i < n ; i++){
      arr.push(item)
   }
   return arr
}
//  console.log(prefillArray(10 , true)
