//            task 39
function haveFemales(array){
  foo = item => item.gender === "Female" ;
  return array.some(foo)
}
// console.log(haveFemales(employees))

// //                 task 40
function haveEngineer(array){
  foo = item => item.isEngineer === true ;
  return array.some(foo)
}
// console.log(haveEngineer(employees))
