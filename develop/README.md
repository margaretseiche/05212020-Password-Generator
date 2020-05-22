# 05212020-Password-Generator

Stylistically, I changed the colors a bit, as I knew that I would be looking at this for awhile.

I also made it look a little more like a real page, changing the header and text to something more like
what a company might include on a page like this.

For Javascript:

I set the following variables.

    var passwordLength = 0;
    var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var number = ["0","1","2","3","4","5","6","7","8","9"];
    var special = ["!","@","#","$","%","^","*","?"];

    To confirm that the arrays were input correctly (for instance not skipping a letter in the alphabet), I console.logged them and the array lengths.

    I also created an empty array as the holder for whichever character types the user selects.
        var pooledArray = [];

The event listener for the generate button is defined as 
    generateBtn.addEventListener("click", writePassword);    

So I went back to start the
    function writePassword() {

    First, I used a series of prompts (with while statement) to get the desired password length.
        //ATTEMPTED 2 WHILE STATEMENTS, ONE ABOUT LENGTH AND ONE ABOUT 'NOT A NUMBER'.  
        //BUT IT DOES NOT LOOP.  SO COMBINED WHILE CONDITIONS.

        //IF SOMEONE INPUT H, THAT FAILS AND THERE WOULD BE A PROMPT TO CORRECT IT.  BUT THEN THAT WOULD BE IN SECOND WHILE STATEMENT.
        //IN THAT CASE, THE FIRST WHILE CONDITION WAS ALREADY PASSED (AND NOT LOOPED TO CHECK AGAIN), 
        //SO THERE IS NOTHING PREVENTING INPUT OF A NUMBER THAT IS TOO BIG OR TOO SMALL.
        //while(isNaN(passwordLength)) {
        //var passwordLengthNotNumber = alert ("That is not a number.");
        //passwordLength = prompt("Please pick a number between 8 and 128.");    
        //}  


    Then, there were a few confirm questions about whether the user wants to include each type of character.    

    I used the responses to set the array that would be used as the pool for generating a password.  To start, the pooled array was empty.I used if statements to confirm each character type and concatenated the respective array into pooledArray if the user wanted to include the specific set.  I console.logged the confirm responses and the final array to verify that everything worked.  