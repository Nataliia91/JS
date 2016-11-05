function rand (min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

var arr = [];
for (var i = 0; i < 30; i++) {
	var n = rand(1, 100);

	if (i % 2) {
		arr.push( n * - 1 );
	}
	else {
		arr.push( n );
	}
}
 console.log( arr );

for (var i = 4; i < arr.length; i += 5){
	console.log(arr[i]);
}
