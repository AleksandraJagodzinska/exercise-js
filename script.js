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


// function returnFullName (name, surname) {return name + '_' + surname}
//
// console.log(returnFullName('Aleksandra', 'Jagodzińska'))
//
// var returnFullNameSecond = function(name, surname)
// {return name + '_'+ surname }
//
// console.log(returnFullNameSecond("Natalia","Pilewska"))
//
//
// const returnFullName3=(name,surname) => {
//      name + '_' + surname
// }
//
// console.log(returnFullName3("Iwona", "Iksińska"))


//
//  function Car (color,year) {
//      this.color = color;
//      this.year = year;
//  }
//
// Car.prototype.sound = function(){
//         console.log("Wrr")
//     }





class Car {
        constructor(color,year){
            this.color = color;
            this.year = year;
        }
        sound(){
            console.log(s)
        }
}

var seat = new Car("blue,1887")
console.log(seat)

class SportCar extends Car{
    constructor(power){
        super("black",2010)
        this.power = power
    }
}

const toyota = new SportCar('300 koni')

console.log(toyota)