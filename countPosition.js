var input = String(process.argv.slice(2));
var input = input.replace(/\,*\s*/ig, '').split('');
var letterPosition = {};


function countLetters (input, letterPosition){
	for (var i = 0; i < input.length; i++){
		var word = input[i].toLowerCase();
	
		if (input[i] in letterPosition){
 			letterPosition[word]['count'] += 1;
			letterPosition[word]['position'].push(i);

		} else {
			letterPosition[word] = {};
 			letterPosition[word]['count'] = 1;
			letterPosition[word]['position'] = [i];

		} 
	}
	return letterPosition;
};



console.log (countLetters (input, letterPosition));














