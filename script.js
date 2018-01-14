// first stage
// var car = {
//         color: "red",
//         year:2000,
//         makeSound : function () { console.log('Wrrrr')
//
//         }
// }
//
// car.makeSound()


//
//  function Car (color,year) {
//     this.color = color;
//     this.year = year;
//     this.makeSound = function(){
//         console.log("Wrr")
//     }
//  }
//
//  var car1 = new Car('blue',1999)
// car1.makeSound()


function Car(color, year){
    this.color = color;
    this.year = year
}
Car.prototype.makeSound=function(){console.log("wrrr2")};

var car2 = new Car('green',1995)
car2.makeSound()