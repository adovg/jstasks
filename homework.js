
//////////////////// Тема: Замыкания и область видимости
// function makeCounter() {
//   let currentCount = 1;
 
//   return {
//     name: 'Bob',
//     getName: function() {
//       return this.name;
//     },
//     getNext: function() {
//       return currentCount++;
//     },
//     getPrivious: function() {
//       return currentCount--;
//     },
//     set: function(value) {
//       currentCount = value;
//     },
//     reset: function() {
//         currentCount = 1;
//     }  
//   };
// };

// let counter = makeCounter();

// console.log( counter.getNext() );
// console.log( counter.getNext() );
// console.log( counter.getNext() );

// counter.set(10);

// console.log( counter.getNext() );
// console.log( counter.getNext() );
// console.log( counter.getNext() );


// console.log( counter.getPrivious() );
// console.log( counter.getPrivious() );
// console.log( counter.getPrivious() );

// console.log( counter.getName() );


// function makeCounter() {
//   let currentCount = 1;
  
//   function counter() {
//     return currentCount++;
//   }
  
//   counter.set = function(value) {
//     currentCount = value;
//   };
  
//   counter.reset = function() {
//     currentCount = 1;
//   }
  
//   return counter;
// };

// let counter = makeCounter();

// console.log(makeCounter.length);

// for(let i = 0; i < counter.length; i++) {
//   alert(counter[i]);
// };

/////////////////////////////N1
/*
let a = 2,
    b = 3;

function sum (a) {
 return function (b) {
   return a + b;
 }
};

console.log( sum(a)(b) ); 
// console.log( анонимная внетренняя функция(ее вызов c аргументом 'b') );  тоже самое что и на верху

*/

//////////////////////////////////////////////


// let value = 'static';

// function print() {
//   console.log(value);
// };

// (function() {
//   console.log(value);
//   print()
// })();

// самовызывающиеся функция сработает первой при консол логе в ней

// let arr = [];

// function addTodo(todo) {
//   arr.push(todo);
//   return todo;
// }

// console.log(addTodo('замыкания в Js'));

// console.log(arr)






// var arr = [];
// var func = function(callback) {
//  return function() {
//    arr.push('hi')
  
//  }
// };

// func()()
// console.log();
//  console.log(arr);

// var hello = (function(name) {
//   return 'Hello' + '' + name;
// }('Alex'));

// console.log(hello)


// console.log((function() {
//   var currentCount = 1;
  
//    function counter() {
//     return ++currentCount;
//   }
  
  
//   return counter; // возврат результата выполнения (2)
// })());




// var b = makeCounter();

// alert( b ); // 1



///////////////////////////////////////////////////////// задача n2
/*

function myBuffer(){
    let str = "";
  
   return function buffer(value){
    str = str + " " + value;
    return str;
    console.log(str);
  }
  
  // counter.reset = return function() {
  //   str = "";
  // };

  
};

let counter = myBuffer();

console.log(counter('hello'));
console.log(counter('my'));
console.log(counter('friend'));

*/

///////////////////////////////////////////////задача н3
/*
function myBuffer(){
     let str = "";
  
     function buffer(value){
     
       if (arguments.length == 0 ) {
         return str;
       } else {
         return str += " " + value;
       }
  };
  
    buffer.reset = function() {
     return str = "";
    };
   
  return buffer;  
};

 let counter = myBuffer();

  console.log(counter('hello'));
  console.log(counter("my"));
 // console.log(counter('friend'));
  counter.reset();
 // console.log(counter('test'));
 console.log(counter());

/*

//////////////////////\\\\\\\\\\\\\\\\\\

/*
function makeArmy() {          //outer

  var shooters = [];         // var

 
    return function() { // функция-стрелок
     for (var i = 0; i < 10; i++) {
     shooters.push(i);
      alert( i ); // выводит свой номер
      console.log(i);
    
    };
  }
}

var army = makeArmy();

//console.log(makeArmy());
//army(); // стрелок выводит 10, а должен 0
//army[2](); // стрелок выводит 10...
// .. все стрелки выводят 10 вместо 0,1,2...9

*/

/*
function makeArmy(shooters) {
  let soldiers = [];
  
  return function() {
    for (let i = 0; i <= soldiers.length; i++) {
      soldiers.push(i);
      console.log(soldiers);
      return soldiers;
    }
  }
  return soldiers; 
}

console.log(makeArmy(3));
*/



// var users = [{
//   name: "Вася",
//   surname: 'Иванов',
//   age: 20
// }, {
//   name: "Петя",
//   surname: 'Чапаев',
//   age: 25
// }, {
//   name: "Маша",
//   surname: 'Медведева',
//   age: 18
// }];

// function byField(field) {
//   users.sort(function(a, b) {
//   return a[field] > b[field] ? 1 : -1;
//   });
// };


// users.sort(byField('name'));
// users.forEach(function(user) {
//   alert( user.name );
// }); // Вася, Маша, Петя

// users.sort(byField('age'));
// users.forEach(function(user) {
//   alert( user.name );
// }); // Маша, Вася, Петя

// let user = {
//   name: "Bob",
//   age: 20,
//   lastName: "Smith",
//   sex: "Male"
// };

// for (let key in user) {
//   console.log(key.length);
// };


/////////////////////////////////////////////////////
////////////  Тема: создание объектов через 'new'
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

