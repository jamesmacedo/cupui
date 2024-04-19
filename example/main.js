import Factory from 'cupui'

import data from './data.json' assert {type:'json'}
import {schema} from './schema.js'


// Please take a look at the 'schema.js' file
console.log(new Factory().schema(schema).keep(data))

