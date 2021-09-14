//Задание 1
function numD (num, degree) {
    if (degree == 1) return num;
    return numD(num, degree-1)*num;
}
let num = 123//+prompt ("Введите число");
let degree = 5//+prompt ("Введите степень");
document.getElementById ("app1").innerHTML = `Числу ${num} в ${degree} соответствует <b>${numD(num, degree)}</b>`


//Задание 2
function deleteNum (a, b) {
    if (b == 0)
        return a;
    if (a > b)
        return deleteNum (b, a % b);
    else
        return deleteNum (a, b % a);
}
let a=10//+prompt ("Введите первое число");
let b=15//+prompt ("Введите второе число");
document.getElementById ("app2").innerHTML = `Общим наибольшим делителем является ${deleteNum(a,b)};`

//задание 3
function biggestNum (number) {
    return number == 0 ? 0 :
    Math.max(number % 10, biggestNum(number / 10));
}
let number = 123//+prompt ("введите многозначное число");
document.getElementById ("app3").innerHTML = `Наибольшая цифра в числе ${number} - это ${biggestNum (number)}`;

//Задание 4
function checker (n, x=3) {
    if(n === 2) return true;
    if(n < 2 || n % 2 === 0)  return false;
    if(x * x > n) return true;
    if(n % x === 0) return false;
    return checker(n, x + 2) 
}
let n = +prompt ("Введите число"); 
document.getElementById ("app4").innerHTML = `${checker (n, x=3)}`;

// Задание 5
