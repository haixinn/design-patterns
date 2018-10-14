class Product{
    init(){
        console.log('init')
    }
}

class Creator{
    create(){
        return new Product()
    }
}

//jQuery  React.createElement
let creator = new Creator()
let p = creator.create()
p.init()

window.$ = function(selector){
    return new jQuery(selector)
}

React.createElement = function(tag,attrs,children){
    return new vNode(tag,attrs,children)
}