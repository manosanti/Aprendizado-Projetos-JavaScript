let nome = 'Lucas';
let idade = 25;
let estaAprovado = true;
let sobrenome = 'undefined';
let corSelecionado = null;
// variáveis e os seus tipos: string, number, true, undefined & nul...

let pessoa = {
    nome: 'Lucas',
    idade: 25,
    estaAprovado: true,
    sobrenome: 'Santiago'
};

console.log(pessoa);

let moedas = {
    brasil: 'Reais',
    estadosUnidos: 'Dolar',
    mexico: 'Pesos'
};
// neste caso, e criado um grupo de variáveis


let familia = [26,50,20,'Lucas',38,40];

console.log(familia[3]);

// arrays, irá mostrar todos os valores dentro, porém se colocar [] e o número dentro, ele puxa especificadamente.

let nomeDoAmigo = ['Nicolas', 18, 'Itaquaquecetuba'];
console.log(nomeDoAmigo);

// Função = Verbo + Substântivo

let corSite = "Azul";
function resetaCor(cor,tonalidade){
    corSite = cor + tonalidade;
};

console.log(corSite);
resetaCor("Verde"," claro");
console.log(corSite);

//

let corCelular = "Preto";
function mudaCor(cor,tonalidade){
    corCelular = cor + ' ' + tonalidade;
};

console.log(corCelular);
mudaCor("Preto","Metálico");
console.log(corCelular);

// Realizar uma tarefa, não devolve nada

function dizerNome(){
    console.log("Lucas");
};

dizerNome();