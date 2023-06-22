function somavet() {
    let precos = []
    let soma = 0

    for (let i = 0; i < 10; i++) {
        precos[i] = Number(prompt(`Preço ${i+1}`))
    }

    for (let i = 0; i < 10; i++) {
        soma = soma + precos[i]
    }
    alert(`A soma é: ${soma}`)
    alert(`Média ${soma/10}`)
}

function ex1() {
    let vetor = []

    for (let i = 0; i < 6; i++) {
        vetor[i] = Number(prompt(`Informe o ${i+1}° elemento`))
    }

    let pares = [];
    let iPares = 0;
    let impares = [];
    let iImpares = 0

    for (let i = 0; i < 6; i++) {
        if (vetor[i] % 2 == 0) {
            pares[iPares] = vetor[i]
            iPares++
        } else {
            impares[iImpares] = vetor[i]
            iImpares++
        }
    }
    console.log(`Pares ${pares} Qtde: ${pares.length}`)
    console.log(`Impares ${impares} Qtde: ${impares.length}`)
}

function ex2() {
    let vetor = []

    for (let i = 0; i < 7; i++) {
        vetor[i] = Number(prompt(`Informe o ${i+1}° elemento`))
    }

    let mult2 = [];
    let mult3 = [];
    let multi = [];

    for (let i = 0; i < 7; i++) {
        if (vetor[i] % 2 == 0 && vetor[i] % 3 == 0) {
            multi.push(vetor[i])
            mult2.push(vetor[i])
            mult3.push(vetor[i])
        } else {
            if (vetor[i] % 2 == 0) {
                mult2.push(vetor[i])
            } else {
                if (vetor[i] % 3 == 0) {
                    mult3.push(vetor[i])
                }
            }
        }
    }
    console.log(`Os números múltiplos de 2 são: ${mult2}`)
    console.log(`Os números múltiplos de 3 são: ${mult3}`)
    console.log(`Os números múltiplos de 2 e 3 são: ${multi}`)
}

function Ex3() {
    let codigos = []; let estoque = []

    for (let i = 0; i < 5; i++) {
        codigos[i] = Number(prompt(`Informe o código do produto ${i + 1}: `))
        estoque[i] = Number(prompt(`Informe a quantidade de estoque do produto ${i + 1}`))
    }

    let codUser = Number(prompt(`Informe o código do produto para compra`))
    let qtde = Number(prompt(`Informe a quantidade de produtos para compra`))
    while (codUser != 0) {

        if (codigos.includes(codUser)) {
            if (qtde <= estoque[codUser - 1]) {
                estoque[codUser - 1] = estoque[codUser - 1] - qtde
                console.log("Pedido atendido. Obrigado e volte sempre!")
                qtde = Number(prompt(`Informe a próxima quantidade de produtos para compra`))
            }
            else {
                console.log("Não temos estoque suficiente dessa mercadoria.")
            }
        }
        else {
            alert("Codigo inexistente")
        }
        codUser = Number(prompt(`Informe o próximo código do produto para compra`))
    }
    for (let i = 0; i < 5; i++) {
        console.log(`Códigos: ${codigos[i]} Estoque: ${estoque[i]}`)
    }
}

function ex4(){
    let vet = []
    let posicao = []
    for(i = 0; i < 5; i++){
        vet[i] = Number(prompt(`Digite o ${i+1}° número:`))
    }

    /*Da para fazer utilizando Index.Of (POIS ELE PEGA O INDICE ONDE O NUMERO DIGITADO ESTÁ)*/ 
    for(i = 0; i < 5; i++){
        if(vet[i] == 30){
            posicao.push(i)
        }
    }

    console.log(`O número 30 foi encontrado nas posições: ${posicao}`)
}

function Ex5(){
    let turmaLogica = [], turmaLinguagem = [], turmaAmbas = []

    for(let i = 0; i < 15; i++){
        turmaLogica[i] = Number(prompt("Digite o número de matricula dos alunos de Lógica: "))
    }
    for(let i = 0; i < 10; i++){
        turmaLinguagem[i] = Number(prompt("Digite o número de matricula dos alunos de Linguagem de programação: "))
    }

    for(let i = 0; i < 15; i++){
        for(let j = 0; j < 10; j++){
            if(turmaLogica[i] === turmaLinguagem[j]){
                turmaAmbas.push(turmaLinguagem[j])
            }
        }
    }
    console.log(`Os alunos matriculados em ambas possuem os respectivos códigos: ${turmaAmbas}`)
}

function ex6(){
    let nomes = [], vendas = [], percentual = []
    let soma = 0

    for(let i = 0; i < 3; i++){
        nomes[i] = prompt(`Digite o nome do ${i + 1}° vendedor`)
        vendas[i]  = Number(prompt(`Digite o total de vendas do ${i + 1}° vendedor`))
        percentual[i] = Number(prompt(`Digite o percentual de comissão do ${i + 1}° vendedor (somente o número)`))
    }

    for(let i = 0; i < 3; i++){
        let total
        total = vendas[i] * percentual[i]/100

        console.log(`O vendedor ${nomes[i]} receberá R$${total} de comissão`)
    }

    for(let i = 0; i < 3; i++){
        soma = soma + vendas[i]
    }
    console.log(`O total de vendas de todos os vendedores é ${soma}`)
    
    let maior = vendas[0]
    let nomemaior = nomes[0]
    for(let i = 0; i < 3; i++){
        if(vendas[i] > maior){
            maior = vendas[i]
            nomemaior = nomes[i]
        }
    }
    console.log(`O vendedor com o maior número de vendas foi o ${nomemaior} com R$${maior}`)

    let menor = vendas[0]
    let nomemenor = nomes[0]

    for(i = 0; i < 3; i++){
        if(vendas[i] <  menor){
            menor = vendas[i]
            nomemenor = nomes[i]
        }
    }
    console.log(`O vendedor com o menor número de vendas foi o ${nomemenor} com R$${menor}`)
}

function ex7(){
    let numero = []
    let soma = 0, negativos = 0

    for(i = 0; i < 10; i++){
        numero[i] = Number(prompt(`Digite o ${i+1}° número`))
    }

    for(i = 0; i < 10; i++){
        if(numero[i] < 0){
            negativos+=1
        }else{
            soma = soma + numero[i]
        }
    }
    console.log(`Você digitou ${negativos} números negativos`)
    console.log(`A soma dos números positivos é ${soma}`)
}

function ex8(){
    let nomes = [], media = []

    for(let i = 0; i < 7; i++){
        nomes[i] = prompt(`Digite o nome do ${i+1}° aluno`)
        media[i] = Number(prompt(`Digite a média do ${i+1}° aluno`))
    }

    let maior = media[0]
    let nomemaior = nomes[0]

    for(let i = 0; i < 7; i++){
        if(media[i] > maior){
            maior = media[i]
            nomemaior = nomes[i]
        }
    }
    console.log(`O aluno com a maior média foi o ${nomemaior}`)
}

function ex9(){
    let nomes = [], codigos = [], precos = []

    for(let i = 0; i < 5; i++){
        nomes[i] = prompt(`Escreva o nome do ${i+1}° produto`)
        codigos[i] = Number(prompt(`Escreva o código do ${i+1}° produto`))
        precos[i] = Number(prompt(`Escreva o preço do ${i+1}° produto`))
    }

    for(let i = 0; i < 5; i++){
        if(codigos[i]%2 == 0 && precos[i] > 1000){
            precos[i] += precos[i]*20/100 
        }else{
            if(codigos[i]%2 == 0){
                precos[i] += precos[i]*15/100
            }
            if(precos[i] > 1000){
                precos[i] += precos[i]*10/100
            }
        }
    }

    for(let i = 0; i < 5; i++){
        console.log(`O preço de ${nomes[i]} código: ${codigos[i]} foi atualizado para = ${precos[i]}`)
        console.log("/-----------------------------------------------------------------------------/")
    }
}

function codigorepetido(){
    let codigos = [], nomes = []
    for(let i = 0; i < 5; i++){
        let codigo = Number(prompt(`Digite o ${i+1}° código`))
        while(codigos.includes(codigo)){
            codigo = Number(prompt(`Código já existente, informe um novo`))
        }
        codigos[i] = codigo
        nomes[i] = prompt(`Digite o ${i+1}° nome`)
    }
    console.log(codigos)
    console.log(nomes)

}