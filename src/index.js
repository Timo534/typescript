var helloTS = 'Hello Typescript';
// document.querySelectorAll('#app')[0].innerHTML = helloTS
// 数组
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
// 枚举enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
var dir = Direction.Up;
console.log(dir);
console.log(Direction[1]);
var Animal;
(function (Animal) {
    Animal["big"] = "pig";
    Animal["small"] = "rabbit";
})(Animal || (Animal = {}));
var ani = Animal.big;
console.log(ani);
// 元组tuple
var tupleType;
tupleType = ['qrq', 25];
console.log(tupleType);
// unknown
var unknownType;
unknownType = 1;
unknownType = 'qrq';
// never 类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型
function error(message) {
    throw new Error(message);
}
function controlFlowAnalysisWithNever(foo) {
    if (typeof foo === 'string') {
    }
    else if (typeof foo === 'number') {
    }
    else {
        var check = foo;
    }
}
// 类型断言
var someValue = 123;
var someValueLength = someValue.split('');
console.log(someValueLength);
