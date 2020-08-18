let helloTS : string = 'Hello Typescript'
// document.querySelectorAll('#app')[0].innerHTML = helloTS

// 数组
let list1: number[] = [1, 2, 3]
let list2: Array<number> = [1, 2, 3]

// 枚举enum
enum Direction {
    Up,
    Down,
    Left,
    Right
}
let dir: Direction = Direction.Up
console.log(dir)
console.log(Direction[1])
enum Animal {
    big = 'pig',
    small = 'rabbit'
}
let ani: Animal = Animal.big
console.log(ani)

// 元组tuple
let tupleType: [string, number]
tupleType = ['qrq', 25]
console.log(tupleType)

// unknown
let unknownType: unknown
unknownType = 1
unknownType = 'qrq'

// never 类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型
function error(message: string): never {
  throw new Error(message)
}

type Foo = string | number
function controlFlowAnalysisWithNever(foo: Foo) {
    if (typeof foo === 'string') {

    } else if (typeof foo === 'number') {

    } else {
        const check: never = foo
    }
}

// 类型断言
let someValue: any = 'heartbeat'
let someValueLength: number = (<string>someValue).length
let someValueLength1: number = (someValue as string).length
console.log(someValueLength)