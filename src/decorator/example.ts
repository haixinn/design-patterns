//装饰类
@testDec
class Demo{

}
function testDec(target){
    taeget.isDec = true
}
Demo.isDec // true


@testDec(false)
class Demo{

}
function testDec(isDec){
    return function(target){
        target.isDec = isDec
    }
}
Demo.isDec  //false


function mixins(...list){
    return function(target){
        Object.assign(target.prototype,...list)
    }
} 
const Foo = {
    foo(){
        console.log('foo)
    }
}
@mixins(Foo)
class MyClass{}

let obj = new MyClass
obj.foo()  //foo


//装饰方法
class Person {
    constructor(){
        this.a = 'a'
        this.b = 'b'
    }
    @readonly
    log(){
        console.log(this.a,this.b)
    }
}

function readonly(target,name,desriptor){
    desriptor.writable = false
    return desriptor
}

var p = new Person() 
p.log()  //a,b
p.log = function(){console.log(1)} //babel插件会报错，ts不会报错。
p.log()  //a,b

//add log
class MathAdd{
    @log
    add(a,b){
        return a + b
    }
}

const math = new MathAdd
const res = math.add(1,2)
console.log('res',res)

function log(target,name,desriptor){
    let oldValue = desriptor.value;
    desriptor.value = function(){
        console.log(`Calling ${name}`,arguments)
        return oldValue.apply(this,arguments)
    }
    return desriptor
}
