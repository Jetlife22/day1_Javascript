//ALWAYS EVENT LISTENER AT THE TOP (a + b) * c  and (a + b + c)    
var event1 = document.getElementById("button1") 
event1.addEventListener('click',myfirst, false);

function myfirst(){
    //USERINPUT1 CONVERT IN JS TO A NUMBER VALUE
var userinputA = parseInt(document.getElementById("inputA").value);
var userinputB = parseInt(document.getElementById("inputB").value);
var userinputC = parseInt(document.getElementById("inputC").value);


    document.getElementById("demo1").innerHTML = (userinputA + userinputB) * userinputC;
    document.getElementById("demo2").innerHTML = userinputA + userinputB + userinputC
}