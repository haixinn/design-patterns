class Car {
    constructor(number, name) {
        this.number = number
        this.name = name
    }
}

class KuaiChe extends Car {
    constructor(number, name) {
        super(number, name)
        this.price = 1
    }
}

class ZhuanChe extends Car {
    constructor(number, name) {
        super(number, name)
        this.price = 2
    }
}

class Trip {
    constructor(car) {
        this.car = car
    }
    start() {
        console.log(`开始行程，名称${this.car.name},车牌号${this.car.number}`)
    }
    end() {
        console.log(`行程结束，价格${this.car.price * 5}`)
    }
}

let car = new ZhuanChe('黑A12345', '宝马')
let trip = new Trip(car)
trip.start()
trip.end()