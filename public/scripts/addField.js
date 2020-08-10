//procurar o botão
document.querySelector("#add-time")
//quando clicar no botão
.addEventListener('click', cloneField)
//executar uma ação
function cloneField() {
    //duplicar os campos que campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
    //pegar os campos,que campos?
    const fields = newFieldContainer.querySelectorAll('input')
    //pega o field do momento e limpa
  fields.forEach(function(field) {
    field.value = ""
  })
//colocar na página. onde?
  document.querySelector('#schedule-items').appendChild(newFieldContainer)
}