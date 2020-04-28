function sum (array) {
  return array.reduce((acc, curr) => acc+curr) 
};

function productAll (array) {
  return array.map (e=> e.reduce((acc, curr)=>acc*curr)).reduce((acc,curr)=> acc*curr);
};

const objectify = matrix => {
	return matrix.reduce((acc, curr) => {
		acc[curr[0]] = curr[1];
		return acc;
	}, {});
}

function luckyNumbers (array) {
  return array.reduce((str, curr) =>{
		if(array.indexOf(curr) === array.length-1){
			str += "and " + curr
		} else {
			str += curr + ', '
		}
		return str
	}, 'Your lucky numbers are: ')
};

module.exports = {
  sum: sum,
  productAll: productAll,
  objectify: objectify,
  luckyNumbers: luckyNumbers
};
