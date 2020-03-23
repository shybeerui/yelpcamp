function isEven(num){
	if(num % 2 == 0)
		return true;
	else
		return false;
}

function factorial(num){
	var res = 1;
	for(var i = 2; i <= num;i++){
		res *= i;
	}
	return res;
}

function kebabToSnake(input){
	var newstr = input.replace(/-/g,"_");
	// var pos = input.indexOf('-');
	// while(pos != -1){
	// 	console.log(pos);
	// 	input[pos] = '_';
	// 	pos = input.indexOf('-');
	// }
	return newstr;
}