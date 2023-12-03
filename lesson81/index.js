// --------------------------Домашка--------------------------------//
// 1) Создайте произвольный массив чисел.
//  Используя цикл for обойдите этот массив и выведите в консоль только четные числа.
// 2) Создайте массив из всех цветов радуги.
// Используя цикл for обойдите этот массив и выведите в консоль все цвета радуги, но в обратном порядке,
//  p.s. обратите внимание на индексы массивов и стартовую позицию для i.

const numbers = [3, 1, 4, 2, 6, 5, 9, 8, 7, 10, 13, 15, 12, 17, 11, 16, 14]

for (let i = 2; i <= numbers.length; i++) {
    if (i % 2 == 0)
    console.log(i)
}

const rainbowСolors = [1, 2, 3, 4, 5, 6, 7]
rainbowСolors[0] = `Red`
rainbowСolors[1] = `Orange`
rainbowСolors[2] = `Yellow`
rainbowСolors[3] = `Green`
rainbowСolors[4] = `Blue`
rainbowСolors[5] = `Indigo`
rainbowСolors[6] = `Violet`
for (let i = rainbowСolors.length - 1; i >= 0; i--) {
    console.log(rainbowСolors[i])
}

