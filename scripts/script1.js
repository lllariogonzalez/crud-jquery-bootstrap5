import handleEdit from "./handleEdit.js"
import handleDelete from "./handleDelete.js"
import handleCreate from "./handleCreate.js"
import usersAPI from "./config.js"

$(document).ready(function(){

    $.get(usersAPI, function(data, status){
        let users = data.map(el=> 
            `<article class="card p-2" style="max-width: 700px;">
                <div class="row col-lg-12 g-0 p-2">
                    <div class="d-flex col-lg-3 col-6 gap-3 justify-content-center align-items-center">
                        <img src=${el.avatar} class="img-fluid col-6 rounded-circle w-100" alt="avatar">
                    </div>
                    <div class="col-lg-6 col-12">
                        <div class="card-body">
                            <h5 class="card-title">${el.name}</h5>
                            <p class="card-text">dirección: ${el.adress}</p>
                            <p class="card-text">${el.phoneNumber}</p>
                            <p class="card-text">${el.email}</p>
                        </div>
                    </div>
                    <div class="d-flex flex-column justify-content-center gap-2 col-lg-3 col-12">
                        <button id=${el.id} class="edit btn btn-primary">Editar</button>
                        <button id=${el.id} class="delete btn btn-danger">Eliminar</button>
                    </div>
                </div>
            </article>`
        ).join('')

        $('#usersList').html(users)
        console.log(data, status)
        
        let editButton = $(".edit")
        let deleteButton = $(".delete")
        let createButton = $("#create")
        let closeButton = $("#close")

        for(let button of editButton){
            button.onclick = function() {
                handleEdit(button.id)
            }
        }

        for(let button of deleteButton){
            button.onclick = function() {
                handleDelete(button.id)
            }
        }

        createButton.click(function() {
            handleCreate()
        })

        closeButton.click(function(){
            $("#nameInput").val("")
            $("#adressInput").val("")
            $("#phoneInput").val("")
            $("#emailInput").val("")
            let form = $("#form")
            form.toggle(300)
        })
    })

})
