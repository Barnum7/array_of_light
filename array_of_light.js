function arrayOfLight(x) {
	var array = [];
	for (i = 0; i < x + 1; i++ ) { 
		array.push(i);
	}	
	return array;
}

var userInput = parseInt(prompt("Pick a number"),10);

console.log(arrayOfLight(userInput));