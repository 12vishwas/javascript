/*data types in js are of two types:
primitive data types
non primitive data types*/

//primitive data types

//1.number- used to store integer and floating point numbers
var a=3
var b=-56
var c=4.5
console.log(typeof(b))

//2.string- used to store sequence of characters
var age =20
var s1 = `ur age is ${age}` 
var s2 = 'ur age is ' + age
console.log(s1)
console.log(s2)
console.log(typeof(s1))

//3.boolean- used when we need to assign a variable with true or false
var isvalid =true
console.log(isvalid)

//4.null and undefined
//null is used to specify that the value of variable is null
var a = null;
console.log(a)

//var may be undefined because its value is not known yet
var a;
console.log(a)
//it returns undefined

//5.symbol: used for creating unique properties of objects
sym1 = symbol('foo')
sym2 = symbol('foo')
console.log(sym1===sym2)