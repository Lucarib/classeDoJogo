class Heroi {
    // Construtor que inicializa as propriedades do herói
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    // Método atacar que exibe a mensagem baseada no tipo de herói
    atacar() {
        let ataque;
        switch (this.tipo) {
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            default:
                ataque = "ataque desconhecido";
        }

        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}

// Exemplo de uso
const heroi1 = new Heroi("Aragorn", 30, "guerreiro");
const heroi2 = new Heroi("Gandalf", 60, "mago");
const heroi3 = new Heroi("Bruce", 35, "monge");
const heroi4 = new Heroi("Ryu", 28, "ninja");

// Chamando o método atacar para cada herói
heroi1.atacar();  // Guerreiro atacando
heroi2.atacar();  // Mago atacando
heroi3.atacar();  // Monge atacando
heroi4.atacar();  // Ninja atacando
