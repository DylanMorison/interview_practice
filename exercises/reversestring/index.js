// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

/**
 * @method One
 */
// function reverse(str) {
// 	let backwardsString = "";
// 	for (let i = str.length - 1; i >= 0; i--) {
// 		backwardsString += str.charAt(i);
//     }
//     for (let char of str){
//         backwardsString = char + backwardsString
//     }
// 	return backwardsString;
// }

/**
 * @method Two
 */
// function reverse(str) {
// 	return str.split("").reverse().join("");
// }

/**
 * @method Three
 */
function reverse(str) {
	debugger;
	return str.split("").reduce((rev, char) => char + rev, "");
}

reverse('asdf');

module.exports = reverse;
