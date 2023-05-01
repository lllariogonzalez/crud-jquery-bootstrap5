import { postUser } from "./services.js"
import { checkCreateSubmit, showForm } from "./utils.js"

export default function handleCreate() {

    $("#nameInput").val("")
    $("#adressInput").val("")
    $("#phoneInput").val("")
    $("#emailInput").val("")
    let submitForm = $("#submitForm")
    let newUser = {}

    showForm("Create")

    // selecciono todos los inputs
    let inputName = $("#nameInput")
    let inputAdress = $("#adressInput")
    let inputPhone = $("#phoneInput")
    let inputEmail = $("#emailInput")

    inputName.on("change", function () {

        inputName.val() === ""
            ? delete newUser.name
            : newUser.name = inputName.val()

        checkCreateSubmit(newUser, submitForm)
    })

    inputAdress.on("change", function () {

        inputAdress.val() === ""
            ? delete newUser.adress
            : newUser.adress = inputAdress.val()

        checkCreateSubmit(newUser, submitForm)
    })

    inputPhone.on("change", function () {

        inputPhone.val() === ""
            ? delete newUser.phoneNumber
            : newUser.phoneNumber = inputPhone.val()

        checkCreateSubmit(newUser, submitForm)
    })

    inputEmail.on("change", function () {

        inputEmail.val() === ""
            ? delete newUser.email
            : newUser.email = inputEmail.val()

        checkCreateSubmit(newUser, submitForm)
    })

    submitForm.on("click", function (event) {

        event.preventDefault()
        postUser(newUser)

    })
}
