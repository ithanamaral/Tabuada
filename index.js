//Selecionando os elementos
const multiplicationForm = document.querySelector("#multiplication_form");
const numberInput = document.querySelector("#number");
const multiplicationInput = document.querySelector("#multiplicator");
const multiplicationTitle = document.querySelector("#multiplication_title span")
const multiplicationTable = document.querySelector("#multiplication_operations")
//funções
const createTable = (number, multiplicatorNumber) =>{
 multiplicationTable.innerHTML = "" //Para toda vez que o input "calcular" for selecionado, zere as informações da caixa de texto

   for(i=1; i <=multiplicatorNumber; i++){
    const result = number *i;

    console.log(result)
     
    const template = `<div class="row"> 
    <div class="operations"> ${number} x ${i} = </div>
    <div class="result">${result}</div>
    </div>` 

     const parser = new DOMParser()

     const htmlTemplate = parser.parseFromString(template, "text/html") //Para trasnformar uma string em HTML

     const row = htmlTemplate.querySelector(".row")

     multiplicationTable.appendChild(row)

     
   }
   multiplicationTitle.innerText = number
}

//eventos
multiplicationForm.addEventListener("submit", (e) =>{
    e.preventDefault(); //Para fazer com que o input não envie

    const multiplicationNumber = +numberInput.value; //+ para se tornar inteiro
    const multiplicatorNumber = +multiplicationInput.value;
       
    if(!multiplicationNumber || !multiplicatorNumber) return
    createTable(multiplicationNumber, multiplicatorNumber) //Para exibir o resultado
})