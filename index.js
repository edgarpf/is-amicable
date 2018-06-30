var divisors = require('number-divisors');
var arraySum = require('array-sum');

module.exports = function(n) {
	var divisorsArray = divisors(n);
	var sumDivisors = arraySum(divisorsArray.splice(0,divisorsArray.length-1));		
	var divisorsPair = divisors(sumDivisors);
	
	return n === arraySum(divisorsPair.splice(0,divisorsPair.length-1));
}
	

