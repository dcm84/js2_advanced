/* найти слово, содержащее "ре" и индекс */

const arr = ['ехал', 'грека', 'через', 'реку'];

console.log(arr.find(el => el.includes("ре")))
console.log(arr.findIndex(el => el.includes("ре")))
