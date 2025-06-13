const button = document.querySelector("button")
const select = document.querySelector(".select")
const gender = document.querySelector(".tipo")
const result = document.querySelector(".resultado")
const adult = document.querySelector(".adulto")
const kids = document.querySelector(".criança")
const newInput = document.querySelector(".input-idade")
const tableAge = document.querySelector(".table")

function clickButton() {
    const pesoDigitado = document.querySelector(".peso").value
    const alturaDigitado = document.querySelector(".altura").value

    const imc = pesoDigitado / (alturaDigitado * alturaDigitado)
    let classificação = ""

    if (adult.checked) {
    if (imc <= 18.5) {
            classificação = "Abaixo do normal"
    } else if (imc >= 18.6 && imc <= 24.9) {
        classificação = "Normal"
    } else if (imc >= 25 && imc <= 29.9) {
        classificação = "Sobrepeso"
    } else if (imc >= 30 && imc <= 34.9) {
        classificação = "Obesidade grau I"
    } else if (imc >= 35 && imc <= 39.9) {
        classificação = "Obesidade grau II"
    } else if (imc > 40) {
        classificação = "Obesidade grau III"
    }}

    else if (kids.checked) {
     if (imc < 14) {
        classificação = "Magreza"
    } else if (imc >= 14 && imc < 18) {
        classificação = "Peso adequado"
    } else if (imc >= 18 && imc < 21) {
        classificação = "Sobrepeso"
    } else {
        classificação = "Obesidade"
    }}

    result.innerHTML = `Seu IMC é ${imc.toFixed(2)} – ${classificação}`

    result.scrollIntoView({ behavior: "smooth" })
}

adult.addEventListener("change",() => {
    newInput.innerHTML = `<p><b>Acima de 19 anos</b></p>`
    tableAge.innerHTML = `<table>
    <tr>
        <th>IMC</th>
        <th>Classificação</th>
        <th>Definição</th>
    </tr>

    <tr>
        <td>≤ 18.5</td>
        <td>Abaixo do normal</td>
        <td>Seu peso está abaixo do recomendado para sua altura. Isso pode indicar desnutrição ou outros problemas de saúde. É importante buscar orientação médica e nutricional.</td>
    </tr>

    <tr>
        <td>18.6 a 24.9</td>
        <td>Normal</td>
        <td>Você está dentro da faixa de peso considerada ideal para sua altura. Continue mantendo hábitos saudáveis, como boa alimentação e prática regular de exercícios.</td>
    </tr>

    <tr>
        <td>25 e 29.9</td>
        <td>Sobrepeso</td>
        <td>Você está acima do peso ideal. Embora ainda não seja obesidade, esse quadro já pode aumentar o risco de doenças cardíacas, diabetes e outras condições. Avalie com um profissional de saúde.</td>
    </tr>

    <tr>
        <td>30 e 34.9</td>
        <td>Obesidade grau I</td>
        <td>Este é o primeiro nível de obesidade. Pode trazer riscos significativos à saúde se não for tratado com acompanhamento médico, nutricional e mudanças no estilo de vida.</td>
    </tr>

    <tr>
        <td>35 e 39.9</td>
        <td>Obesidade grau II</td>
        <td>Esse nível de obesidade é considerado severo. Pode aumentar bastante o risco de problemas cardiovasculares, diabetes tipo 2 e outras complicações. Busque apoio médico com urgência.</td>
    </tr>

    <tr>
        <td>> 40</td>
        <td>Obesidade grau III</td>
        <td>Também chamada de obesidade mórbida, representa um risco muito alto à saúde. O acompanhamento com médicos, nutricionistas e psicólogos é essencial para reverter esse quadro.</td>
    </tr>

</table>`
})
kids.addEventListener("change", () => {
    newInput.innerHTML = `<label><b>Informe a idade da criança:</b></label>
    <input type="number" class="idade-crianca" min="1" max="19" placeholder="Ex: 7 anos">`
    tableAge.innerHTML = `<table>
    <tr>
        <th>IMC</th>
        <th>Classificação</th>
        <th>Definição</th>
    </tr>

    <tr>
        <td>< 14</td>
        <td>Magreza</td>
        <td>O IMC da criança está abaixo do esperado para sua idade. Isso pode indicar subnutrição ou outro problema de desenvolvimento. Procure um pediatra para avaliação.</td>
    </tr>

    <tr>
        <td>14 a 17.9</td>
        <td>Peso adequado</td>
        <td>O peso está dentro do esperado para a idade. Continue promovendo uma alimentação equilibrada e incentivando atividades físicas.</td>
    </tr>

    <tr>
        <td>18 a 20.9</td>
        <td>Sobrepeso</td>
        <td>A criança está acima do peso ideal para sua idade. Isso pode se tornar um problema de saúde se não for acompanhado. Consulte um pediatra ou nutricionista.</td>
    </tr>

    <tr>
        <td>≥ 21</td>
        <td>Obesidade</td>
        <td>O IMC está acima do nível saudável. É importante buscar orientação especializada para evitar riscos futuros e promover um estilo de vida saudável.</td>
    </tr>

</table>`

})
button.addEventListener("click", clickButton)