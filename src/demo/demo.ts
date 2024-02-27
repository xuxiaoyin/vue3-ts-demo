let num: number = 10;

console.log(num);

// 联合类型
let id:string | number = 1;

// 任意类型
let x:any = true;

// 数组类型定义 类型 + []
let arr:number[] = [1,2,3,4,5]
let arr2:string[] = ['a', 'b', 'c']
let arr3:(number | string)[] = ['a', 1, 2, 3]
// 数组泛型
let arr4:Array<number> = [1,2,3,4]
let arr5:Array<string> = ['a']
let arr7:Array<number | string> = ['a', 1]

// object
let o1 = {
  id: 1,
  age: 18,
  user: 'xiaom'
}

// 接口
interface IPerson { // 规范 约束 不做实现
  id: string;    //确定属性
  age?: number;   //可选属性
  [perpName: string]: any; // 任意属性
}

let Tom: IPerson = {
  id: '123',
  age: 18,
  othert: '123',
  test: 666
}

// 函数 输入类型 输出类型
function sum(n1:number, n2:number):number {
  return n1 + n2
}

function fn(n1:number,n2:number):void {
  if (n1 > n2) {
    // do something
  }
}

let num2:number = sum(10,20)

interface IArticle {
  id: number;
  user: string;
  title: string;
}

// 扩展
let items:IArticle[] = [
  {id: 1, user: 'test', title: '标题'}
]

let items1: Array<IArticle> = [
  { id: 1, user: 'test', title: '标题' }
]

// 泛型是指在定义函数、接口或类的时候不指定具体类型， 使用的时候再指定

function f1<T>(id:T, count:T):T[] {
  return [id, count]
}

f1<number>(1, 2);
f1<string>('hellow', '123');
f1<boolean>(true, false);

// 泛型约束
interface ILength {
  length: number
}

function f2<T extends ILength>(s:T):number {
  return s.length // 不是所有的类型都有length属性
}

f2<string>('hello')
f2<number[]>([1,2,3,4])

// 扩展
// 输入类型和输出类型复用
interface IInspectFn {
  (s1: number, s2: number): boolean
}
// 定义一个函数，判断传入的参数是否一样
// function fn1(s1:string,s2:string):boolean {
//   return s1 === s2
// }

let fn1:IInspectFn = (s1, s2) => s1 === s2
fn1(100, 200);

function fn2(s1:number, s2:number): boolean {
  return s1 > s2
}

let f3:IInspectFn = (n1, n2) => n1 > n2 

interface IInspectFn1 {
  <T>(s1:T, s2:T): boolean
}

let fn4:IInspectFn1 = function (a,b) {
  return a !== b
}

fn4<number>(1, 5)
fn4<string>('a', 'aa')

interface IInspectFn2<T> {
  (s1: T, s2: T): boolean
}

let fn5: IInspectFn2<string> = function (a, b) {
  return a !== b
}
fn5('a', 'b')

