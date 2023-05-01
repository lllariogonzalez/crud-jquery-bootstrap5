import handleEdit from "./handleEdit.js"
import handleDelete from "./handleDelete.js"
import handleCreate from "./handleCreate.js"
import { getUsers } from "./services.js"


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
            handleDelete(button.id)
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
        let form = $("#form")
        form.toggle(300)
    })

})
