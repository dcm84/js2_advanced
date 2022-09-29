/* Создайте функцию mortgage() для нахождения аннуитетного ипотечного платежа. Экспортируйте её */

export function mortgage(S, p, n){
    let sum = S
    let percent = p / (12 * 100)
    let months = n * 12

    return (sum * percent / (1 - (percent + 1) ** -months)).toFixed(2)
  }