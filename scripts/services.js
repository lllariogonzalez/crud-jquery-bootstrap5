import usersAPI from "./config.js"

export async function getUsers() {

    let users

    await $.get(usersAPI, function (data) {

        users = data.map(user =>
            `<article class="card p-2" style="max-width: 700px;">
                <div class="row col-lg-12 g-0 p-2">
                    <div class="d-flex col-lg-3 col-6 gap-3 justify-content-center align-items-center">
                        <img src=${user.avatar} class="img-fluid col-6 rounded-circle w-100" alt="avatar">
                    </div>
                    <div class="col-lg-6 col-12">
                        <div class="card-body">
                            <h5 class="card-title">${user.name}</h5>
                            <p class="card-text">dirección: ${user.adress}</p>
                            <p class="card-text">${user.phoneNumber}</p>
                            <p class="card-text">${user.email}</p>
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
