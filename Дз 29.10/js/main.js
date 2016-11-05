var a = 25;
var b = 15;
var c = 7;

//Ищем большее число
if (a > b && a > c) {		//Проверяем если а большее число
	a *= 100;				//Умножаем большее на 100
	//Ищем следующее по величине число
	if (b > c) {
		b *= 10;
	}
	else if (c > b) {
		c *= 10;
	}
}
else if (b > a && b > c) {	//Проверяем если b большее число
	b *= 100;				//Умножаем большее на 100
	//Ищем следующее по величине число
	if (a > c) {
		a *= 10;
	}
	else if (c > a) {
		c *= 10;
	}
}
else if (c > a && c > b) {	//Проверяем если c большее число
	c *= 100;				//Умножаем большее на 100
	//Ищем следующее по величине число
	if (a > b) {
		a *= 10;
	}
	else if (b > a) {
		b *= 10;
	}
}
console.log( a, b, c );


var d = 30;
var e = 20;
var f = 10;
var g = 8;

if (d > e && d > f && d > g) {
	d *= 1000;

	if (e > f && e > g) {
		e *= 100;

		if (f > g) {
			f *= 10;
		} else if (g > f) {
			g *= 10;
		}
	} else if (f > e && f > g) {
		f *= 100;

		if (e > g) {
			e *= 10;
		} else if (g > e) {
			g *= 10;
		}
	} else if (g > e && g > f) {
		g *= 100;

		if (e > f) {
			e *= 10;
		} else if (f > e) {
			f *= 10;
		}
	}
} else if (e > d && e > f && e > g) {
	e *= 1000;

	if (d > f && d > g) {
		d *= 100;

		if (f > g) {
			f *= 10;
		} else if (g > f) {
			g *= 10;
		}
	} else if (f > d && f > g) {
		f *= 100;

		if (d > g) {
			d *= 10;
		} else if (g > d) {
			g *= 10;
		}
	} else if (g > d && g > f) {
		g *= 100;

		if (d > f) {
			d *= 10;
		} else if (f > d) {
			f *= 10;
		}
	}
} else if (f > d && f > e && f > g) {
	f *= 1000;

	if (d > e && d > g) {
		d *= 100;

		if (e > g) {
			e *= 10;
		} else if (g > e) {
			g *= 10;
		}
	} else if (e > d && e > g) {
		e *= 100;

		if (d > g) {
			d *= 10;
		} else if (g > d) {
			g *= 10;
		}
	} else if (g > e && g > d) {
		g *= 100;

		if (e > d) {
			e *= 10;
		} else if (d > e) {
			d *= 10;
		}
	}
} else if (g > d && g > e && g > f) {
	g *= 1000;

	if (d > e && d > f) {
		d *= 100;

		if (e > f) {
			e *= 10;
		} else if (f > e) {
			f *= 10;
		}
	} else if (e > d && e > f) {
		e *= 100;

		if (d > f) {
			d *= 10;
		} else if (f > d) {
			f *= 10;
		}
	} else if (f > d && f > e) {
		f *= 100;

		if (d > e) {
			d *= 10;
		} else if (e > d) {
			e *= 10;
		}
	}
}
console.log(d, e, f, g);