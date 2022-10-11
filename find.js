//              task 42
function findEmployeeByName(array,name){
   return array.map(item => item.firstName + " " + item.lastName).find(name)
}
