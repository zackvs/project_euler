var a = 13195;
var factors = [];
var prime = [];
var dick = [];

for (var i = 0; i <= a; i++) {
    if (a % i === 0) {
        factors.push(i);

        for (var e = 0; e <= i; e++) {
            if (i % e === 0) {
                prime.push(e);
            }

            if (i === e) {
                if (prime.length === 2) {
                    dick.push(i);
                }
                prime = [];
            }
        }
    }
}

var largest = Math.max.apply(Math, dick);

if (a === 0 || a === 1) {
    console.log("No Primes");
} else {
    console.log("answer = " + largest);
}