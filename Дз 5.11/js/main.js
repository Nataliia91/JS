//функция возвращающая целое рандомное число
function rand (min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

//создали массив
var arr = [];

//создали цикл с 30 иттерациями
for (var i = 0; i < 30; i++) {

	//ищем остаток от деления на 2
	if (i % 2) {			//если возвращает 1(true) - нечетное
		arr.push( rand(-15, -1) );	//вставляем ранд. число меньше ноля
	}
	else {					// возвращает 0(false) - четное
		arr.push( rand( 1, 15) );	//вставляем ранд. число больше ноля
	}
}
 console.log( arr );

for (var i = 4; i < arr.length; i += 5){
	console.log(arr[i]);		//выводим каждый 5 эл. массива
}
