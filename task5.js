//1-dən M-ədək ədədlər içərisində 15-ə bölünən ədədlərin sayını tapin
let M = 200;
let count=0;
for (let i = 0; i < M; i++) {
    if(i%15==0){
        count++;
    }
    
}
console.log(count);