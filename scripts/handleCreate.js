import usersAPI from "./config.js"

export default function handleCreate () {

    $("#nameInput").val("")
    $("#adressInput").val("")
    $("#phoneInput").val("")
    $("#emailInput").val("")

    let dataFetch = {}

    // agrega titulo correspondiente
    $("#title").html("Create")

    // aparecer
    let form = $("#form")
    form.toggle(300)

    // deshabilito button submit
    let submitForm = $("#submitForm")
    submitForm[0].disabled = true

    submitForm.on("click", function(event){

        event.preventDefault()

        $.ajax({
            type: 'POST',
            url: usersAPI,
            contentType: 'application/json',
            data: JSON.stringify(dataFetch)
        })
        .done(function(){
            alert('Create Success')
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

    inputName.on("change", function(){
        if(inputName.val()===""){
            delete dataFetch.name
        } else {
            dataFetch.name = inputName.val()
        }

        Object.entries(dataFetch).length !== 4
                ? submitForm[0].disabled = true
                : submitForm[0].disabled = false
    })

    inputAdress.on("change", function(){
        if(inputAdress.val()===""){
            delete dataFetch.adress
        } else {
            dataFetch.adress = inputAdress.val()
        }

        Object.entries(dataFetch).length !== 4
                ? submitForm[0].disabled = true
                : submitForm[0].disabled = false
    })

    inputPhone.on("change", function(){
        if(inputPhone.val()===""){
            delete dataFetch.phoneNumber
        } else {
            dataFetch.phoneNumber = inputPhone.val()
        }

        Object.entries(dataFetch).length !== 4
                ? submitForm[0].disabled = true
                : submitForm[0].disabled = false
    })

    inputEmail.on("change", function(){
        if(inputEmail.val()===""){
            delete dataFetch.email
        } else {
            dataFetch.email = inputEmail.val()
        }

        Object.entries(dataFetch).length !== 4
                ? submitForm[0].disabled = true
                : submitForm[0].disabled = false
    })
}
