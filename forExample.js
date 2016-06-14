//declare the outpit variable
var outputString = "";

//every for statement has to have a starting condition, an ending condition and an increment or decrement 
//display numbers 1 to 5
for (var i = outputString; i <= 5; i++)
    {
        outputString += i + "<br>";
        document.getElementById("result").innerHTML = outputString;
    }