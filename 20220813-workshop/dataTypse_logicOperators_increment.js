// console.log("hello")

// var, let, const

// var x = "murat"
// console.log(typeof x)
// x = 5
// console.log(typeof x)

// let y = "hector"
// console.log("y : ", typeof y)
// y = 5
// console.log("y : ", typeof y)

// const z = "seher"
// console.log("z : ", typeof z)
// // z = 10

// var a
// console.log(a)

// b = 2 //undeclared
// console.log(b)

// const obj = {
//     name: "chris",
//     surname: "dev",
// }
// obj.number = 12
// console.log(obj)

// let str = 5
// console.log(typeof str)

// let str2 = new Number(5)
// console.log(typeof str2)
// console.log(str2)

// let dt = new Date()
// console.log(dt)
//primitve immutable


// Objects are mutable: They are addressed by reference, not by value. But primitive values are immutable. They are addressed by value.
// const x = person;  // Will not create a copy of person.
// The object x is not a copy of person. It is person. Both x and person are the same object.

/* const arr = [1,2,3]
console.log(typeof arr)
const arr2 = arr // creates same object
arr.push(4)
console.log(arr)
console.log(arr2) */

/* let str = "goktug"
let str2 = str // creates a copy
str = "chris"
console.log(str)
console.log(str2) */

/*
All primitives are immutable, i.e., they cannot be altered. It is important not to confuse a primitive itself with a variable assigned a primitive value. The variable may be reassigned a new value, but the existing value can not be changed in the ways that objects, arrays, and functions can be altered. */

/* var bar = "baz"
console.log(bar)
const bar2 = bar.toUpperCase()
console.log(bar)
console.log(bar2) */

/* let name = "göktuğ"
console.log(name.toUpperCase())
console.log(name)
name = name.toUpperCase()
console.log(name) */

/* const foo = []
console.log(foo)
foo.push("hello")
console.log(foo) */

// let x = 12 // 12
// let y = x++ // y 12 x 12
// let z = --y // x 13 y 11 z 11
// let c = ++x // c 14 x 14
// console.log(x,y,z,c)

// let a = 5
// console.log(a--)
// console.log(a)

/* let a = undefined
let b = 10
console.log(a || b) */

/* let x = "" // [] {} true
let y = 10
console.log(x && y) */

/* console.log(Boolean(""))
console.log(Boolean({}))
console.log(Boolean([])) */

/* const obj = {a:1}
// const obj2 = {a:1}
const obj2 = obj

console.log(obj === obj2) */

/* let nmb = 5
// let nmb2 = 5
let nmb2 = nmb

console.log(nmb === nmb2)
 */

/* let name = "chris"
console.log(!Boolean(name))

if(!(name !== "chris")) console.log("hello")
if(name === "chris") console.log("hello") */


