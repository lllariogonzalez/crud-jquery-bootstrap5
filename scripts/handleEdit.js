import { deleteUser, getUserById, updateUser } from "./services.js"
import { checkEditSubmit, renderHtml, showForm } from "./utils.js"

export default async function handleEdit(id) {

    let dataEdit = {}

    let user = await getUserById(id)
    $('#usersList').html(renderHtml(user))

    let createButton = $("#create")
    createButton.toggle(300)
    $(".edit")[0].disabled = true

    let buttonDelete = $(".delete")[0]
    buttonDelete.onclick = () => deleteUser(buttonDelete.id)

    let submitForm = $("#submitForm")
    checkEditSubmit(dataEdit, submitForm)

    showForm("Edit")

    // selecciono todos los inputs
    let inputName = $("#nameInput")
    let inputAdress = $("#adressInput")
    let inputPhone = $("#phoneInput")
    let inputEmail = $("#emailInput")

    inputName.val(user.name)
    inputAdress.val(user.adress)
    inputPhone.val(user.phoneNumber)
    inputEmail.val(user.email)

    inputName.on("change", () => {

        inputName.val() !== user.name
            ? dataEdit.name = inputName.val()
            : delete dataEdit.name

        checkEditSubmit(dataEdit, submitForm)

    })

    inputAdress.on("change", () => {

        inputAdress.val() !== user.adress
            ? dataEdit.adress = inputAdress.val()
            : delete dataEdit.adress

        checkEditSubmit(dataEdit, submitForm)

    })

    inputPhone.on("change", () => {

        inputPhone.val() !== user.phoneNumber
            ? dataEdit.phoneNumber = inputPhone.val()
            : delete dataEdit.phoneNumber

        checkEditSubmit(dataEdit, submitForm)

    })

    inputEmail.on("change", () => {

        inputEmail.val() !== user.email
            ? dataEdit.email = inputEmail.val()
            : delete dataEdit.email

        checkEditSubmit(dataEdit, submitForm)

    })

    submitForm.on("click", function (event) {

        event.preventDefault()
        checkEditSubmit(dataEdit, submitForm)
        !submitForm[0].disabled && updateUser(dataEdit, id)

    })

}