//         task 31

function CloneFromFilter(array){
   return array.filter((item , index , array) => {
      return array.includes(item)
   })
}
// console.log(CloneFromFilter([0,1,2,3,4, false]))

//          task 32
function getGreaterSalaryThen(array ,n){
   return array.filter(item => item.salary > `$${n}`)
}
// console.log(getGreaterSalaryThen(employees, 5))

//          task 33 

Array.prototype.myFilter= function(cb){
   let filteredArr = []
   for(let i = 0 ; i < this.length ; i++){
      if(cb(this[i],i,this)){
         filteredArr.push(this[i])
      }
   }
   return filteredArr
}
