var input = String(process.argv.slice(2)).split('');
//console.log(input);

var letterCount = {};



function countLetters(input, letterCount){
	for (var i = 0; i < input.length; i++) {
		var word = input[i].toLowerCase()
		if (word in letterCount){
			letterCount[word] += 1
		} else {
			letterCount[word] = 1;
		}
	}
	return letterCount
}




console.log (countLetters (input, letterCount));

//console.log(typeof countLetters (input, letterCount));

//console.log(typeof countLetters (input, letterCount));