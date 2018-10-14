class Iterator {
    constructor(container) {
        this.list = container.list
        this.index = 0
    }
    next() {
        if (this.hasNext()) {
            return this.list[this.index++]
        }
        return null
    }
    hasNext() {
        if (this.index >= this.list.length) {
            return false
        }
        return true
    }
}

class Container {
    constructor(list) {
        this.list = list
    }
    getIterator() {
        return new Iterator(this)
    }
}

let container = new Container([1, 2, 3, 4, 5, 6])
let iterator = container.getIterator()
while (iterator.hasNext()) {
    console.log(iterator.next())
}

function each(data) {
    // let iterator = data[Symbol.iterator]()
    // let item = { done: false }
    // while (!item.done) {
    //     item = iterator.next()
    //     if (!item.done) {
    //         console.log(item.value)
    //     }
    // }

    for (let item of data) {
        console.log(item)
    }
}
