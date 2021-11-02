//1
function areBothSame(argOne, argTwo){
  return argOne == argTwo ? true : false ; 
}

//2
function areBothEqual(argOne, argTwo){
  return argOne === argTwo ? true : false ; 
}

//3
function areAllFourEqual(argOne, argTwo, argThree,argFour){
  return argOne === argTwo && argThree === argFour ? argOne === argThree ? true : false : false ;
}


//4
function areAllFourSame(argOne, argTwo, argThree,argFour){
  return argOne == argTwo && argThree == argFour ? argOne == argThree ? true : false : false ;
}

//5
function areAllFourSameOrEqual(argOne, argTwo, argThree,argFour){
  //if same value but not data type
    //return string 'same'
    if(argOne===argTwo && argThree ===argFour){
      if(argOne===argThree){
        return 'equal';
      }
    }
 //if same value and data type
    //return string 'equal'
    if(argOne==argTwo && argThree ==argFour){
      if(argOne==argThree){
        return 'same';
      }
    }
    
 //else
  //return null
  return null;
}

// console.log(areBothSame(true, 1))                       // returns true
// console.log(areBothSame("2", 2))                        // returns true
// console.log(areBothSame("5", 2))                        // returns false
// console.log(areBothEqual("2", "2"))                     // returns true
// console.log(areBothEqual("2", 2))                       // returns false 
// console.log(areBothEqual(true, 1))                      // returns false 
// console.log(areBothEqual(7, 7))                         // returns true  
// console.log(areAllFourEqual("2", "2", "2", "2"))        // returns true
// console.log(areAllFourEqual("2", "2", "2", 2))          // returns false 
// console.log(areAllFourSame("2", "2", "2", "2"))         // returns true
// console.log(areAllFourSame("2", "2", "2", 2))           // returns true 
// console.log(areAllFourSame(true, true, 1, "1"))         // returns true
// console.log(areAllFourSameOrEqual("2", "2", "2", "2"))  // returns "equal"
// console.log(areAllFourSameOrEqual(true, true, 1, "1"))  // returns "same"
// console.log(areAllFourSameOrEqual(true, false, 1, "1")) // returns null