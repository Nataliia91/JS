function rand (min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

var arr = [];
var ARR_SIZE = 10;

for (var i = 0; i < ARR_SIZE; i++) {
	arr[i] = [];
	for (var j = 0; j < ARR_SIZE; j++) {
		arr[i][j] = rand(0, 99);
	}
}

console.table(arr);

// треугольник по часовой стрелке начиная с 0-0 к 0-9
var triangleArr = arr[0].slice();

for (var i = 1; i < ARR_SIZE -1; i++) {
	triangleArr.push(arr[i][arr.length-1]);
}

for (var i = ARR_SIZE -1; i >= 1; i--) {
	triangleArr.push(arr[i][i]);
}

console.log(triangleArr);



// треугольник против часовой стрелки начиная с 9-9 к 0-9
var rightArrAgainst = [];
var topArrAgainst = arr[0].slice().reverse();
var diagonalArrAgainst = [];

for (var i = ARR_SIZE-1; i >= 1; i--) {
	rightArrAgainst.push(arr[i][arr.length-1]);
}

for (var i = 1; i < ARR_SIZE-1; i++) {
	diagonalArrAgainst.push(arr[i][i]);
}

var triangleAgainst = rightArrAgainst.concat(topArrAgainst, diagonalArrAgainst);

console.log(triangleAgainst);

// треугольник против часовой начиная с 9-9 к 0-0
var diagonalArrDown = [];
var leftArrDown = [];
var bottomArrDown = arr[ARR_SIZE-1].slice(0, ARR_SIZE-1);

for (var i = ARR_SIZE-1; i >= 1; i--) {
	diagonalArrDown.push(arr[i][i]);
}

for (var i = 0; i < ARR_SIZE-1; i++) {
	leftArrDown.push(arr[i][0]);
}

var triangleDown = diagonalArrDown.concat(leftArrDown, bottomArrDown);

console.log(triangleDown);


// периметр против часовой стрелки
var borderLeft = [];
var borderBottom = [];
var borderRight = [];
var borderTop = [];
var forIter = ARR_SIZE-1;

for (i = 0; i < ARR_SIZE-1; i++) {
	j = forIter--;
	borderLeft.push(arr[i][0]);
	borderBottom.push(arr[ARR_SIZE-1][i]);
	borderRight.push(arr[j][ARR_SIZE-1]);
	borderTop.push(arr[0][j]);
}

var perimeter = borderLeft.concat(borderBottom, borderRight, borderTop);
console.log(perimeter);

