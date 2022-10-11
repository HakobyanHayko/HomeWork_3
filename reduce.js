//                task 34
function getSumSalary(array){
   return array.map(item => Number(item.salary.slice(1))).reduce((pre , curr) => pre + curr)
}
// console.log(getSumSalary(employees))

//              task 35
function getEmail(array){
      return array.map(item => item.email).reduce((pre , curr) => pre + curr + "//")
   }
//    console.log(getEmail(employees))
