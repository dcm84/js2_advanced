const arr = ['ехал', 'грека', 'через', 'реку', 1200];

console.log(arr.some(el => typeof el === "number"))
console.log(arr.every(el => typeof el === "number"))