console.log("1. write a ts program to find length of string");
var string = "dog".length;
console.log(string);
console.log("2. Write a ts program to copy one string to another string.");
var string1 = "I love Pakistan";
var copy = string1;
console.log(copy);
console.log("3. Write a ts program to concatenate two strings.");
var str = "I love ";
var str1 = "Pakistan";
console.log(str.concat(str1));
console.log("4. Write a ts program to compare two strings.");
var compare = "This is a string ";
console.log(compare.localeCompare("This is a string"));
console.log("5. Write a ts program to convert lowercase string to uppercase.");
var lower = "ali";
console.log(lower.toUpperCase());
console.log("6. Write a ts program to convert uppercase string to lowercase.");
var upper = "AlI";
console.log(upper.toLocaleLowerCase());
console.log("7. Write a ts program to print day of week name using switch case.");
var number = 4;
switch (number) {
    case 1: {
        console.log("Monday");
        break;
    }
    case 2: {
        console.log("Tuesday");
        break;
    }
    case 3: {
        console.log("Wednesday");
        break;
    }
    case 4: {
        console.log("Thursday");
        break;
    }
    case 5: {
        console.log("Friday");
        break;
    }
    case 6: {
        console.log("Saturday");
        break;
    }
    case 7: {
        console.log("Sunday");
        break;
    }
}
console.log("8. Write a ts program to find maximum between two numbers using conditional operator.");
var num = 6;
var num1 = 5;
if (num > num1) {
    console.log(num);
}
else if (num < num1) {
    console.log(num1);
}
else if (num = num1) {
    console.log(num, "=", num1);
}
console.log("9. Write a ts program to find maximum between three numbers using conditional operator.");
var no = 6;
var no1 = 6;
var no2 = 6;
if (no > no1 && no > no2) {
    console.log(no);
}
else if (no1 > no && no1 > no2) {
    console.log(no1);
}
else if (no2 > no1 && no2 > no) {
    console.log(no2);
}
else if (no = no1 = no2) {
    console.log(no, "=", no1, "=", no2);
}
console.log("10. Write a ts program to check whether a number is even or odd using conditional operator.");
var number1 = 653;
if (number1 % 2 == 0) {
    console.log("even");
}
if (number1 % 2 != 0) {
    console.log("odd");
}
console.log("11. Write a ts program to check whether year is leap year or not using conditional operator.");
var year = 2012;
if (year % 400 == 0) {
    console.log(year, "is a leap year");
}
else if (year % 100 == 0) {
    console.log(year, "is not a leap");
}
else if (year % 4 == 0) {
    console.log(year, "is a leap year");
}
else {
    console.log(year, "is not a leap year");
}
console.log("12. Write a ts program print total number of days in a month using switch case.");
var month = "january";
switch (month) {
    case "january": {
        console.log(31);
        break;
    }
    case "February": {
        console.log(28);
        break;
    }
    case "March": {
        console.log(31);
        break;
    }
    case "April": {
        console.log(30);
        break;
    }
    case "May": {
        console.log(31);
        break;
    }
    case "June": {
        console.log(30);
        break;
    }
    case "July": {
        console.log(31);
        break;
    }
    case "August": {
        console.log(31);
        break;
    }
    case "September": {
        console.log(30);
        break;
    }
    case "October": {
        console.log(31);
        break;
    }
    case "November": {
        console.log(30);
        break;
    }
    case "December": {
        console.log(31);
        break;
    }
}
console.log("13. Write a ts program to check whether an alphabet is vowel or consonant using switch case.");
var alphabet = "c";
switch (alphabet) {
    case "a": {
        console.log("vowel");
        break;
    }
    case "e": {
        console.log("vowel");
        break;
    }
    case "i": {
        console.log("vowel");
        break;
    }
    case "o": {
        console.log("vowel");
        break;
    }
    case "u": {
        console.log("vowel");
        break;
    }
    default: {
        console.log("consonant");
        break;
    }
}
//-------------------End-------------------//
