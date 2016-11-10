function rand (min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

var ARR_SIZE = 10;
var arr = [];
var topArr = [];
var rightArr = [];
var bottomArr = [];
var leftArr = [];

for (var i = 0; i < ARR_SIZE; i++) {
	arr [i] = [];
	for (var j = 0; j < ARR_SIZE; j++) {
		arr [i][j] = rand(8, 55);
	}
}
console.table(arr);

for (var i = 0; i < ARR_SIZE; i++) {
	topArr.push(arr[0][i]);
}

for (var i = 1; i < ARR_SIZE-1; i++) {
	rightArr.push(arr[i][9]);
}

for (var i = 9; i >= 0; i--) {
	bottomArr.push(arr[9][i]);
}

for (var i = 8; i >= 1; i--) {
	leftArr.push(arr[i][0]);
}

var endArr = topArr.concat(rightArr , bottomArr, leftArr);
console.log(endArr);