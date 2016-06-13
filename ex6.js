//ALWAYS EVENT LISTENER AT THE TOP    
var event1 = document.getElementById("button1") 
event1.addEventListener('click',myfirst, false);

function myfirst(){
    //USERINPUT1 CONVERT IN JS TO A NUMBER VALUE
var userinput1 = parseInt(document.getElementById("input1").value);
    //USERINPUT2 CONVERT IN JS TO A NUMBER VALUE
var userinput2 = parseInt(document.getElementById("input2").value);
    //ALERT(USERINPUT2);

if (userinput1 > userinput2) {
    document.getElementById("demo").innerHTML = "they are not the same and  " + userinput1 + " is larger";
}
else if (userinput1 === userinput2){
    document.getElementById("demo").innerHTML = "It's the same"
}
else {
    document.getElementById("demo").innerHTML = "they are not the same and  "  + userinput2 + " is larger";
}
}