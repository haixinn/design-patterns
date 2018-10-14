class SingleObject {
    private constructor(){}
    login() {
        console.log('login')
    }
    private static instance
    static getInstance() {
        if (!SingleObject.instance) {
            SingleObject.instance = new SingleObject()
        }
        return SingleObject.instance
    }
}


let obj1 = SingleObject.getInstance()
obj1.login()
let obj2 = SingleObject.getInstance()
obj2.login()
console.log('obj1 === obj2', obj1 === obj2)

// let obj3 = new SingleObject()  //编译错误私有不可见
// obj3.login()
// console.log('obj1 === obj3', obj1 === obj3)
