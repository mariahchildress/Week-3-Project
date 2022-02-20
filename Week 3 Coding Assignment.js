// Question 1a //
let ages = [3, 9, 23, 64, 2, 8, 28, 93]
for (var i = 0; i < ages.length; i++){
    difference = ages[7] - ages[0];
}
console.log(i);

// question 1b //
ages.push('38');
console.log(i);

// question 1c //
function ArrayAvg(ages){
    ages = 0
    count = ages.length;
    for (i = 0; i < count; i++){
        sum += ages[i];
    }
    return ages / count;
}
console.log(i);

// question 2 //
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

// question 2a //
avg = names.join('').length / names.length;
console.log(avg);

// question 2b //
for (let i = 0; i < names.length; i++){
    console.log(names.join(' '));
}



// question 5 //
let nameLengths = [3, 5, 3, 5, 4, 3];

// question 6 //
let sum = 0;
for (let i = 0; i < nameLengths.length; i ++){
    sum += nameLengths[i];
}
console.log(sum);

// question 7 //
function repeatWords(word, n){
    word = word.repeat(n);
    return word;
}
console.log(repeatWords('apple', 4));

// question 8 //
function createFullName(firstName, lastName){
    console.log(firstName + ' ' + lastName);
}
createFullName('Joe', 'Schmoe');

// question 9 //
let numbers = [10, 40, 30, 20];
function numberSum(x){
    for (let i = 0; i < numbers.length; i++){
        if (sum += numbers[i] >= 100){
            return 'true';
        }
    }
}
console.log(numberSum(numbers.array));

// question 10 //
let num = [32, 12, 4];
function numAverage(x){
    x = num.join(num).length / num.length;
    return x;
}
console.log(numAverage(num));

// question 11 //
let array1 = [12, 24, 36];
let array2 = [16, 20, 24];
function arrayAverage(array1Average, array2Average){
    if (array1Average > array2Average){
        return 'true';
    } else{
        return 'false';
    }
}
console.log(arrayAverage(24, 20));

// question 12 //
function willBuyDrink(isHoutOutside, moneyInPocket){
    if (isHoutOutside = true && moneyInPocket > 10.50){
        return true;
    } else{
        return false;
    }
}
console.log(willBuyDrink(true, 11));

// question 13 //
function takeVacation(moneyInBank, expectedMoney){
    if (expectedMoney > moneyInBank){
        return 'take vacation';
    } else{
        return 'stay home, you are broke';
    }
}
console.log(takeVacation(2000, 500));

// This function lets me compare the money I have in the bank and the expected money I'll get from a bonus, which helps me decide if I should take a vacation or stay home. //
// I created this because even though the amounts are not accurate, I'm actually trying to figure out if I can take a vaction soon. //