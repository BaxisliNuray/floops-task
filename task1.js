//ededin en boyuk reqemini tap
let num = 657389;
let large = 0;
let rem = 0;
while (num > 0) {
    rem = num % 10;
    if (rem > large) {
        large = rem;
    }
    num = num / 10;
}

console.log(large);
return 0;