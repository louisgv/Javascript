var numbers = [];

for (var i = 1; i < 11; ++i){
        numbers[i-1] = i;
}

var filtered = numbers.filter(function (number){
        return number%2===0;
});

console.log(filtered);
