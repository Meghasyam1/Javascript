console.log("Hello");
window.alert("world");
const obj = {
    name : "c class",
    brand : "Mercedes",
    addi : function() {
        var a = 10;
        var b = 20;
        var c = a+b;
        console.log("The sum is",a+b);
        return c;
    },
    log : function() {
        var d = obj.addi();
        console.log("Inside log log function",d);
        console.log("Inside log function");
    }
}
const obj1 = {
    name : "yassu",
    studying : "Btech, EEE",
    college : "pace"
}
obj.log();
obj.addi();
console.log("Name is :",obj1.name,"\n","Studying :",obj1.studying,"\n","college :",obj1.college);
console.log(obj.name);
function myfunction(){
document.getElementById("demo").innerHTML="Text changed";
}
val = 0;
function increment() {
    val++;
    document.getElementById("num").innerHTML=val
}
function decrement() {
    val--;
    document.getElementById("num").innerHTML=val
}
const myInterval=setInterval(run,1000);
sval = 0;
ispause = true;
function run(){
    if(!ispause){
    sval++;
    document.getElementById("sno").innerText=sval;
    }
}
function start(){
    ispause = false;
}
function stop(){
    ispause=true;
}
function reset(){
    sval=0;
    document.getElementById("sno").innerText=sval;
}

