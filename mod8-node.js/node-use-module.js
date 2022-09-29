/* Импортируйте функцию из модуля mymodule.js. Вызовите функцию и результат выведите в console.log(). Запустите текущий скрипт в Node.js: node node-use-module.js и убедитесь, что результат показан верно */
import {mortgage} from './mymodule.js'

console.log(mortgage(1000000, 5, 60))