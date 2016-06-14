//ALWAYS EVENT LISTENER AT THE TOP    
var event1 = document.getElementById("button1") 
event1.addEventListener('click',myfirst, false);

function myfirst(){
    //USERINPUT1 CONVERT IN JS TO A NUMBER VALUE
var userinput1 = parseInt(document.getElementById("input1").value);
var userinput2 = parseInt(document.getElementById("input1").value);


    document.getElementById("demo1").innerHTML = userinput1 + 1;
    document.getElementById("demo2").innerHTML = userinput2 - 1;
}