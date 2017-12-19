import * as lab1_4 from './lab1-4_constant'
import { varTest as lab1_5 } from './lab1-5_varscope'
import { letTest as lab1_6 } from './lab1-6_letscope'
import lab1_7 from './lab1-7_arrow'
import lab1_8 from './lab1-8_arrow2'
import lab1_9 from './lab1-9_default'
import lab1_10 from './lab1-10_rest'
import lab1_11 from './lab1-11_spread'
import lab1_12 from './lab1-12_stringInterpolation'
import * as lab1_13 from './lab1-13_binOct'
import lab1_14 from './lab1-14_methodProps'
import * as lab1_15 from './lab1-15_arrayMatching'
import * as lab1_16 from './lab1-16_objectMatching'
import * as lab1_17 from './lab1-17_modules'
import exp, { pi, e } from './lab1-18_defaultWildcard'
import * as lab1_19 from './lab1-19_classDef'
import { Rectangle as lab1_20 } from './lab1-20_classInherit'
import { Rectangle as lab1_21 } from './lab1-21_staticMembers'
import { Rectangle as  lab1_22 } from './lab1-22_getterSetter'

console.log('lab1-4', lab1_4)
console.log('lab1-5', new lab1_5())
console.log('lab1-6', new lab1_6())
console.log('lab1-7', lab1_7)
console.log('lab1-8', lab1_8)
console.log('lab1-9', lab1_9(1))
console.log('lab1-10', lab1_10(1, 2, 'Test'))
console.log('lab1-11', lab1_11(1, 2))
console.log('lab1-12', lab1_12)
console.log('lab1-13', lab1_13)
console.log('lab1-14', lab1_14.foo(5,10), lab1_14.bar(20, 10))
console.log('lab1-15', lab1_15)
console.log('lab1-16', lab1_16.getASTNode())
console.log('lab1-17')
lab1_17.testModule()
console.log('lab1-18', "e^{π} = " + exp(pi))
let s = new lab1_19.Shape(1, 50, 150)
console.log('lab1-19', s)
console.log('lab1-20', lab1_20)
console.log('lab1-21', lab1_21.defaultRectangle())
console.log('lab1-22', lab1_22)