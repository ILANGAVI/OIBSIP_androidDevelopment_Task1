function convert(){

let value = document.getElementById("inputValue").value;
let from = document.getElementById("fromUnit").value;
let to = document.getElementById("toUnit").value;

let meter;

if(from == "cm")
meter = value / 100;

if(from == "m")
meter = value;

if(from == "km")
meter = value * 1000;

let result;

if(to == "cm")
result = meter * 100;

if(to == "m")
result = meter;

if(to == "km")
result = meter / 1000;

document.getElementById("result").innerHTML = "Result: " + result + " " + to;

}