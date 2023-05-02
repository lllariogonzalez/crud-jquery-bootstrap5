import handleCreate from "./handleCreate.js"
import { renderAllUsers, showForm } from "./utils.js"

$(document).ready(function () {

    renderAllUsers()

    let createButton = $("#create")

    createButton.click(function () {
        handleCreate()
    })

    let closeButton = $("#close")

    closeButton.click(async function () {
        $("#nameInput").val("")
        $("#adressInput").val("")
        $("#phoneInput").val("")
        $("#emailInput").val("")
        $("#submitForm").off("click")
        $("#create").toggle(300)
        $("#sectionList").removeClass("d-none")
        showForm()
        renderAllUsers()
    })

})
