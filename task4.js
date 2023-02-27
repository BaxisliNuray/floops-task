let num =6;
if(num==0 || num==1){
    console.log(num + "not primary or composite");
}
else{
    for(let i=2;i<=num/2;i++){
        if(num%i==0){
            console.log(num + "composite number");
        return;
    }

    }
}
console.log(num + "prime number");