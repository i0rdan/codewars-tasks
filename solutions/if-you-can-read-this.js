// https://www.codewars.com/kata/586538146b56991861000293
// You'll have to translate a string to Pilot's alphabet (NATO phonetic alphabet).

function to_nato(words) {
	return words.split(' ').join('').split('').map((w) => NATO[w.toLowerCase()] || w).join(' ');
}
