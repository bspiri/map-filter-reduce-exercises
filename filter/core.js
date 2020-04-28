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
  const newArray=array.filter(arr=>{
 const positive= arr.filter(num=>{
    if (num>=0){return num}
  })
  if(positive.length==arr.length){
    return positive
  }
})

 return newArray;
};

function allSameVowels (array) {
  const newArr = array.map(word => word.split(''))
  console.log(newArr[1][0])
  console.log(newArr)
};
allSameVowels(['racecar', 'amalgam', 'oligopoly', 'zoom'])

module.exports = {
  onlyEven: onlyEven,
  onlyOneWord: onlyOneWord,
  positiveRowsOnly: positiveRowsOnly,
  allSameVowels: allSameVowels
};
