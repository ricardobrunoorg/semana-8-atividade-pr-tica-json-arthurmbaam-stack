// B.1. Definição dos dados (JSON)
const catalogo=[
    {
        id:1,
        titulo:"Oppenheimer",
        tipo: "filme",
        ano: 2023,
        generos: ["drama", "história"],
        nota:9,
        assistido:true,
    },
    {
        id:2,
        titulo:"Game of Thrones",
        tipo:"serie",
        ano: 2011,
        generos: ["fantasia", "ação"],
        nota:7,
        assistido:false
    },
    {
        id:3,
        titulo:"Homem aranha: Sem volta para casa",
        tipo:"filme",
        ano:2021,
        generos:["ação","ficção"],
        nota:10,
        assistido:true,
    },
    {
        id:4,
        titulo:"The last of us",
        tipo:"serie",
        ano:2023,
        generos:["drama", "apocalipse"],
        nota:8,
        assistido:false,
    },
    {
        id: 5,
        titulo:"Clube da luta",
        tipo:"filme",
        ano:1999,
        generos:["drama"],
        nota:9,
        assistido:true,
    },
    {
        id:6,
        titulo:"The Office",
        tipo:"serie",
        ano:2005,
        generos:["comédia"],
        nota:6,
        assistido:true
    }
]
//B.2. Acesso e leitura dos dados

console.log(catalogo);
console.log("Primeiro título: ",catalogo[0].titulo);
console.log("Ano do ultimo filme: ",catalogo[5].ano);
console.log("Segundo gênero do terceiro filme: ",catalogo[2].generos[1]);

//B.3. Iterações com iterators
//a)
console.log("Lista de títulos.")
catalogo.forEach(element => {
    console.log(`[${element.tipo}] ${element.titulo} (${element.ano})`)
});
//b)
const titulosEmCaixaAlta=catalogo.map(element=> element.titulo.toUpperCase());
console.log(`Títulos em caixa alta: ${titulosEmCaixaAlta}`);
//c)
const naoAssistidos=catalogo.filter(element=>element.assistido==false);
console.log(`Itens não assistidos: ${naoAssistidos.length}`);

//d)
const avaliacaoMaiorQue9=catalogo.find(element=>element.nota>=9);
if (avaliacaoMaiorQue9){
    console.log(`O primeiro item com a nota maior ou igual a 9 é ${avaliacaoMaiorQue9.titulo} e a nota é ${avaliacaoMaiorQue9.nota}`)
}
else{
    console.log("Não há elementos com nota maior ou igual a 9.");
}
//e)
const somaNotas=catalogo.reduce((acc, element)=> acc+element.nota,0);
const mediaNotas=somaNotas/catalogo.length;
console.log(`A media da nota do catálogo é ${mediaNotas.toFixed(2)}`);
const assistidos=catalogo.filter(element=>element.assistido==true);
const somaAssistidos=assistidos.reduce((acc,element)=>acc+element.nota,0);
const mediaAssistidos= somaAssistidos/assistidos.length;
console.log(`A média do catálogo assistido é: ${mediaAssistidos.toFixed(2)}`)
//f)
const itemAntigo=catalogo.some(element=>element.ano<2000);
const temGenero=catalogo.every(element=>element.generos.length>=1);
console.log(`Tem criado antes dos anos 2000? ${itemAntigo}`);
console.log(`Todos têm gênero? ${temGenero}`);

//B.4. Saída na tela
const output= document.getElementById("output");

const filmes = catalogo.filter(element=>element.tipo=="filme");
const series = catalogo.filter(element=>element.tipo=="serie");
const top3 = [...catalogo]
    .sort((a,b)=> b.nota-a.nota)
    .slice(0,3)

output.innerHTML = `
<p>Total de itens no catálogo: ${catalogo.length}</p>
<p>Quantidade de filmes: ${filmes.length}</p>
<p>Quantidade de series: ${series.length}</p>
<p>Media geral das notas: ${mediaNotas.toFixed(2)}</p>
<h4>Ranking das 3 melhores notas:</h4> 
<p>1° ${top3[0].titulo}: ${top3[0].nota}</p>
<p>2° ${top3[1].titulo}: ${top3[1].nota}</p>
<p>3° ${top3[2].titulo}: ${top3[2].nota}</p>`