//functions
function hello(){ //declare
    console.log("hello javascript");
}
hello()//function call
function helloagain(){
    hello();
}
helloagain()
helloagain()
function add(){
    let a =10;
    let b=5;
    console.log(a+b);
} 
add();
//anonymous function
let x= function()
{
    console.log("anonymous function");
}
x();
function mul(){
    a=10;
    return a*a;
}
let m= mul();
console.log(m);

let ar=[10,20,30,40,50];
let avg;
let sum=0;
function average(){
    l=ar.length;
    for(i=0;i<l;i++){
        sum=sum+ar[i];
        
    }
    avg=sum/l;
    console.log(avg);

}
average()
console.log("------------------------------------");
//  arrow functions
let c = (a,b)=>{
    console.log(a+b);
}
c(10,20)
console.log("------------------------------------");
// function parameters
function addd(a,b){
    return a+b;
}
let s = addd(30,40,);
console.log(s);
console.log("------------------------------------");
// default parameters
function add1(a,b=5){
    return a+b;
}
let d = add1(30);
console.log(d);
//rest parameters
//...args any variable can be used instead of arg
console.log("-------------------------");
function rest(...args){// we can also have more paraneters with ...args
    s1=0;
    for(arg of args){
        s1=s1+arg;
    }
    console.log(s1);
}
rest(1,3,2,4,5,6,78)

