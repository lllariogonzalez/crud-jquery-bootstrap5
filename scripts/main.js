import handleEdit from "./handleEdit.js"
import handleCreate from "./handleCreate.js"
import { deleteUser, getUsers } from "./services.js"
import { showForm } from "./utils.js"


$(document).ready(async function () {

    let users = await getUsers()

    $('#usersList').html(users)

    let editButton = $(".edit")
    let deleteButton = $(".delete")
    let createButton = $("#create")
    let closeButton = $("#close")

    for (let button of editButton) {
        button.onclick = function () {
            handleEdit(button.id)
        }
    }

    for (let button of deleteButton) {
        button.onclick = function () {
            deleteUser(button.id)
        }
    }

    createButton.click(function () {
        handleCreate()
    })

    closeButton.click(function () {
        $("#nameInput").val("")
        $("#adressInput").val("")
        $("#phoneInput").val("")
        $("#emailInput").val("")
        $("#submitForm").off("click")
        showForm()
    })

})
