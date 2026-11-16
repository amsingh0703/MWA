// spread features
let a = [1,2,3];
let b = [...a,4,5,7];

//Rest operater
function add(...numbers){
    return numbers.reduce((sum , n) => sum+n,0);
}

//object Distruction
let student = {
    name:"Amit",
    age:21,
    course:"CSBS"
};

let {name,age,course} = student;

let numbers = [...b];

//filter method
let even = numbers.filter(n => n%2 === 0);

//foreach method 
let result = "";
numbers.forEach(n => {result += n +" ";})

//display the result

document.getElementById("output").innerHTML =
"Spread Operator :"+b+"<br>"+"Rest Operater: "+add(1,2,3,4)+"<br>"+"name:"+name+"<br>"+"Map (Squres): "+numbers.map(n => n**2)+ "<br>"+"Filter(Even): "+even+"<br>"+"ForEach: "+result