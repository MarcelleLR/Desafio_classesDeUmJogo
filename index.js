class hero {
    constructor ( _name, age , type){
        this.name = _name
        this.age = age
        this.type = type
    }

    attack() {
        if (this.type === 'mago'){
            this.attack = 'magia'
        } else if (this.type === 'guerreiro'){
            this.attack = 'espada'
        } else if (this.type === 'monge'){
            this.attack = 'artes maciais'
        } else if (this.type === 'ninja'){
            this.attack = 'shuriken'
        }
        console.log (`O ${this.type} ${this.name} atacou usando ${this.attack}!`)
    }
}
let mago = new hero('Gandalf', 115, 'mago')
let ninja = new hero('Naruto', 16, 'ninja')
let monge = new hero('Aang', 100, 'monge')
let guerreiro = new hero('Ragnar', 32, 'guerreiro')

mago.attack()
ninja.attack()
monge.attack()
guerreiro.attack()