function calcularSalario() {
    let fixo = Number(document.getElementById("fixo").value)
    let vendas = Number(document.getElementById("vendas").value)

    let comissao = vendas*4/100

    let total = fixo + comissao
    document.getElementById("comissao").innerHTML = "Sua comissão é: " + comissao
    document.getElementById("total").innerHTML = "Seu salário total é: " + total
}

function calcularSubtracao() {
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)

    let total = n1 - n2

    document.getElementById("total").innerHTML = "A subtração deles é: " + total
}

function calcularMult() {
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)
    let n3 = Number(document.getElementById("n3").value)

    let total = n1 * n2 * n3

    document.getElementById("total").innerHTML = "A multiplicação dos três é: " + total
   
}

function calcularDiv() {
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)

    let total = n1/n2

    document.getElementById("total").innerHTML = "A divisão dos dois números é: " + total
}

function calcularMedia() {
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)
    
    let media = (n1*2+n2*3)/2

    document.getElementById("media").innerHTML = "A media das notas é: " + media
}

function calcularDesc() {
    let preco = Number(document.getElementById("preco").value)

    let desconto = preco - (preco*0.1)

    document.getElementById("total").innerHTML = "O preço com desconto é: " + desconto
}

function calcularPeso() {
    let peso = Number(document.getElementById("peso").value)

    let engordar = peso + ((peso*15)/100)
    let emagrecer = peso - ((peso*20)/100)

   // alert("O seu peso se você engordar 15% é: " + engordar)
  //  alert("O seu peso se você emagrecer 20% é: " + emagrecer)

    document.getElementById("engordar").innerHTML = "Engordando você pesaria: " + engordar + "kg"
    document.getElementById("emagrecer").innerHTML = "Emagrecendo você pesaria: " + emagrecer + "kg"
}

function calcularPesog() {
    let peso = Number(document.getElementById("peso").value)

    let total = peso*1000

    document.getElementById("total").innerHTML = "Seu peso em gramas é: " + total + "g"
}

function calcularArea() {
    let b1 = Number(document.getElementById("b1").value)
    let b2 = Number(document.getElementById("b2").value)
    let h = Number(document.getElementById("h").value)

    let area = ((b1 + b2) * h)/2

    document.getElementById("total").innerHTML = "A área do trapézio é: " + area
}

function calcularAreaq() {
    let lado = Number(document.getElementById("lado").value)

    let area = lado*lado

    document.getElementById("total").innerHTML = "A área do quadrado é: " + area
}

function calcularProd() {

    let cod = Number(document.getElementById("n1").value)
    let quant = Number(document.getElementById("n2").value)

    if (cod < 0){
        document.getElementById("unit").innerHTML = "Valor negativo"
     }else{
        if (cod <= 10) {
          preco = 10
        }else {
          if (cod <= 20){
              preco = 15
           }else{
              if (cod <= 30){
                preco = 20
              }else{
                 preco = 30
            }
        }
    }
}

    document.getElementById("unit").innerHTML = "O preço unitário do produto é: " + preco

    total = preco*quant

    document.getElementById("total").innerHTML = "O preço total do produto é: " + total
    if (total <= 250){
        desconto = total - total*0.05
        valor = total*0.05

        document.getElementById("desc").innerHTML = "O valor do desconto é: " + valor

        document.getElementById("final").innerHTML = "O preço do produto com desconto é: " + desconto
    }else {
        if (total <= 500){
            desconto = total - total*0.1

            valor = total*0.1
            document.getElementById("desc").innerHTML = "O valor do desconto é: " + valor

            document.getElementById("final").innerHTML = "O preço do produto com desconto é: " + desconto
        }else {
            desconto = total - total*0.15

            valor = total*0.15

            document.getElementById("desc").innerHTML = "O valor do desconto é: " + valor

            document.getElementById("final").innerHTML = "O preço do produto com desconto é: " + desconto
        }
    }
}

function mediaidade() {
    let conta = 0
    let total = 0
    let idades = 0

    while (conta < idades){
        let idade = Number(prompt('Informe uma idade'))
        total += idade
        conta += 1
    }

    media = total/idades

    console.log('A media das idades é ' + media)
}