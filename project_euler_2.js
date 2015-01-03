var a = 0;
var b = 1;
var c;
var sum = 0;
var answers = [];

for (var i = 0; i<35; i++){
		c = a + b;
		if(c % 2 === 0 && c < 4000000){
			answers.push(c);
			sum += c;

		}
		a = b;
		b = c;
	}

console.log(answers);
console.log(sum);