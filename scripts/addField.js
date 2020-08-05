//Procurar o botão 
document.querySelector("#add-time")
//Quando clicar no botão 
.addEventListener('click', cloneField)

//Executar uma ação 
function cloneField(){
    //Duplicar os campos. Que campos?
    const newFieldsContainer = document.querySelector('.schedule-item').cloneNode(true)
    //Pegar  os cantos: quais ?
    const fields = newFieldsContainer.querySelectorAll('input')
    // para cada campo, limpar:
    fields.forEach(function(momentField){
        //pegar o field do momento
        momentField.value = ""
    })
    //Colocar na página: onde?
    document.querySelector('#schedule-items').appendChild(newFieldsContainer)
}





