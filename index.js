function reverseString(string) {
    var reversedString = "";
    for (var i = string.length - 1; i >= 0; i--) {
      reversedString = reversedString + string[i];
    }
    return reversedString;
  }
  document.getElementById("button1").addEventListener("click", function() {
    const inputString = document.getElementById("input1").value;
    const outputString = reverseString(inputString);
    document.getElementById("result1").innerHTML = "Here's your reversed string:  " + outputString;
  });






  function palindrome(number){
    var reverse = 0;
    var dupe = number;
    while(dupe>0)
        {
            rem = dupe%10;
            reverse = reverse*10+rem;
            dupe = Math.floor(dupe/10);
        }
        return number === reverse;
}
document.getElementById("button2").addEventListener("click", function(){
    const inputNumber = parseInt(document.getElementById("input2").value);
    const isPalindrome = palindrome(inputNumber);
    var output = "";
    if(isPalindrome){
         output = "Yay! It's a Palindrome";
    }
    else{
        output = "Oops! Not a palindrome";
    }
       
    document.getElementById("result2").innerHTML = output;
})






function tipCalculator(subtotal, tipPercentage){
    
    const tip = subtotal * (tipPercentage)/100;
    const total = subtotal + tip;
    return total;
}

document.getElementById("calculator").addEventListener("click", function(){
    const inputSubtotal = Number(document.getElementById("subtotal-amount").value);
    const inputTipPercentage = Number(document.getElementById("tip-percentage").value);

    const totalAmount = tipCalculator(inputSubtotal, inputTipPercentage);

    const output = "Your total amount due is: $"+ totalAmount  ;

    document.getElementById("result3").innerHTML = output;
});