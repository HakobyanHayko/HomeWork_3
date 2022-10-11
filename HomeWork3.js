const employees = [
  {
    firstName: "Arabela",
    lastName: "Fockes",
    email: "afockes0@wired.com",
    salary: "$6.18",
    isEngineer: true,
    gender: "Female",
  },
  {
    firstName: "Bryant",
    lastName: "Marchi",
    email: "bmarchi1@theatlantic.com",
    salary: "$8.05",
    isEngineer: false,
    gender: "Male",
  },
  {
    firstName: "Batholomew",
    lastName: "Eim",
    email: "beim2@goodreads.com",
    salary: "$7.26",
    isEngineer: true,
    gender: "Male",
  },
  {
    firstName: "Ritchie",
    lastName: "Ferreira",
    email: "rferreira3@booking.com",
    salary: "$4.07",
    isEngineer: true,
    gender: "Male",
  },
  {
    firstName: "Kaylyn",
    lastName: "Ivain",
    email: "kivain4@gmpg.org",
    salary: "$5.89",
    isEngineer: false,
    gender: "Female",
  },
  {
    firstName: "Wilhelmina",
    lastName: "Portigall",
    email: "wportigall5@plala.or.jp",
    salary: "$2.06",
    isEngineer: false,
    gender: "Female",
  },
  {
    firstName: "Rouvin",
    lastName: "Gillcrist",
    email: "rgillcrist6@aol.com",
    salary: "$7.29",
    isEngineer: true,
    gender: "Male",
  },
  {
    firstName: "Flemming",
    lastName: "Scroggins",
    email: "fscroggins7@msu.edu",
    salary: "$7.54",
    isEngineer: false,
    gender: "Male",
  },
  {
    firstName: "Sallee",
    lastName: "Schlagh",
    email: "sschlagh8@reuters.com",
    salary: "$2.24",
    isEngineer: false,
    gender: "Female",
  },
  {
    firstName: "Roxine",
    lastName: "Bedo",
    email: "rbedo9@whitehouse.gov",
    salary: "$6.47",
    isEngineer: false,
    gender: "Female",
  },
];

//            toString
//        task 1
// function fullNameEmployees(array){
//    return array.map(item =>{
//         return `${item.firstName} ` + `${item.firstName}`
//     }).toString()
// }
// console.log(fullNameEmployees(employees))

//       task 2
// function getEmailSalary(array) {
//   return array
//     .map((item) => {
//       return `${item.email} :${item.salary} ` ;
//     })
//     .toString();
// }
// console.log(getEmailSalary(employees))

//       task 3

// Array.prototype.myToString = function (sym = ",") {
//   if (!this.length) return "";
//   let result = "";
//   for (let i = 0; i < this.length; i++) {
//     if(i === this.length-1){
//         result +=String(this[i])
//         continue
//      }
//     result += String(this[i]) + sym;
//   }
//   return result;
// };

//           join
// task   4
// function getEmailList(array){
//     return array.map(item =>{
//     return item.email
//     }).join("//")
// }
// console.log(getEmailList(employees))

//     task  5
// function getEmailSalary(array) {
//   return array.map((item) => {
//       return `${item.email} :${item.salary} `;
//     }).join(", ")
// }
// console.log(getEmailSalary(employees))

//    task 6
// Array.prototype.myJoin = function(sym = ","){
//     if (!this.length) return "";
//    let result = "";
//    for (let i = 0; i < this.length; i++) {
//      if(i === this.length-1){
//         result +=String(this[i])
//         continue
//      }
//      result += String(this[i]) + String(sym);
//    }
//    return result;
// }
// console.log([1,2,3].myJoin({}))
//

//       pop
// task 7
// function reverse(array){
//     let reversed = []
//     while(array.length){
//         reversed.push(array.pop())
//     }
//     return reversed ;
// }
// console.log(reverse([1,2,3,4,5]))

//  task 8
// function isPalindrome(string){
//     let letterArr = string.split("")
//     for(let i = 0 ; i< letterArr.length ; i++){
//         if(letterArr[i] !== letterArr.pop()) return false
//     }
//     return true
// }
// console.log(isPalindrome("21212"))

//  task 9
// Array.prototype.myPop = function(){
//     let lastItem = this[this.length-1]
//     --this.length
//     return lastItem
// }

//       push

//   task 10
// function evenDigits(num){
//     let digitArr = num.toString().split("")
//     let evenDig = [] ;
//     for(let i= 0 ; i < digitArr.length ; i++){
//         if(+digitArr[i] % 2===0) evenDig.push(+digitArr[i])
//     }
//     return evenDig ;
// }
// console.log(evenDigits(10))

//  task 11

// function addsEmployees(arr1 , arr2){
//     for(let i = 0 ; i < arr2.length ; i++){
//         arr1.push(arr2[i])
//     }
//     return arr1
// }

//        task 12

// Array.prototype.myPush = function(){
//      for(let i = 0 ; i < arguments.length ; i++){
//          this[this.length] = arguments[i]
//      }
//      return this.length ;
// }

//  task  13
// Array.prototype.myShift = function(){
//     let firstElem = this[0];
//     for(let i = 0 ; i < this.length ; i++){
//         this[i] = this[i+1]
//     }
//     --this.length
//     return firstElem
// }

//            task 14

// Array.prototype.myUnshift = function(){
//     for(let i = this.length-1  ; i >= 0 ; i--){
//         this[i + arguments.length] = this[i]
//     }
//     for(let i = 0  ; i < arguments.length ; i++){
//         this[i]= arguments[i]
//     }
//     return this.length ;
// }

//          task 15

// let arr1 = [1,2,3,4,5,6,7]
// let arr2 = [1,3,5,7]
// let arr3 = arr1.concat(arr2)
// let filteredArr = arr3.filter(function(item , index, array){
//     return array.indexOf(item) === index
// })
// console.log(filteredArr)

//         task 16

// Array.prototype.myConcat = function(){
//     let result = [...this] ;
//     for(let i = 0 ; i < arguments.length ; i++){
//         for(let j = 0 ; j< arguments[i].length ; j++){
//             result[result.length] = arguments[i][j]
//         }
//     }
//     return result ;
// }

//           task 17
// function fillMissingNum(array){
//     let count = array[array.length-1] ;
//     for(let i = 0 ; i < count-1; i++){
//         if(array[i+1]-array[i] !== 1){
//             array.splice(i+1,0,array[i]+1)

//         }
//     }
//     return array
// }
// console.log(fillMissingNum([1,2,3,6,7,10,20]))

//             task 18
// function removingDuplNums(array){
//     for(let i = 0 ; i < array.length ; i++){
//         if(array[i] === array[i+1]){
//             array.splice(i+1,1)
//             i--
//         }
//     }
//     return array
// }
// console.log(removingDuplNums([1,1,1,1,2,3,4,4,5,5,5,5,5,6,7,8,8,9,9,9,9]))

//               task 19
// Array.prototype.mySplice = function (start, delCount = this.length, ...addElem) {
//   let splicedArr = [] ;
//   for(let i = start ; i < Math.min(this.length , delCount + start) ; i++ ){
//     splicedArr.push(this[i])
//   }
//   if (addElem.length) {
//     for (let i = this.length - 1; i >= start; i--) {
//       this[i + addElem.length] = this[i];
//     }
//   }
//   return splicedArr;
// };
// let a = [1,2,3,4,5,]
//console.log([1, 2, 3, 4, 5].mySplice(1,3));
// console.log(a.splice(1))
// console.log(a)




//        slice

//                     task 20
// function getClone(array){
//     return array.slice()
// }
// console.log(getClone([1,2,3,4,5]))

// //                     task 21
// function getLastElem(array ,n){
//    if(!n) return array[array.length-1]
//    return array.slice(array.length-n)
// }
// console.log(getLastElem([1,2,3,4,5,6,7,8,9,10] , 5))

//                 task 22
// function getFirstElem(array ,n){
//    if(!n) return array[0]
//    return array.slice(0,n)
// }
// console.log(getFirstElem([1,2,3,4,5,6,7,8,9,10] , 5))

//                task 23
// Array.prototype.mySlice = function(start=0, end = this.length){
//    let result = [] ;
//    for(let i = start ; i < end ; i++){
//       result.push(this[i])
//    }
//    return result ;
// }
// console.log([1,2,3,4].mySlice())


//         sort   
//              task 24 
// function getMaxNum(array){
//   array.sort((a , b) => a-b)
//   return array[array.length-1]
// }
// console.log(getMaxNum([1,2,5,7,1,4,9,10,54,14,1,2,4]))

//              task 25
// function getMinNum(array){
//   array.sort((a , b) => b - a)
//   return array[array.length-1]
// }
// console.log(getMinNum([70,2,5,7,1,4,9,10,54,14,1,2,4]))

//                 task 26

// function sortNames(array){
//   return array.map(item => `${item.firstName} ${item.lastName}`).sort((a , b) => a - b)
// }
// console.log(sortNames(employees))

//        task 27
// Array.prototype.mySort = function(cb) {
//   for (let i = 0; i < this.length; i++) {
//       for (let j = 0; j < this.length - 1; j++) {
//           if (cb? cb(this[j], this[j + 1]) > 0: this[j].toString() > this[j + 1].toString()) {
//               const temp = this[j + 1];
//               this[j + 1] = this[j];
//               this[j] = temp;
//           }
//       }
//   }
//   return this;
// }
// console.log([1,2,3,4,5,6,7,8].mySort((a ,b) => b -a))


//      reverse
//            task 28 
// function isPalindrome(string){
//    return string=== string.split("").reverse().join("")

// }
// console.log(isPalindrome("aaffggffaa1"))

//             map
//                  task 29
// function getCloneArr(array){
//    return array.map(item => item)
// }
// console.log(getCloneArr([1,2,3,4]))

//                   task 30
// function getOnlyNames(array){
//    return array.map(item => item.firstName)
// }
// console.log(getOnlyNames(employees)) ;

//            filter

//         task 31

// function CloneFromFilter(array){
//    return array.filter((item , index , array) => {
//       return array.includes(item)
//    })
// }
// console.log(CloneFromFilter([0,1,2,3,4, false]))

//          task 32
// function getGreaterSalaryThen(array ,n){
//    return array.filter(item => item.salary > `$${n}`)
// }
// console.log(getGreaterSalaryThen(employees, 5))

//          task 33 

// Array.prototype.myFilter= function(cb){
//    let filteredArr = []
//    for(let i = 0 ; i < this.length ; i++){
//       if(cb(this[i],i,this)){
//          filteredArr.push(this[i])
//       }
//    }
//    return filteredArr
// }

//             reduce 

//                task 34
// function getSumSalary(array){
//    return array.map(item => Number(item.salary.slice(1))).reduce((pre , curr) => pre + curr)
// }
// console.log(getSumSalary(employees))

//              task 35
// function getEmail(array){
//       return array.map(item => item.email).reduce((pre , curr) => pre + curr + "//")
//    }
//    console.log(getEmail(employees))


//               every
//          task 36
// function salaryMoreThen(array,n){
//   return array.every(item => Number(item.salary.slice(1) > n))
// }
// console.log(salaryMoreThen(employees , 1))

//         task  37
// function allEngineers(array){
//   return array.every(item => item.isEngineer === true)
// }
// console.log(allEngineers(employees))

//          task 38
// function allMale(array){
//   return array.every(item => item.gender === "Male")
// }
// console.log(allMale(employees))

//                some
//            task 39
// function haveFemales(array){
//   foo = item => item.gender === "Female" ;
//   return array.some(foo)
// }
// console.log(haveFemales(employees))

// //                 task 40
// function haveEngineer(array){
//   foo = item => item.isEngineer === true ;
//   return array.some(foo)
// }
// console.log(haveEngineer(employees))

//     indexOf
//          task  41
// function inArray(array , elem){
//    return array.indexOf(elem)
// }

//     find
//              task 42
// function findEmployeeByName(array,name){
//    return array.map(item => item.firstName + " " + item.lastName).find(name)
// }

//              task 43
// function findEmployee(array , filter){
//    return 
// }

//                       from
//            task 44
// function getCloneFrom(array){
//   return Array.from(array)
// }
// console.log(getCloneFrom([1,2,3,4,5]))

//                    task  46
//   function turnArr(string){
//     return Array.from(string)
//   }
// console.log(turnArr("Hayk"))


// includec 
//     task 47
// Array.prototype.myIncludes = function(elem , start = 0 ){ 
//    for(let i = start ; i < this.length;  i++){
//       if(this[i] === elem) return true
//    }
//    return false ;
// }
// console.log([1,2,3,4,5,6,7,8,9].myIncludes(5,6))

//      GENERAL

//                       task 49 
// function findDeference(arr1 , arr2){
//    let result = []
//    for(let i = 0 ; i< Math.max(arr1.length , arr2.length) ; i++){
//       if(arr1[i] !== arr2[i]){
//          result.push(`arr1[${i}]=${arr1[i]} : arr2[${i}]=${arr2[i]}`)
//       }
//    }
//    return result
// }
// console.log(findDeference([1,2,3,4,5,6],[1,2,4,5,6,7,8,9]))

//                    task 50
// function prefillArray(n , item){
//    let arr = []
//    for(let i = 0 ; i < n ; i++){
//       arr.push(item)
//    }
//    return arr
// }
//  console.log(prefillArray(10 , true)

function calculateSum(){
 return Array.from(arguments).reduce((a,b) => a + b)
}
console.log(calculateSum(1,2,3,4,5 ))