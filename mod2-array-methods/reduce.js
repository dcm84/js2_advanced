console.log([10, 20, 30].reduce((prev, next) => prev + next))

/* посчитать количество слов с ре */
const arr = ['ехал', 'грека', 'через', 'реку'];

console.log(arr.reduce((prev, next) => prev + (next.includes("ре") ? 1 : 0 ), 0))