console.log('Hello, Node.js!')

import { compareAsc, format } from 'date-fns'
import {ru} from 'date-fns/locale/index.js'

console.log(format(new Date(2014, 1, 11), 'yyyy-MM-dd EEEE', {locale: ru}))