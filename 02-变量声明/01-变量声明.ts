/**
 * 变量声明
 */

// 1. var声明
/* for (var i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log(i);
    }, 100 * i)
} */
// 通常的解决方法是使用立即执行的函数表达式（IIFE）来捕获每次迭代时i的值.
/* for (var i = 0; i < 10; i++) {
    // capture the current state of 'i'
    // by invoking a function with its current value
    (function(i) {
        setTimeout(function() { console.log(i); }, 100 * i);
    })(i);
} */

// 2. let声明
// 2.1 块作用域: 变量在包含它们的块或for循环之外是不能访问的.
/* let f = (input: boolean) => {
    let a = 100;
    if (input) {
        let b = a + 1;
        return b;
    }

    // return b; // Error: 'b' doesn't exist here
};

console.log(f(true)); */

// 2.1.1 在catch语句里声明的变量也具有同样的作用域规则.
/* try {
    throw "oh no!";
} catch (e) {
    console.log("Oh well.");  
}

// console.log(e); // Error: 'e' doesn't exist here */

// 2.1.2 不能在let语句之前访问它们，幸运的是TypeScript可以告诉我们这些信息.
/* a++; // illegal to use 'a' before it's declared;
let a; */

// 2.1.3 暂时性死区
// 注意一点，我们仍然可以在一个拥有块作用域变量被声明前获取它。 只是我们不能在变量声明前去调用那个函数。
/* let foo = () => a;

let a;
a = 10;
console.log(foo()); */

/* let foo = () => a;

// 不能在'a'被声明前调用'foo'
// 运行时应该抛出错误
foo();
let a; */

// 2.2 重定义及屏蔽
// 2.2.1 并不是要求两个均是块级作用域的声明TypeScript才会给出一个错误的警告。
/* function f(x) {
    let x = 100; // 错误: 干扰参数声明
}

function g() {
    let x = 100;
    var x = 100; // 错误: 不能同时声明x
} */

// 2.2.2 并不是说块级作用域变量不能用函数作用域变量来声明。 而是块级作用域变量需要在明显不同的块里声明。
/* let f = (condition, x) => {
    if (condition) {
        let x = 100; // 注意: x所在的位置
        return x;
    }
    return x;
}

console.log(f(false, 0));
console.log(f(true, 0));
 */

// 2.2.3 屏蔽: 在一个嵌套作用域里引入一个新名字的行为.
/* let sumMatrix = (matrix: number[][]) => {
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (let i = 0; i < currentRow.length; i++) {
            sum += currentRow[i];
        }
    }
    return sum;
};

console.log(sumMatrix([[1, 1], [1, 2], [1, 3], [1, 4]])); */
/**
 * 这个版本的循环能得到正确的结果，因为内层循环的i可以屏蔽掉外层循环的i。
 * 通常来讲应该避免使用屏蔽，因为我们需要写出清晰的代码。 同时也有些场景适合利用它，你需要好好打算一下。
 */

// 2.2.4 块级作用域变量的获取
/* let theCityThatAlwaysSleeps = () => {
    let getCity;
    if (true) {
        let city = "Seattle";
        getCity = () => city;
    }
    return getCity;
};

console.log(theCityThatAlwaysSleeps()); */

/**
 * 针对 每次迭代都会创建这样一个新作用域。 
 * 这就是我们在使用立即执行的函数表达式时做的事，所以在 setTimeout例子里我们仅使用let声明就可以了。
 */
/* for (let i = 0; i < 10 ; i++) {
    setTimeout(function() {console.log(i); }, 100 * i);
} */

// 3. const声明
// 拥有与 let相同的作用域规则，但是不能对它们重新赋值。
/* const numLivesForCat = 9;
const kitty = {
    name: "Aurora",
    numLives: numLivesForCat,
}

// Error
// kitty = {
//     name: "Danielle",
//     numLives: numLivesForCat
// };

// all "okay"
kitty.name = "Rory";
kitty.name = "Kitty";
kitty.name = "Cat";
kitty.numLives--; */
/**
 * 除非你使用特殊的方法去避免，实际上const变量的内部状态是可修改的。 
 * 幸运的是，TypeScript允许你将对象的成员设置成只读的。 接口一章有详细说明。
 */

 /**
  * 总结:
  *  使用最小特权原则，所有变量除了你计划去修改的都应该使用const.
  */

// 4. 解构:  ECMAScript 2015 特性
// 4.1 解构数组
/* let input = [1, 2];
let [first, second] = input;
console.log(first); // outputs 1
console.log(second); // outputs 2 */

// 4.1.1 解构作用于已声明的变量会更好：
/* let input = [1, 2];
let [first, second] = input;
[first, second] = [second, first]; // 交换变量 */

// 4.1.2 作用于函数参数
/* let f = ([first, second]: [number, number]) => {
    console.log(first);
    console.log(second);
};
f([1, 3]); */

// 4.1.3 数组里使用...语法创建剩余变量
/* let [first, ...rest] = [1, 2, 3, 4];
console.log(first); // outputs 1
console.log(rest); // outputs [ 2, 3, 4 ] */

// 4.1.4 以忽略你不关心的尾随元素 或其他元素
/* let [first] = [1, 2, 3, 4];
console.log(first); // outputs 1 
let [, second, , fourth] = [1, 2, 3, 4];
*/

// 4.2 对象解构

/* let o = {
    a: "foo",
    b: 12,
    c: "bar"
};
let {a, b} = o;
// 这通过 o.a and o.b 创建了 a 和 b 。 
console.log(a);
// 注意，如果你不需要 c 你可以忽略它。
({ a, b } = { 
    a: "baz",
    b: 101 
});
console.log(a); */

// 4.2.1 在对象里使用...语法创建剩余变量
/* let { a, ...passthrough } = {
    a: 1,
    b: 2,
    c: [1, 2, 3],
    d: 4
};
let total = passthrough.b + passthrough.c.length;
console.log(total); */

// 4.2.2 属性重命名
/* let { a: newName1, b: newName2 } = {
    a: 1,
    b: 2
};
console.log(newName1); */

// 4.2.3 默认值
// 默认值可以让你在属性为 undefined 时使用缺省值：
/* let keepWholeObject = (wholeObject: {a: string, b?: number}) => {
    let {a, b = 1001} = wholeObject;
    console.log(a);
    console.log(b);  
};
keepWholeObject({a:'df', b: undefined}); */
// 现在，即使 b 为 undefined ， keepWholeObject 函数的变量 wholeObject 的属性 a 和 b 都会有值。

// 4.2.4 函数声明
/* type C = {a: string, b: number};
function f({a, b}: C): void {
    //...
} */

// 4.2.4.1 更多的是指定默认值,首先，你需要在默认值之前设置其格式。
/* let f = ({a="", b=0} = {}): void => {
    //...
}
f(); */
// 上面的代码是一个类型推断的例子, 类型推论中会有详细讲解.

// 4.2.4.2 在解构属性上给予一个默认或可选的属性用来替换主初始化列表。 要知道 C 的定义有一个 b 可选属性：
/* let f = ({a, b = 0} = {a: ""}):void => {
    console.log(a);
    console.log(b);
};

f({a: "yes"}); //默认b = 0
f(); // 默认为{a: ""}，然后默认为b = 0
// f({}); // 错误，如果您提供参数，则需要'a' */

// 4.3 展开
// 与解构相反, 将一个数组展开为另一个数组,或将一个对象展开为另一个对象

// 4.3.1 展开数组
/* let first = [1, 2];
let second = [3, 4];
let bothPlus = [0, ...first, ... second, 5];
console.log(bothPlus); */

// 4.3.2 展开对象
/* let defaults = {
    a: 1,
    b: 2,
    c: 3
};
let add = {
    ...defaults, //注意: ...defaults的位置,下面我放到后面,注意观察输出结果
    d: 4
}
console.log(add); */

/* let defaults = {
    a: 1,
    b: 2,
    c: 3
};
let add = {
    a: 4, // 注意: 属性名a, 与defaults中的a相同的属性名
    ...defaults, // 注意: ...defaults的位置, 放后面了
}
console.log(add); //add中的属性a值被defaults覆盖了, 结果为{ a: 1, b: 2, c: 3 } */

// 4.3.3 对象展开：它仅包含对象 自身的可枚举属性。 大体上是说当你展开一个对象实例时，你会丢失其方法。
/* class C {
    p = 12;
    m() {
    }
  }
  let c = new C();
  let clone = { ...c };
  clone.p; // ok
//   clone.m(); // error!  */

/**
 * Tips：
 * TypeScript编译器不允许展开泛型函数上的类型参数。 这个特性会在TypeScript的未来版本中考虑实现。
 */





