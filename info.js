http://jsbin.com/hitelep/edit?js,console
/*
	Implicit
	Explicit
	new
	window
*/

/* mirar a la izquierda de quien ejecuta la funcion */


// var mixinName = function(obj) {
// 	obj.sayName = function() {
// 		console.log(this.name)
// 	}
// 	obj.sayName();
// }

// var me = {
// 	name: 'andres'
// }

// var you = {
// 	name: 'Paul'
// }

// mixinName(me); //this ???
// mixinName(you); //this???


// EXPLICIT

// var andres = {
// 	name: 'andres',
// 	age: 30
// }

// var sayName = function(age, profession, x) {
// 	console.log(arguments)
// 	console.log('my name is ' + this.name + ' I\'m a ' + profession + 'and ' + x + ' im ' + age )
// }

// var data = [30, 'Engineer', 'whatever...', 123123123]

// //sayName.call(andres, data[0], data[1], data[2]); //this
// sayName.apply(andres, data)

// // fn.call(context, ...arguments)

/* new Keyword */
// function Person(obj) {
// 	this.name = obj.name;
// 	this.lastName = obj.lastName;
// }

// var leo = new Person({name: 'leo', lastName: 'Messi'}) //
// var andres = new Person({name:'andres'})


/* bind... */

// var andres = {
// 	name: 'andres',
// 	age: 30
// }
// var sayName = function(age, profession, x) {
// 	console.log(arguments)
// 	console.log('my name is ' + this.name + ' I\'m a ' + profession + 'and ' + x + ' im ' + age )
// }

// var data = [30, 'Engineer', 'whatever...', 123123123]

// var newFn = sayName.bind(andres, data)
// console.log(newFn)


/* window */

// var sayAge = function() {
// 	'use strict';
// 	console.log(this.age)
// }

// var me = {
// 	age: 25
// };

// window.age = 35;

// sayAge();







