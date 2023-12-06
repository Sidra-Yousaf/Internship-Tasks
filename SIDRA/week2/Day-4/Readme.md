                                Week-2 Day-4 Doc
 I have designed the user interface (UI) for two cards using custom HTML and CSS. Additionally, I have developed a Tip Calculator app using pure JavaScript. In the app, I retrieve the input field values for the bill amount, number of people, and custom tip percentage.

To handle the tip percentage buttons, I utilize a forEach loop to iterate through each button. I extract the text data and remove the percentage sign from it. If the bill amount field is empty, the function returns early. Similarly, if the number of people field is empty, I set its value to 1 by default.

Next, I call the calculateTip function, passing in the bill amount, number of people, and tip percentage variables as parameters.

I add a blur event listener to the custom tip percentage input field. If the entered value exceeds 100, it automatically sets it to 100 and updates the input field value accordingly. This triggers another call to the calculateTip function.

I attach an onclick event listener to the number of people input field and implement validation. If no value is selected, a "Can't be empty" message is displayed. Once the user selects a value, the message disappears.

The formula for calculating the tip amount per person and the total bill is applied within the calculateTip function.

Finally, a reset button is included to clear all the input fields when clicked.

                         Live Link is 
                        abject-can.surge.sh
