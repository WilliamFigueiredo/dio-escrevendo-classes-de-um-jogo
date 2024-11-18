class padraoHeroi {
constructor (name, classe, ataque ) {

this.name = name
this.classe = classe 
this.ataque = ataque
}
atacar () {

console.log (`O ${this.name} atacou usando ${this.ataque}   `) 
}



}


let viking = new padraoHeroi ("Ragnar", "o viking ", "a besta")
let mago = new padraoHeroi ("Merlin", "o Mago ", "sua magia")
let ninja = new padraoHeroi ("Rikimaru", "o Ninja", "a Katana")


viking.atacar ()
mago.atacar ()
ninja.atacar ()




