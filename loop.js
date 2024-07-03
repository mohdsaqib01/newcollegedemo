// for
// while
// do while
for(i=0;i<10;i++)
    {
        console.log(i);
    }
let car=["bmw","volvo","maruti"];
for(i=0;i<car.length;i++)
    {
        console.log(car[i]);

    }
    console.log("-----------------------");
for(i=car.length;i>=0;i--)
    {
        console.log(car[i]);
    }
    console.log("-----------------------");
for(i=0;i<=20;i++)
    {
        if(i%2==0)
            {
                console.log(`number is ${i} is even`);
            }
    }
    console.log("--------------------------------------");
    for(i of car){//of gives values
        console.log(i);
    }
    console.log("--------------------------------------");

    for(i in car){//gives indexes
        console.log(i);
        console.log(car[i]);
    }
    console.log("--------------------------------------");
    let sum=0;
    for(i=0;i<20;i++){
        if(i%3==0){
            sum=sum+i;
        }
        
    }
    console.log(sum);
    let s=0;
    for(i=0;i<20;i++){
        if(i%3==0 && i%5===0){
            s+=i;
        }
        
    }
    let e=0
    console.log(s);
    while(e<=10){
        console.log(e);
        e++;
    }
    console.log("--------------------------------------");
    
    let y=1;
    while(y<=10){
console.log(y*2);
y++
    console.log("--------------------------------------");
}

     i=0
    do{
        console.log(i);
        i++;
    }while (i<=10) 
        console.log("--------------------------------------");

for(i=0;i<=10; i++){
    if(i===3){
        break;
    }
    console.log(i);

        }
        console.log("--------------------------------------");

for(i=0;i<=10; i++){
    if(i===3){
        continue;
    }
    console.log(i);

        }

    
     