                                <!-- Problem No.1 -->
       <!--     Write an algorithm that takes an array of numbers as input and calculates
                            the sum of those numbers -->

                 <!--   Solution-1 using array destructuring method

                          const myNumbers = [1,2,3,4,5,6,7,8,9,10]
                          const[a,b,c,d,e,f,g,h,i,j]=myNumbers;
                          console.log(a+b+c+d+e+f+g+h+i+j) -->

        Time Complexity: The Time Complexity of this code is Big-O Notion (O-1 ) which means it has a
       constant time Complexity.

        Reason : Since the array myNumbers has a fixed size of 10 elements, regardless of the size of the input, the time it takes to execute this code remains constant. The number of elements in myNumbers does not affect the number of operations performed in the code. Therefore, the time complexity is considered O(1), or constant time complexity.

                            <!-- Solution-2 using reduce method to sum array numbers. -->

                                 const myArray = [1,2,3,4,5,6,7,8,9,10]
                            const myMap = myArray.reduce((accumulator,current)=>{
                                     return accumulator+current,0;
                                       })
                                          console.log(myMap)
       Time Complexity: The time complexity of this code is O(n), where n is the number of elements in the array myArray.
        Reason : The time complexity of the reduce method is determined by the number of iterations required, which is equal to the number of elements in the array. Therefore, the time complexity of the reduce method is O(n), where n is the number of elements in myArray

                                         <!-- Problem-3 -->
     <!-- Write a function which takes a number(n) as an argument and then returns sum from 1 up to all numbers in the range. -->

                           <!-- Solution-1 using for loop -->

                          const mySecondFunction=(n)=>{
                            let sum = 0;
                            for(i=1; i<=n; i++){
                              console.log(sum + i)
                            }
                          }
                              mySecondFunction(5)

                     Time Complexity: The time complexity of this code is O(n), where n is the value passed to the function mySecondFunction.the overall time complexity of this code is O(n).

                                Js Aassghinment Week-2/Day-1

                                function validate() {
                          const inputs = document.querySelectorAll("input");
                            let validator = true;
                          inputs.forEach((i) => {
                        Code inside the forEach loop
   
                        });
                       return validator;
                            }
                    Time Complexity : In the provided code, the section that has a time complexity of O(n) is the iteration over the inputs. Rest code time complexity is constant.


                                           
                                    Js Aassghinment Week-2/Day-4

                                    <!-- Calculate Tip When Click On Tip Percentage Button -->
                                             buttons.forEach((button) => {
                                            button.addEventListener("click", (e) => {
                                            Code inside the forEach loop
  
                                                });
                                                     });

                                          <!-- Validate Number of People Input -->
                                             numberOfPeople.addEventListener("input", () => {
                                                 Code inside the event listener
  
                                                        });

            Explain:   In the code, the sections with time complexity O(n) are the event listeners that involve iterating of buttons or an input field. 
            Explain:   In the code, the sections with time complexity O(n) are the event listeners that involve iterating of buttons or an input field.

            
