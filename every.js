//          task 36
function salaryMoreThen(array,n){
  return array.every(item => Number(item.salary.slice(1) > n))
}
// console.log(salaryMoreThen(employees , 1))

//         task  37
function allEngineers(array){
  return array.every(item => item.isEngineer === true)
}
// console.log(allEngineers(employees))

//          task 38
function allMale(array){
  return array.every(item => item.gender === "Male")
}
// console.log(allMale(employees))
