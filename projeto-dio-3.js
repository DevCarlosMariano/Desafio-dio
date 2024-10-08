class heroi {
    constructor(name, idade, tipo) {
        this.nome = name;  
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
            if (this.tipo === "mago"){
                ataque = "usou magia"
            }else if (this.tipo === "ninja"){
                ataque = "usou shuriken"
            }else if (this.tipo === "guerreiro"){
                ataque = "usou espada"
            }else if (this.tipo === "monge"){
                ataque = " usou artes marciais"
            }
                return `o ${this.tipo} atacou usando ${ataque}`
            
        }
    }
let heroi1 = new heroi("superCarl", 20, "monge");

let mensagem = heroi1.atacar();
console.log(mensagem);