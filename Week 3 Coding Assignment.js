let ages = [3, 9, 23, 64, 2, 8, 28, 93]
for (var i = 0; i < ages.length; i++){
    ages[7] - ages[0];
}
console.log(i);

ages.push('38');
for (var i = 0; i < ages.length; i++){
    ages[8] - ages[0];
}
console.log(i);

function ArrayAvg(ages){
    var i = 0, summ = 0, length = ages.length;
    while (i < ages.length){
        summ = summ + ages[i++];
    }
    return summ / ages.length;
}
console.log(i);