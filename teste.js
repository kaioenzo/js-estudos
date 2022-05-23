// function teste(string){

//     const result = string
//       .match(/\w+/g)
//       .sort((a, b) => b.length - a.length)[0];

//     return result
// }


//   console.log(teste('Eu sou maior@@&!! que todasss'));

// const testes = "never odd or even";
// const ignoreSpaces = str => str.split(' ').join('');
// const checkPalindrome = str => ignoreSpaces(str) === ignoreSpaces(str.split('').reverse().join(''));
// const resultados = checkPalindrome(testes);
// console.log(resultados);


// function FindIntersection(strArr) {
//     let elementListOne = strArr[0].split(',');
//     let elementListTwo = strArr[1].split(',');

//     // console.log(elementListOne);


//     let matchingResult = elementListOne.filter(e1 => {
//       let searchIndex = elementListTwo.findIndex(e2 => e1 == e2);
//       if (searchIndex != -1) {
//         return e1;
//       }
//     });

//     strArr = matchingResult.sort((a, b) => a - b).join(',').replace(/ /g,"")
//     //
//     // code goes here
//     return strArr;

//   }
//   console.log(FindIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]))


//[5,5,2,2,1] saber qual elemento se repete mais
// function SimpleMode(arr){
//     var mode=0;
//     var count2=0;
//     for(var i=0; i<arr.length; i++){
//         var count=0;
//         for(var j=0; j<arr.length; j++){
//             if(arr[i] == arr[j] && j!==i){
//                 count++;
//             }
//             if(count>count2){
//                 mode = arr[i];
//                 count2 = count;
//                 count =0;
//             }
//         }
//     }
//     if(count2==0){
//         return -1;
//         }
//     return mode;
//     }
//     console.log(SimpleMode([3,4,1,6,10]))



function FibonacciChecker(num) {
    if(num===2||num===3){
      return "yes";
    }
     var num1=0;
      var num2=1;
      var num3=1;
    for(var i=0; i<=num; i++){
        if(num1===num){return "yes";}
          num1 = num2;
          num2 = num3;
          num3 = num1+num2;
        }
    return "no";

  }
  console.log(FibonacciChecker(34))