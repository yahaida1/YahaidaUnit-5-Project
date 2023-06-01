// 1. Store each input as a variable (there should be two input boxes - one for each answer) [x]

// 2. Store the button as a variable (there should be ONE button) [x]
let title=document.querySelector(".title");
let questions=document.querySelector(".questions")
let submitButton=document.querySelector(".submitButton")
let result=document.querySelector(".result");
// 3. Create a click handler [x]

submitButton.onclick=function(){
// 4. Use the .value property to store user input [x]
let input1=document.querySelector(".input1").value;
let input2=document.querySelector(".input2").value;
let result1=document.querySelector(".result1")
  let result2=document.querySelector(".result2")
  let result3=document.querySelector(".result3")
  let result4=document.querySelector(".result4")
    let result5=document.querySelector(".result5")
// 5. Add console.log to test if the code is being stored [x]
console.log(input1);
console.log(input2);
// 6. Write a conditional statement with else-if to include all 4 possible results [x]
// 7. Write a compound conditional statement that uses input from both questions to provide the user with a result [x]

if((input1==="earth"||input1==="water") && input2==="winter"){
result.innerHTML="Since you are a " + input1 + " sign and prefer " + input2 + " you are the HEARTEYES emoji! Refresh to try again."
result1.style.display="block";
title.style.display="none";
questions.style.display="none";
submitButton.style.display="none";
}

else if((input1==="air"||input1==="fire") && input2==="winter"){
result.innerHTML="Since you are a " + input1 + " sign and prefer " + input2 + " you are the COLDFACE emoji! Refresh to try again."
result2.style.display="block";
title.style.display="none";
questions.style.display="none";
submitButton.style.display="none";
}

else if((input1==="earth"||input1==="water") && input2==="summer"){
result.innerHTML="Since you are a " + input1 + " sign and prefer " + input2 + " you are the SUNGLASSES emoji! Refresh to try again."
result3.style.display="block";
title.style.display="none";
questions.style.display="none";
submitButton.style.display="none";
}

else if((input1==="air"||input1==="fire") && input2==="summer"){
result.innerHTML="Since you are a " + input1 + " sign and prefer " + input2 + " you are the DEVIL emoji! Refresh to try again."
result4.style.display="block";
title.style.display="none";
questions.style.display="none";
submitButton.style.display="none";
}

else{
result.innerHTML="Refresh. Try again, friend!"
result5.style.display="block";
title.style.display="none";
questions.style.display="none";
submitButton.style.display="none"; 
}
// 8. Write a sentence using string concatenation using the data stored in the user input variables [x]
// 9. Add a next level feature! [x]
}