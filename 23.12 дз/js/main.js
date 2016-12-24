function Horse(name) {
	that = this;
	this.name = name;
	var mileage = 0;
	this.getMileage = function() {
		console.log(mileage);
		return mileage;
	};
	this.getTotalMileage = function() {
		console.log(Horse.totalMileage);
		return Horse.totalMileage;
	};
	this.run = function(km) {
		if (mileage < km) {
			if(Horse.tired < 10){
				mileage ++;
				Horse.tired ++;
				console.log(mileage);
				that.run(km);
			}else{
				Horse.tired = 0;
				console.log("Отдыхаем");
				setTimeout(that.run, 3000, km);

			}
		}else{
			console.log("Добежал.Усталость " + Horse.tired + " из 10");
		}
	};
}
Horse.totalMileage = 0;
Horse.tired = 0;

var h1 = new Horse('Лошадка');

h1.run(31);







// домашка

// у лошади появляется свойство «усталость»
// когда лошадь пробегает 1км, у нее усталость увеличивается на 1 елиницу. когда усталость достигает 10, лошадь останавливается и отдыхает 3 секунды (использовать setTimeout), после того как лошадь отдохнула, ее усталость обнуляется и лошадь бежит дальше, пока не добежит, либо пока усталость опять не станет равна 10. 
// Пример - бежим 31 км.
// 10 км пробежали
// отдых 3 сек, усталость = 0; осталось бежать - 21 км
// еще 10 км пробежали
// отдых 3 сек, усталость = 0; осталось бежать - 11 км
// еще 10 км пробежали
// отдых 3 сек, усталость = 0; осталось бежать - 1 км
// пробежали оставшийся 1 км.
// остаточная усталость у лошади остается равной 1 единице

// соответственно, если завтавить лошадь бежать опять, то до ближайшего отдыха она пробежит 9 км
