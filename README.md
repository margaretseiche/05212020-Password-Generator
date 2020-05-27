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

    To confirm that the arrays were input correctly (for instance not skipping a letter in the alphabet), I console.logged 
    them and the array lengths.

    I also created an empty array as the holder for whichever character types the user selects.
        var pooledArray = [];

The event listener for the generate button is defined as 
    generateBtn.addEventListener("click", writePassword);    

So I went back to start the
    function writePassword() {

    First, I used a series of prompts (with while statement) to get the desired password length.
        //ATTEMPTED 2 WHILE STATEMENTS, ONE ABOUT LENGTH AND ONE ABOUT 'NOT A NUMBER'.  
        //BUT IT DOES NOT LOOP.  SO I COMBINED THE WHILE CONDITIONS.

        //IF SOMEONE INPUT H, THAT FAILS AND THERE WOULD BE A PROMPT TO CORRECT IT.  BUT THEN THAT WOULD BE IN SECOND WHILE STATEMENT.
        //IN THAT CASE, THE FIRST WHILE CONDITION WAS ALREADY PASSED (AND NOT LOOPED TO CHECK AGAIN), 
        //SO THERE IS NOTHING PREVENTING INPUT OF A NUMBER THAT IS TOO BIG OR TOO SMALL.
        
        //REMOVED FOLLOWING WHILE STATEMENT
        //while(isNaN(passwordLength)) {
        //var passwordLengthNotNumber = alert ("That is not a number.");
        //passwordLength = prompt("Please pick a number between 8 and 128.");    
        //}  

    Then, there were a few confirm questions about whether the user wants to include each type of character.    

    I used the responses to set the array that would be used as the pool for generating a password.  To start, the pooled array was empty.I used if statements to confirm each character type and concatenated the respective array into pooledArray if the user wanted to include the specific set.  I console.logged the confirm responses and the final array to verify that everything worked.  

    Then I completed the inner function to actually generate the password.  I ran a for loop for the length of the password.  Within the loop, I used a random number generator and pulled a value from pooledArray using that random number (during each loop) as the index (where to pull from the array).  I console.logged it and the password appears, but it has an 'undefined' error coming up.  I tried to convert to a string, but it still comes back as an error.

    The intention with the final two lines in Javascript was to have the random password appear on screen in the white section of the box. 

    *************************************************************************************************************
    AFTER SUBMISSION #1
    Feedback was that having output in console.log is insufficient.  In the context of a client project, of course that makes sense.  (What client would pay for something that appears in console log with an error, but not onscreen at all?)

    The hint about moving one line above the other helped.

    The TA from class helped to get it to display correctly.  But he mentioned that he thought that the assignment required having each selected character type in the generated password.  My original attempt had a pooled array, so characters were randomly selected from the set of 70.  If someone selected special characters, those were included in the pooled array, but would only be included in the actual password if by chance the random selection picked them from the pooled array.  (Chance could just as easily exclude them.)  To prevent such exclusion, I reworked the generatePassword function.  
    
    The for loop is still set for iteration through the requested password length.  So if a user wants a password with 10 characters, it loops 10 times.

    There are 4 if statements --- one per character type --- including them if the user requested them AND if the password generated so far is not long enough yet.  That provides a way to cycle through each requested type without the password getting too long.