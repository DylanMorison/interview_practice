/**
 * @function str.charAt()
 * @function str.split()
 * @function arr.join()
 * @function arr.reverse()
 */

const str = "hello";

const strReversed = str.split("").reduce((reversed, char) => char + reversed, "");
