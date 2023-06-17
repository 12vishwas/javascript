//non primitive data type

//object- collection of key value pairs enclosed within {}
//declaring functions with the help of object litreral
var fruits = {
    'apple':'red',
    'mango':'yellow',
    Eat: function(){
        console.log(`${this.apple} is eating by shanky`)
    }
     
}
console.log(fruits['apple'])
console.log(fruits.mango)
fruits.Eat()


var obj ={
    'name':'akshay',
    'roll': 1,
    'id': 102,
    marks(){
        console.log(`${this.name} got 52 marks`)
    }
}
obj.marks()