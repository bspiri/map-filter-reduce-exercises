function onlyEven (array) {
	function isEven(number) {
		return number % 2 == 0;
	}
	var filtered = array.filter(isEven);
	return filtered;
}

function onlyOneWord (array) {
	function hasWhiteSpace(s) {
		return s.indexOf(' ') <= 0;
	}
	var filtered = array.filter(hasWhiteSpace);
	return filtered;
}

function positiveRowsOnly (array) {
  // your code here
};

function allSameVowels (array) {
  // your code here
};

module.exports = {
  onlyEven: onlyEven,
  onlyOneWord: onlyOneWord,
  positiveRowsOnly: positiveRowsOnly,
  allSameVowels: allSameVowels
};