let id: number = 5
let company: string = "Google"
let isPublished: boolean = true
let x: any = ""

let numbers: number[] = [1,2,3,4,5]
let arr: any[] = [1,true, {names: "codinglone"}]

// Tuple 
let person: [number, string, boolean] = [1, 'Chuzzi', true]

// Tuple Array
let employee: [number, string][]

employee = [
    [1, 'hello'],
    [2, 'Hi'],
    [3, 'Morning'],

]

// Union 
let num: number | null | boolean = 1

num = true

// Enum 
enum Direction1 {
    Up,
    Down,
    Left,
    Right
}

enum Direction2 {
    Up = 'Up',
    Down = 'Down',
    Left = "Left",
    Right = "Right"
}

type User = {
    id: number,
    name: string
}

// Objects 
const user: User = {
    id: 1,
    name: 'John'
}


// Type Assertion 
let cid: any = 1
// let customerId = <number>cid

let customerId = cid as number

// Functions 
function addNumber(x: number, y: number): number {
    return x + y
}

// Void Function
const log = (message: string | number): void => {
    console.log(message);
    
}

// Interfaces
interface studentInterface {
    names: string
    age: number
    rollNo?: number
    readonly id?: number
}

const student: studentInterface = {
    names: "Fabrice",
    age: 21
}

student.rollNo = 2089720

type Point = number | string 
const p1: Point = 1

interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number) => x - y

// class interface
interface PersonInterface {
    id: number
    name: string
    register(): string
}

// Classes 
class Person implements PersonInterface {
    public id
    public name

    constructor(id: number, name: string){
        this.id = id
        this.name = name
    }

    register = () => `${this.name} is now registered`

}

const chuzzi = new Person(1, "Fabrice")

// Subclasses
class Employee extends Person {
    position: string 

    constructor(id: number, name: string, position: string){
        super(id, name)
        this.position = position
    }
}

const emp = new Employee(3, 'codinglone', 'Tech Lead')




