let star = {
    name: 'nijais',
    age: 28,
    phone: '138xxxx'
}

let agent = new Proxy(star, {
    get(target, key) {
        console.log(target, key)
        if (key === 'phone') {
            return '10086'
        }
        if (key === 'price') {
            return 120000
        }
        return target[key]
    },
    set(target, key, val) {
        console.log(target, key, val)
        if (key === 'customPrice') {
            if (val < 100000) {
                throw new Error('lower')
            } else {
                target[key] = val
                return true
            }
        }
    }
})

console.log(agent.name)
console.log(agent.age)
console.log(agent.phone)
console.log(agent.price)

agent.customPrice = 123456
console.log(agent.customPrice)
agent.customPrice = 998