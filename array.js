//array- are used to store ordered data together within [] brackets and data can be of different type
var a = [1,2,,4,'hello']
console.log(a[2])

//array methods

//push and pop - are used to delete or add element in the last
var b = ['hello', 'hii', 3.4]
b.push(5)
b.pop()
console.log(b)

//shift and unshift - are used to delete or add element in the starting
var c = [1,2,3,4,5,6]
c.unshift(0)
c.shift()
console.log(c.length)

//splice - is used to both add or delete elements
var c = [1,2,3,4,5,6]
c.splice(1,"hello")
console.log(c)

//slice- help to create new array from existing array
var a = [12,15,18,21,24]
b = a.slice(610)
console.log(b)