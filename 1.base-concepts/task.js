"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = b**2-4*a*c;
  if (discriminant < 0) {
    arr = [];
  } else if (discriminant === 0) {
    arr[0] = -b/(2*a);
  } else {
    arr[0] = +((-b + Math.sqrt(discriminant) )/(2*a)).toFixed(2) ;
    arr[1] = +((-b - Math.sqrt(discriminant) )/(2*a)).toFixed(2) ;
  }
  return arr;
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let loan = amount - contribution; //S
	let P = percent / 1200;
	let creditPayments = loan * (P + (P / (((1 + P) ** countMonths) - 1)));
	let totalAmount = Math.round(creditPayments * countMonths * 100) / 100;
	console.log(totalAmount);
	return totalAmount;
}