// Question 1a //

let ages = [3, 9, 23, 64, 2, 8, 28, 93]
for (var i = 0; i < ages.length; i++){
    ages[7] - ages[0];
}
console.log(i);
// question 1b //
ages.push('38');
for (var i = 0; i < ages.length; i++){
    ages[8] - ages[0];
}
console.log(i);

// question 1c //
function ArrayAvg(ages){
    var i = 0, summ = 0, length = ages.length;
    while (i < ages.length){
        summ = summ + ages[i++];
    }
    return summ / ages.length;
}
console.log(i);

// question 2 //
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

// question 2a //
avg = names.join(' ').length / names.length;
console.log(avg);

// question 2b //
// put loop here //

console.log(elements.join(' '));

// question 5 //
let nameLengths = [3, 5, 3, 5, 4, 3];

// question 6 //
// write a loop to calculate the sum of the elements in the nameLengths array //