import { deleteUser, getUsers } from "./services.js"
import handleEdit from "./handleEdit.js"

export function checkCreateSubmit(newUser, submitForm) {

    Object.entries(newUser).length !== 4
        ? submitForm[0].disabled = true
        : submitForm[0].disabled = false

}

export function checkEditSubmit(data, submitForm) {

    Object.entries(data).length === 0
        ? submitForm[0].disabled = true
        : submitForm[0].disabled = false

}

export function showForm(title) {

    let form = $("#form")

    title && $("#title").html(title)
    form.toggle(300)
}

export function renderHtml(user) {

    return (`<article class="card p-2" style="max-width: 700px;">
                <div class="row col-lg-12 g-0 p-2">
                    <div class="d-flex col-lg-3 col-12 gap-3 justify-content-center align-items-center">
                        <img src=${user.avatar} class="img-fluid col-6 rounded-circle w-100" alt="avatar">
                    </div>
                    <div class="col-lg-6 col-12">
                        <div class="card-body d-flex flex-column align-items-center">
                            <div>
                                <h5 class="card-title">${user.name}</h5>
                                <p class="card-text">🌎 ${user.adress}</p>
                                <p class="card-text">📞 ${user.phoneNumber}</p>
                                <p class="card-text">📨 ${user.email}</p>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex flex-column justify-content-center gap-2 col-lg-3 col-12">
                        <button id=${user.id} class="edit btn btn-primary">Editar</button>
                        <button id=${user.id} class="delete btn btn-danger">Eliminar</button>
                    </div>
                </div>
            </article>`)
}

export async function renderAllUsers() {

    let users = await getUsers()

    $('#usersList').html(users)

    let editButton = $(".edit")
    let deleteButton = $(".delete")

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
}