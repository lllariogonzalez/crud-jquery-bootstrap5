import usersAPI from "./config.js"

export async function getUsers() {

    let users

    await $.get(usersAPI, function (data) {

        users = data.map(user =>
            `<article class="card p-2" style="max-width: 700px;">
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
            </article>`
        ).join('')

    })

    return users
}

export async function getUserById(id) {

    let user

    await $.get((usersAPI + id), function (data) {
        user = data
    })

    return user
}

export function updateUser(data, id) {

    $.ajax({
        type: 'PUT',
        url: (usersAPI + id),
        contentType: 'application/json',
        data: JSON.stringify(data)
    }).done(function () {
        alert('Update Success')
        location.reload()
    }).fail(function (error) {
        console.log('Respuesta del sevidor:', error)
    })

}

export function postUser(newUser) {

    $.ajax({
        type: 'POST',
        url: usersAPI,
        contentType: 'application/json',
        data: JSON.stringify(newUser)
    }).done(function () {
        alert('Create Success')
        location.reload()
    }).fail(function (error) {
        console.log('Respuesta del sevidor:', error)
    })

}

export function deleteUser(id) {

    $.ajax({
        type: 'DELETE',
        url: (usersAPI + id),
    }).done(function () {
        alert('Delete Success')
        location.reload()
    }).fail(function (error) {
        console.log('Respuesta del sevidor:', error)
    })

}