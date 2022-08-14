
// Como podemos melhorar o esse código usando TS? 
/*
let pessoa1 = {};
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "atriz"

let pessoa2 = {}
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";

let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};

let pessoa4 = {
    nome = "carlos",
    idade = 19,
    profissao = "padeiro"
}*/
enum Trabalho {
    Atriz,
    Padeiro
}

type Pessoa  {
   nome: string
   idade: number,
   profissao: Trabalho
};

let pessoa1: Pessoa  = {
    nome: 'maria',
    idade: 29,
    profissao: Trabalho.Atriz
};

let pessoa2: Pessoa  = {
    nome : "roberto",
    idade : 19,
    profissao : Trabalho.Padeiro
};

let pessoa3: Pessoa  = {
    nome: "laura",
    idade: 32,
    profissao: Trabalho.Atriz
};

let pessoa4: Pessoa  = {
    nome: "carlos",
    idade: 19,
    profissao: Trabalho.Padeiro
};