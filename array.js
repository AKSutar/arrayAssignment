
var chars = ["Alex", "Babel", "Alex", "Carl", "Beccy" , "Carl" , "Babel"];
var uniqueChars = [...new Set(chars)];


document.getElementById("removeArray").innerHTML = "All the unique values are :- " + uniqueChars;
console.log(uniqueChars);