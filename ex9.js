//Collect a number from the user and display on the webpage if the number entered is negative, less than 10 or greater than 10-->

//ALWAYS EVENT LISTENER AT THE TOP   
var event1 = document.getElementById("button1") 
event1.addEventListener('click',myfirst, false);

function myfirst(){
    //USERINPUT1 CONVERT IN JS TO A NUMBER VALUE
var userinputA = parseInt(document.getElementById("inputA").value);


if (userinputA > 10){
    document.getElementById("demo1").innerHTML = "this is a number bigger than 10"
}
else if (userinputA < 10){
    document.getElementById("demo1").innerHTML = "this is a number smaller than 10"
}
else if (userinputA <= 0) {
    document.getElementById("demo1").innerHTML = "this is a negative number"
}
}