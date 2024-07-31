function myFunction(a,b){
    return a*b;
}
let x = myFunction(4,3);
document.getElementById("demo").innerHTML = x;

function myfunction(a,b){
    return arguments.length;
}

document.getElementById("demo1").innerHTML = myfunction(4,3);

function sum(...args){
    let sum = 0;
    for (let arg of args)
        sum += arg;
    return sum;
}
let p = sum(12,24,36,52);
document.getElementById("demo2").innerHTML = p;

function findMax(){
    let max = -Infinity;
    for (let i=0;i<arguments.length;i++){
        if(arguments[i]>max){
            max=arguments[i];
        }
    }
    return max;
}
document.getElementById("demo3").innerHTML = findMax(4,5,6);

function sumAll(){
    let sum = 0;
    for(let i=0;i<arguments.length;i++){
        sum += arguments[i];
    }
    return sum;
}
document.getElementById("demo4").innerHTML = sumAll(42,55,41,20);

const person = {
    fullname:function(city,country){
        return this.firstname+" "+this.lastname+","+city+","+country;

    }
}
const person1 = {
    firstname : "rama",
    lastname : "krishna"
}

document.getElementById("demo5").innerHTML = person.fullname.call(person1,"chirala","a.p");

const name = {
    firstname:"ramakrishna",
    lastname: "prasad",
    display: function(){
        let x =document.getElementById("demo6");
        x.innerHTML = this.firstname+" "+this.lastname;
    }

}
let display = name.display.bind(name);
setTimeout(display,3000);

let d = 4;
myFunctions();

function myFunctions(){
    document.getElementById("demo7").innerHTML = d * d;
}

function mydisplay(some){
    document.getElementById("demo8").innerHTML =some;
}

function first(){
    mydisplay("Hello");
}

function second(){
    mydisplay("ramakrishna");
}
second();
first();

setTimeout(timeOut,3000);
function timeOut(){
    document.getElementById("demo9").innerHTML = "hello ramakrishna";
}