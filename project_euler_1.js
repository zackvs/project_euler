var answers = [];
var sum = 0;
var max = 1000;

for(var i=0; i < max; i++){
	if(i%3 === 0 || i%5 === 0){
		sum += i;
	}
}

console.log(sum);