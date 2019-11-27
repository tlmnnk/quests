/* Функция genitive(n, word) принимает положительно целое число и объект word с вариантами запими слов для разных чисел.
Объект word имеет свойства singular many1 many2, например {singular: "курс", many1: "курса", many2: "курсов"} 

Функция должна вернуть строку '5 курсов'*/ 

const genitive = (n, word) =>       (/1$/.test(n) && n != 11) ? console.log(n + ' ' + word.singular) :
                                    (/[2-4]$/.test(n)) ? console.log(n + ' ' + word.many1) : 
                                    console.log(n + ' ' + word.many2);