export class Player {
    nome: string;
    numero: number;
    posicao: string;
    imagem: string;
    idade: number;
    dataNascimento: string;
    nacionalidade: string;
    altura: number;
    peso: number;

    constructor(
        nome: string,
        numero: number,
        posicao: string,
        imagem: string,
        idade: number,
        dataNascimento: string,
        nacionalidade: string,
        altura: number,
        peso: number
    ) {
        this.nome = nome;
        this.numero = numero;
        this.posicao = posicao;
        this.imagem = imagem;
        this.idade = idade;
        this.dataNascimento = dataNascimento;
        this.nacionalidade = nacionalidade;
        this.altura = altura;
        this.peso = peso;
    }
}
