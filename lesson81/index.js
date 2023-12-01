// --------------------------Домашка--------------------------------//
// 1) Создайте произвольный массив чисел.
//  Используя цикл for обойдите этот массив и выведите в консоль только четные числа.
// 2) Создайте массив из всех цветов радуги.
// Используя цикл for обойдите этот массив и выведите в консоль все цвета радуги, но в обратном порядке,
//  p.s. обратите внимание на индексы массивов и стартовую позицию для i.

const numbersI = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let i = 0; i < numbersI.length; i = i + 2) {
    console.log(numbersI[i] + 1)
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