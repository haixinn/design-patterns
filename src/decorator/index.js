class Cricle {
    draw() {
        console.log('cricle')
    }
}

class Decorator {
    constructor(cricle) {
        this.cricle = cricle
    }
    draw() {
        this.cricle.draw()
        this.setRedBorder(cricle)
    }
    setRedBorder(cricle) {
        console.log('set', cricle)
    }
}

let cricle = new Cricle()
cricle.draw()

let dec = new Decorator(cricle)
dec.draw()