let cadastrar = []

let produtinho = {
    nome:'chocolate',
    quant: '15',
    valor: '20',
    total: '0'

}

console.log("produtinho vendido:", produtinho)
for(i = 0; i < produtinho.length; i++){
  produtinho[i].total = produtinho[i].quant * produtinho[i].valor
}
