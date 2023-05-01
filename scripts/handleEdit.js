import { getUserById, updateUser } from "./services.js"
import { checkEditSubmit, showForm } from "./utils.js"

export default async function handleEdit(id) {

    let dataEdit = {}
    // hago el fetch a la API para pedir datos actualizados
    let dataFetch = await getUserById(id)
    let submitForm = $("#submitForm")

    showForm("Edit")

    // selecciono todos los inputs
    let inputName = $("#nameInput")
    let inputAdress = $("#adressInput")
    let inputPhone = $("#phoneInput")
    let inputEmail = $("#emailInput")

    inputName.val(dataFetch.name)
    inputAdress.val(dataFetch.adress)
    inputPhone.val(dataFetch.phoneNumber)
    inputEmail.val(dataFetch.email)

    // agrego onChanges a cada input y controlo sus valores para habilitar el button
    inputName.on("change", () => {

        inputName.val() !== dataFetch.name
            ? dataEdit.name = inputName.val()
            : delete dataEdit.name

        checkEditSubmit(dataEdit, submitForm)

    })

    inputAdress.on("change", () => {

        inputAdress.val() !== dataFetch.adress
            ? dataEdit.adress = inputAdress.val()
            : delete dataEdit.adress

        checkEditSubmit(dataEdit, submitForm)

    })

    inputPhone.on("change", () => {

        inputPhone.val() !== dataFetch.phoneNumber
            ? dataEdit.phoneNumber = inputPhone.val()
            : delete dataEdit.phoneNumber

        checkEditSubmit(dataEdit, submitForm)

    })

    inputEmail.on("change", () => {

        inputEmail.val() !== dataFetch.email
            ? dataEdit.email = inputEmail.val()
            : delete dataEdit.email

        checkEditSubmit(dataEdit, submitForm)

    })

    submitForm.on("click", function (event) {

        event.preventDefault()
        updateUser(dataEdit, id)

    })

}
