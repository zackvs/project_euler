var a = 1000;
var factors = [];
var prime = [];

for(var i = 0; i<=a; i++){
	if (a % i === 0){
		factors.push(i);
		for(var e = 0; e<= Math.sqrt(i); e++){
			if(i % e === 0){
				prime.push(e);
			}
	}
}
}

var largest = Math.max.apply(Math, prime);



console.log(factors);
console.log(prime);
console.log(largest);