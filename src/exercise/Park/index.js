class Park {
    constructor(floors) {
        this.floors = floors || [];
        this.camera = new Camera();
        this.screen = new Screen();
        this.carList = {};
    }
    in(car) {
        const info = this.camera.shot(car)
        const i = parseInt(Math.random() * 100 % 100)
        const place = this.floors[0].places[i]
        place.in()
        info.place = place
        this.carList[car.num] = info
        console.log('in', this, info)
    }
    out(car) {
        const info = this.carList[car.num]
        const place = info.place
        place.out()
        this.screen.show(car, info.inTime)
        console.log('out', this.carList[car.num])
        delete this.carList[car.num]
    }
    emptyNum() {
        return this.floors.map(floor => {
            return `${floor.index} 层还有 ${floor.emptyPlaceNumber()} 个车位`
        }).join('\n')
    }
}

class Camera {
    shot(car) {
        return {
            num: car.num,
            inTime: Date.now()
        }
    }
}

class Screen {
    show(car, inTime) {
        console.log(`车牌号 ${car.num}`)
        console.log(`停车时间 ${Date.now() - inTime}`)
    }
}

class Car {
    constructor(num) {
        this.num = num;
    }
}

class Floors {
    constructor(index, places) {
        this.index = index;
        this.places = places || [];
    }
    emptyPlaceNumber() {
        return this.places.filter(p => p.empty).length
    }
}

class Place {
    constructor() {
        this.empty = true;
    }
    in() {
        this.empty = false;
    }
    out() {
        this.empty = true;
    }
}

//test
const floors = []
for (let i = 0; i < 3; i++) {
    const places = []
    for (let j = 0; j < 100; j++) {
        places[j] = new Place()
    }
    floors[i] = new Floors(i + 1, places)
}

const park = new Park(floors)

const car1 = new Car(123)
const car2 = new Car(456)
const car3 = new Car(789)

console.log(park.emptyNum())
park.in(car1)
console.log(park.emptyNum())
park.in(car2)
console.log(park.emptyNum())
park.in(car3)
park.out(car1)
console.log(park.emptyNum())
