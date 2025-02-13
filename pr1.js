// Завдання 1: Оголошення та маніпуляція змінними
let intVar = 16;
let floatVar = 16.5;
let stringVar = "Артем"; 
let boolVar = true; 

console.log(typeof intVar, intVar);
console.log(typeof floatVar, floatVar);
console.log(typeof stringVar, stringVar);
console.log(typeof boolVar, boolVar);

// Зміна значень і перевірка типів
intVar = "16"; 
console.log(typeof intVar, intVar);

stringVar = 5 + "5"; 
console.log(typeof stringVar, stringVar);

boolVar = Number(boolVar); 
console.log(typeof boolVar, boolVar);

// Створення об'єкта
let person = {
    name: "Артем",
    age: 16,
    isStudent: true,
    hobby: "програмування"
};
console.log(JSON.stringify(person)); 

// Завдання 2: Робота з арифметичними операціями
let num1 = 8;
let num2 = 12;
let num3 = 20;

let avg = (num1 + num2 + num3) / 3;
console.log("Середнє арифметичне:", avg);

console.log("Модуль:", Math.abs(num1));
console.log("Округлення в більшу:", Math.ceil(avg));
console.log("Округлення в меншу:", Math.floor(avg));
console.log("Піднесення до степеня:", Math.pow(num1, 2));

console.log("Чи ділиться середнє арифметичне на 5?", avg % 5 === 0);
console.log("Чи ділиться середнє арифметичне на 7?", avg % 7 === 0);

// Перевірка існування трикутника
if (num1 + num2 > num3 && num1 + num3 > num2 && num2 + num3 > num1) {
    console.log("Такий трикутник існує.");
} else {
    console.log("Такий трикутник не може існувати.");
}

// Завдання 3: Логічні та порівняльні оператори
let a = 4;
let b = 16;
let c = 25;

console.log("Найбільше число:", Math.max(a, b, c));
console.log("Найменше число:", Math.min(a, b, c));

console.log("Є хоча б одне парне число?", a % 2 === 0  b % 2 === 0  c % 2 === 0);
console.log("Результат перевірки умови:", a > b && b < c);

// Перевірка, чи число є простим
let num = 17;
let isPrime = num > 1;
for (let i = 2; i < num; i++) {
    if (num % i === 0) {
        isPrime = false;
        break;
    }
}
console.log(`Число ${num} є простим?`, isPrime);

// Завдання 4: Введення та перевірки користувача
let userName = "Артем";
let birthYear = 2008;
let city = "Луцьк"; 

let currentYear = new Date().getFullYear();
let age = currentYear - birthYear;
console.log(`${userName}, вам ${age} років.`);

// Визначення вікової групи
if (age < 12) {
    console.log("Ви дитина.");
} else if (age < 18) {
    console.log("Ви підліток.");
} else if (age < 60) {
    console.log("Ви дорослий.");
} else {
    console.log("Ви літня людина.");
}

// Перевірка, чи є місто столицею
let capitals = {
    "Україна": "Київ",
    "США": "Вашингтон",
    "Франція": "Париж",
    "Німеччина": "Берлін"
};

if (capitals["Україна"].toLowerCase() === city.toLowerCase()) {
    console.log(`${city} є столицею України.`);
} else {
    console.log(`${city} не є столицею України.`);
}

/* 
Контрольні питання:

1. Які особливості оголошення змінних у JavaScript (var, let, const)?
   - var – застарілий спосіб, має функціональну область видимості.
   - let – має блочну область видимості, може змінювати значення.
   - const – теж має блочну область видимості, але не може змінювати значення.

2. Які операції можна виконувати з рядками у JavaScript?
   - Конкатенація (+), пошук (indexOf, includes), заміна (replace), вирізання (slice, substring), зміна регістру (toUpperCase, toLowerCase).

3. Яка різниця між == і === при порівнянні значень?
   - == порівнює значення, але ігнорує типи.
   - === порівнює і значення, і тип даних.

4. Як працюють логічні оператори в умовах та які є їхні особливості?
   - && (логічне "і") – повертає true, якщо всі операнди істинні.
   - || (логічне "або") – повертає true, якщо хоча б один операнд істинний.
   - ! (логічне "не") – змінює значення на протилежне.

5. Як перевірити, чи число є простим?
   - Якщо число більше 1 і не ділиться без залишку на жодне число, крім 1 і самого себе, то воно просте.

Висновки:Під час виконання роботи я закріпив знання про змінні, операції з числами та рядками, роботу з логічними та порівняльними операторами. Було цікаво перевіряти, чи існує трикутник і знаходити прості числа. Найбільша складність виникла при написанні перевірки на просте число, оскільки спочатку не врахував оптимізацію перевірки.
*/