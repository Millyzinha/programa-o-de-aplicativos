//let produto1 = {nome:"teclado", preco:53.0}
//let produto2 = {nome:"quadro", preco:156.0}

//let preco = (produto1.preco + produto2.preco)
//console.log(preco)

let comidas = [
{nome:"arroz", preco:23.9},
{nome:"feijão", preco:33.0},
{nome:"farofa", preco:3.7},
{nome:"macarrão", preco:13.5},
{nome:"bolacha", preco:8.7},
{nome:"bolo", preco:45.0},
{nome:"lasanha", preco:14.89},
{nome:"pizza", preco:19.78},
{nome:"chocolate", preco:4.0},
{nome:"miojo", preco:2.99},

]

console.log(comidas.length)
console.log("total:",comidas.map(l=>l.preco).reduce((a,l)=>a +l))