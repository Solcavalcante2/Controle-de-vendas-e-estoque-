let produtos = []

function adicionarProduto(){

let nome = document.getElementById("nome").value
let quantidade = document.getElementById("quantidade").value
let preco = document.getElementById("preco").value

let produto = {
nome,
quantidade,
preco
}

produtos.push(produto)

mostrarProdutos()

}

function mostrarProdutos(){

let tabela = document.getElementById("listaProdutos")

tabela.innerHTML = ""

produtos.forEach((produto, index)=>{

tabela.innerHTML += `
<tr>
<td>${produto.nome}</td>
<td>${produto.quantidade}</td>
<td>R$ ${produto.preco}</td>
<td>
<button onclick="vender(${index})">Vender</button>
</td>
</tr>
`

})

}

function vender(index){

if(produtos[index].quantidade > 0){

produtos[index].quantidade--

mostrarProdutos()

}else{

alert("Produto sem estoque")

}

}
