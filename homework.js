// Human 3 объекта инженер(должен быть метод инжа), спортсмен(памп), врач(диагностика) умение ходить 
/*
let human = new Human();
human.alive = true;

function Human( prof, skill ) {
  this.prof = prof;
  this.skill = function() {
   return 'He has' + ' skills in ' + skill ;
  };
  
};



 let eng = new Human('engeneer', 'mechanic');
 console.log(eng.prof);
 console.log(eng.skill());
 console.log(eng.alive);

  let sport = new Human('sportsman', 'pump');
  console.log(sport.prof);
  console.log(sport.skill());
  console.log(sport);

  let md = new Human('medic', 'diagnostic');
  console.log(md.prof);
  console.log(md.skill());
  console.log(md);
*/

///////////////////////////////задание 1
/*
let c = false;

function A() { 
  return c;
};

function B() { 
  return c;
};

var a = new A();
var b = new B();

alert( a == b ); // true
              
              //нет так как это ссылочный тип данных и передается не данные а ссылка ни них, как и сравнивается. 

*/

// Напишите функцию-конструктор Calculator, которая создает объект с тремя методами:

// Метод read() запрашивает два значения при помощи prompt и запоминает их в свойствах объекта.
// Метод sum() возвращает сумму запомненных свойств.
// Метод mul() возвращает произведение запомненных свойств.
// Пример использования:

// let calculator = new Calculator();
// calculator.read();

// alert( "Сумма=" + calculator.sum() );
// alert( "Произведение=" + calculator.mul() );

/*
let calculator = new Calculator();

function Calculator() {
  this.read = function() {
    this.result1 = +prompt('введите первое значение', 0);
    this.result2 = +prompt('введите второе значение', 0);
    //console.log(result1, result2);
    return this.result1, this.result2;
  };
  
  this.sum = function() {
   return this.result1 + this.result2
   
  };
  this.mul = function() {
    return this.result1 * this.result2
  };
};

calculator.read()
console.log(calculator.mul());

*/

//////////////////////////////////////// задача 3
/*
let accumulator = new Accumulator(1);

function Accumulator(startingValue) {
 // let startingValue = 1;
  //console.log(startingValue);
  this.value = startingValue;
  
  
  this.save = function() {
  
     this.value += +prompt('Введите сохраняемый объект', 0);
    //console.log(this.value);
     //return startingValue + this.value;
     };
  //this.value = this.save + startingValue;
};
 

accumulator.save();
accumulator.save();
console.log(accumulator.value);
// console.log(Accumulator(1));
// this.save();

*/

//////////////////////////////////////////////задача 4

let calculator = new Calculator;

function Calculator() {
  
  this.str = function() {
    this.str = prompt('Введите действие в формате 1 + 1', 0);
    this.sum = +this.str[0] + (+this.str[4]);
    console.log(this.sum);
  };
  
  this.addMethod = fuction(name, func) {
    func = function(a,b) {
      a name b // псевдокод который показывает что я хочу 
    }
  };
  
};

calculator.str();

