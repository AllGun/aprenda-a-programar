let produtoA = {"nome": "camiseta", "valor": 100.00, "internacional": true};
let produtoB = {"nome": "perfume", "valor": 200.00, "internacional": true};
let produtoC = {"nome": "sandália", "valor": 120.00, "internacional": false};


if(produtoA.internacional) {
    let imposto = produtoA.valor * 0.2;
    console.log(`Imposto: R$${imposto}`);
} else {
    let imposto = produtoA.valor * 0.15;
    console.log(`Imposto: R$${imposto}`);
}

if(produtoB.internacional) {
    let imposto = produtoA.valor * 0.2;
    console.log(`Imposto: R$${imposto}`);

} else {
    let imposto = produtoA.valor * 0.15;
    console.log(`Imposto: R$${imposto}`);
}

if(produtoC.internacional) {
    let imposto = produtoA.valor * 0.2;
    console.log(`Imposto: R$${imposto}`);
} else {
    let imposto = produtoA.valor * 0.15;
    console.log(`Imposto: R$${imposto}`);
}