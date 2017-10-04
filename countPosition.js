var input = String(process.argv.slice(2));
//console.log(input);
var input = input.replace(/\,*\s*/ig, '').split('');


var letterCount = {};



function countLetters(input, letterCount){
	for (var i = 0; i < input.length; i++) {
		var word = input[i].toLowerCase()
		
		if (input[i] in letterCount){
			letterCount[word]['count'] += 1;
			letterCount[word]['position'].push(i);
		 } else {
			letterCount[word] = {};
			letterCount[word]['count'] = 1;
			letterCount[word]['position'] = [i];

		}
		
	}
	return letterCount
}




console.log (countLetters (input, letterCount));

//console.log(typeof countLetters (input, letterCount));