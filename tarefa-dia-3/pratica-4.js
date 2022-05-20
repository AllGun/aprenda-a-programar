let produtoA = {"nome": "camiseta", "valor": 100.00, "internacional": true};
let produtoB = {"nome": "perfume", "valor": 200.00, "internacional": true};
let produtoC = {"nome": "sandália", "valor": 120.00, "internacional": false};


if(produtoA.internacional) {
    console.log(`Produto: ${produtoA.nome}`);
    let imposto = produtoA.valor * 0.2;
    console.log(`Imposto: R$${imposto}`);
    let precoTotal = produtoA.valor + imposto;
    console.log(`Preço total: R$${precoTotal}`);
    console.log();
} else {
    console.log(`Produto: ${produtoA.nome}`);
    let imposto = produtoA.valor * 0.15;
    console.log(`Imposto: R$${imposto}`);
    let precoTotal = produtoA.valor + imposto;
    console.log(`Preço total: R$${precoTotal}`);
    console.log();
}


if(produtoB.internacional) {
    console.log(`Produto: ${produtoB.nome}`);
    let imposto = produtoB.valor * 0.2;
    console.log(`Imposto: R$${imposto}`);
    let precoTotal = produtoB.valor + imposto;
    console.log(`Preço total: R$${precoTotal}`);
    console.log();
} else {
    console.log(`Produto: ${produtoB.nome}`);
    let imposto = produtoB.valor * 0.15;
    console.log(`Imposto: R$${imposto}`);
    let precoTotal = produtoC.valor + imposto;
    console.log(`Preço total: R$${precoTotal}`);
    console.log();
}


if(produtoC.internacional) {
    console.log(`Produto: ${produtoC.nome}`);
    let imposto = produtoC.valor * 0.2;
    console.log(`Imposto: R$${imposto}`);
    let precoTotal = produtoC.valor + imposto;
    console.log(`Preço total: R$${precoTotal}`);
} else {
    console.log(`Produto: ${produtoC.nome}`);
    let imposto = produtoC.valor * 0.15;
    console.log(`Imposto: R$${imposto}`);
    let precoTotal = produtoC.valor + imposto;
    console.log(`Preço total: R$${precoTotal}`);
}