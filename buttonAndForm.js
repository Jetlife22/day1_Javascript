//Event Listener
var event1 = document.getElementById("button1");
event1.addEventListener('click', myfirst, false); 
function myfirst(){
//get user input1
var userinput1 = document.getElementById("input1").value;
//write output1 onto webpage
document.getElementById("demo").innerHTML = userinput1;
}
  