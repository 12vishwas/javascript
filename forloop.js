//for loop in js

//code to print even number upto 11
for(var i=0;i<11;i=i+2)
    console.log(i);

//code to print odd number upto 11
for(var i=1;i<11;i=i+2)
    console.log(i);
//

//for-each loop: it is used to access each element 
var names = ["shyam","ram","akshay","kartik"]
    names.forEach(item => console.log(item))


//for-of loop: used for iterables like arrays and strings
var a = "my name is vishwas";
    for(item of a){
        console.log(item)
    }

var b =[1,2,3,4,5]
    for(item of b){
        console.log(item)
    }


/*for-in loop:used for enumerables (objects)
also used for iterables in which index acts as key means it will return index*/
var fruits=['orange','apple','banana']
    for(item in fruits){
        console.log(item)
    }