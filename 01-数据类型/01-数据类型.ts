/**
 * 数据类型
 */

//  1. boolean
/* let isDnone: boolean = false;
console.log(isDnone); */

// 2. number
/* let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;

console.log(`${decLiteral}-${hexLiteral}-${binaryLiteral}-${octalLiteral}`); */

// 3. string
/* let uname: string = "bob"; // 变量名name不能用了
uname = "smith";
console.log(uname); */

// 4. Array
/* let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];
let list3: Array<string> = ["a", "b", "c"];
console.log(list3); */

// 5. 元组Tuple
/* let x: [string, number];
x = ['hello', 10];
// x = [10, 'hello']; //Error
console.log(typeof x);
console.log(`${x[0]}-${x[1]}`);
console.log(x[0].substr(1)); // substr(index): 表示从索引下标 index 开始截取字符串，对 number 类型无效 */

// 5.1 联合类型
/* let y: [String, number, String | number];
y = ['world', 213, 'hello'];
console.log(y);
y[2] = 232;
console.log(y[2]); */

// 6. 枚举enum
/* enum Color {
    Red,
    Green,
    Blue
};
let c: Color = Color.Blue;
console.log(c); // 返回枚举下标 index, 默认从0开始，可手动指定 index
console.log(typeof c); // number 类型 */

// 6.1 手动指定枚举下标 index
/* enum Color{
    Red = 1,
    Green,
    Blue
};

let c: Color = Color.Blue;
console.log(c); */

6.2 
/* enum Color{
    Red = 1,
    Green = 2,
    Blue = 4
};

let c: Color = Color.Blue;
console.log(c); */

// 6.3
/* enum Color{
    Red = 1,
    Green,
    Blue
};

let cn: string = Color[3];
console.log(cn); */

// 7. Any
/* let a: any = 4;
a = 'hello';
a = false;
a = null;
a = undefined;
a = NaN;
a = [1, 2, 3];
console.log(a); */

// 7.1 
// let notSure: any = 3;
// notSure.ifItExists(); // 报错：ifItExists()不存在， ifItExists might exist at runtime
// console.log(notSure.ifItExists());

// notSure.toFixed(); // toFixed存在(但是编译器不检查)s
// console.log(notSure.toFixed());

// let prettySure: Object = 4;
// console.log(prettySure.toFixed()); // Error:属性“toFixed”在类型“Object”上不存在。

// 7.2
/* let list: any[] = [1, true, 'abc'];
list[1] = 100;
console.log(list[1]); */

// 8. void
/* let warnUser = (): void => {
    console.log('This is my warning message!');
    
}

warnUser(); */
// 8.1
/* let unusable: void = undefined;
unusable = null;
// unusable = 'true'; // void: 只能为它赋予undefined和null */

// 9. Null 和 Undefined
/* let u: null = null;
let n: undefined = undefined; */
// null 和 undefined是所有类型的子类型

// 10. Never
// 返回never的函数必须存在无法达到的终点
/* let error = (message: string): never => {
    throw new Error(message);
}

// 推断的返回值类型为never
let fail = () => error('Something failed');

// 返回never的函数必须存在无法达到的终点
let infiniteLoop = (): never => {
    while(true) {

    }
}
 */

// 11. Object
/* declare function create(o: object | null): void;

create({ prop: 0 }); // OK
create(null); // OK

// create(42); // Error
// create("string"); // Error
// create(false); // Error
create(undefined); // Error: create is not defined */

// 12. 类型断言: 搭配any类型使用
// <>
/* let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length; // 类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。
console.log(strLength); */

// 12.1
// as
/* let someValue: any = "this is a string";
let strLength:number = (someValue as string).length;
console.log(strLength); */

/**
 * 注意:
 * 尽可能的多使用let来代替var
 */



















