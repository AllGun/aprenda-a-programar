// Um cliente que vende produtos internacionais e nacionais conseguiu extrair alguns dados de seu programa financeiro. O problema é que esse programa retorna os dados na forma de mapas e traz apenas o valor do produto e se ele é internacional ou nacional, mas não calcula os impostos.

// Dada essa situação, ele contratou você para criar um programa que, ao receber o mapa de um produto, verifica se ele é nacional ou internacional e aplica 20% de impostos caso seja de outro país e 12% caso seja brasileiro. Uma vez aplicado o imposto, o programa imprime na tela o valor total do produto.

let produtoA = {"nome": "Camisa", "valor": 100.00, "internacional": true};
let produtoB = {"nome": "Perfume", "valor": 200.00, "internacional": true};
let produtoC = {"nome": "Sandália", "valor": 120.00, "internacional": false};

//A ideia e fazer um for para iterar 3x e, em cada uma delas, escolher um produto diferente para cáculo do imposto
for (let count = 0; count <= 2; count ++) {

    let escolherProduto; //Será atribuido a essa var o produto a ser calculado

    //Aqui eu coloquei um if que vai escolher o produto a ser calculado
    if(count == 0){
        escolherProduto = produtoA;
    } else if (count == 1) {
        escolherProduto = produtoB;
    } else {
        escolherProduto = produtoC;
    }
        //Com o produto atribuido a var escolherProduto eu entro no calculo do imposto
        //O imposto será de 20% se internacional e de 12% se não for
        if (escolherProduto.internacional){ 
            let valorComImposto = escolherProduto.valor * 1.2;
        
            console.log(`Produto: ${escolherProduto.nome}`);
            console.log(`Valor: R$${escolherProduto.valor}`);
            console.log(`Imposto: 20%`);
            console.log(`Valor com imposto: R$${valorComImposto}`);
            console.log();

        } else {
            let valorComImposto = escolherProduto.valor * 1.2;

            console.log(`Produto: ${escolherProduto.nome}`);
            console.log(`Valor: R$${escolherProduto.valor}`);
            console.log(`Imposto: 12%`);
            console.log(`Valor com imposto: R$${valorComImposto}`);
            console.log();
        }
}



function printName () {
    console.log("Alfredo Gutemberg");
}


function somar (number1, number2) {
    console.log(`O primeiro número é ${number1}`);
    console.log(`O segundo número é ${number2}`);
    let soma = number1 + number2;
    console.log(`${number1} + ${number2} = soma`);
}

somar(10, 10);

let i;

for (i = 0; i < 9; i++) {
    console.log(i);
}

console.log(i);