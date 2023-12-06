                               //  Question -1
//        Write an algorithm that takes an array of numbers as input and calculates 
//the sum of those numbers
// Define the Time Complexity of that algorithm and determine what the lowest possible 
//Time Complexity is for this problem.

    // Solution-1 using array destructuring method

    //  const myNumbers = [1,2,3,4,5,6,7,8,9,10]
    //  const[a,b,c,d,e,f,g,h,i,j]=myNumbers;
    //  console.log(a+b+c+d+e+f+g+h+i+j)



      //Solution-2 using reduce method to sum array numbers
    //   const myArray = [1,2,3,4,5,6,7,8,9,10]
    //  const myMap = myArray.reduce((accumulator,current)=>{
    //              return accumulator+current,0;
    //  })
    //      console.log(myMap)




            //  Solution-3 using for of loop inside the functions and passed the array variable as 
            // a parameter and argument in the form of numbers of array while calling the functions

          // const myFunction=(myNewArrays)=>{
          //   let initial = 0;
          //   for(let myNewArray of myNewArrays){
          //     let result = initial+myNewArray
          //     console.log(result)
          //   }
               
          // }
          //     myFunction([11,11]);
//           


          // Question-2
          // Write a function which takes a number(n) as an argument and then returns sum from 1 up to all numbers in the range.
// Define the Time Complexity of that algorithm and determine what the lowest possible Time Complexity is for this problem.
        
                          // Solution-1 using for loop
                          // const mySecondFunction=(n)=>{
                          //   let sum = 0;
                          //   for(i=1; i<=n; i++){
                          //     console.log(sum + i)
                          //   }
                          // }
                          //     mySecondFunction(5)




                          // Solution 2 using do-while loop
                          // const myThirdFunction=(n)=>{
                          //   let sum=0;
                          //   do{
                          //       let i =1;
                          //     console.log(sum+i);
                          //     i++;
                          //   }
                          //    while(i<=n) 
                              
                          // }

                          //  myThirdFunction()

                          // Solution:3 using while loop

                          // const myThirdFunction=(n)=>{
                          //   let sum=0;
                          
                          //       let i =1;
                          //     while(i<=n)
                          //     console.log(sum+i);
                          //     i++;
                          //   }

                          //  myThirdFunction()