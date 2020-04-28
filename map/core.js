function multiplyBy10 (array) {
    var doubled = array.map(function (num) {
        return num * 10;
    });
    return doubled;
}

function shiftRight (array) {
 return	array.map((item, index)=>{
		if(index == array.length-1){
			array.unshift(item)
			array.pop(item)
		}
	} )
   	console.log(array);
};

function onlyVowels (array) {
 let newArray = array.map(word => {
		for(let i=0; i<word.length; i++){
			let str = ""
			if (word[i]=='a' && word[i] =='e' && word[i] =='i' && word[i]!=='o' && word[i]=='u') {
			word[i].slice(i,1)
			}
		}
	})
	return newArray
};

function doubleMatrix (array) {
 var newArray = array.map(item => {
    return item.map(index => index*2)
  })
  console.log(newArray)
};

module.exports = {
  multiplyBy10: multiplyBy10,
  shiftRight: shiftRight,
  onlyVowels: onlyVowels,
  doubleMatrix: doubleMatrix
};
