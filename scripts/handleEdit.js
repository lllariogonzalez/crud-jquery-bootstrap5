import usersAPI from "./config.js"

export default function handleEdit(id){

    let dataFetch = {}
    let dataEdit = {}
    let usersIdAPI = usersAPI + id

    // agrega titulo correspondiente
    $("#title").html("Edit")

    // aparecer
    let form = $("#form")
    form.toggle(300)

    // deshabilito button submit
    let submitForm = $("#submitForm")
    submitForm[0].disabled = true

    submitForm.on("click", function(event){

        event.preventDefault()

        $.ajax({
            type: 'PUT',
            url: usersIdAPI,
            contentType: 'application/json',
            data: JSON.stringify(dataEdit)
        })
        .done(function(){
            alert('Update Success')
            location.reload()
        })
        .fail(function(error){
            console.log('Respuesta del sevidor:', error)
        })
    })

    // selecciono todos los inputs
    let inputName = $("#nameInput")
    let inputAdress = $("#adressInput")
    let inputPhone = $("#phoneInput")
    let inputEmail = $("#emailInput")

    // hago el fetch a la API para pedir datos actualizados
    $.get(usersIdAPI, function(data, status){
        dataFetch = data
        inputName.val(data.name)
        inputAdress.val(data.adress)
        inputPhone.val(data.phoneNumber)
        inputEmail.val(data.email)
    })

    // agrego onChanges a cada input y controlo sus valores para habilitar el button
    inputName.on("change", ()=>{

            if(inputName.val()!== dataFetch.name) {
                dataEdit.name = inputName.val()
            }else{
                delete dataEdit.name
            }

            Object.entries(dataEdit).length === 0  
                ? submitForm[0].disabled = true
                : submitForm[0].disabled = false
        })

    inputAdress.on("change", ()=>{

            if(inputAdress.val()!== dataFetch.adress) {
                dataEdit.adress = inputAdress.val()
            }else{
                delete dataEdit.adress
            }

            Object.entries(dataEdit).length === 0  
                ? submitForm[0].disabled = true
                : submitForm[0].disabled = false
        })

    inputPhone.on("change", ()=>{

            if(inputPhone.val()!== dataFetch.phoneNumber) {
                dataEdit.phoneNumber = inputPhone.val()
            }else{
                delete dataEdit.phoneNumber
            }

            Object.entries(dataEdit).length === 0  
                ? submitForm[0].disabled = true
                : submitForm[0].disabled = false
        })

    inputEmail.on("change", ()=>{

            if(inputEmail.val()!== dataFetch.email) {
                dataEdit.email = inputEmail.val()
            }else{
                delete dataEdit.email
            }

            Object.entries(dataEdit).length === 0  
                ? submitForm[0].disabled = true
                : submitForm[0].disabled = false
        })

}
