class Adapter{
    speicficRequest(){
        return `德国标准插头`
    }
}

class Target {
    constructor(){
        this.adapter = new Adapter()
    }
    request(){
        let info = this.adapter.speicficRequest()
        return `${info} -> 转换器 -> 中国标准插头`
    }
}

let target = new Target()
target.request()
console.log(target.request())