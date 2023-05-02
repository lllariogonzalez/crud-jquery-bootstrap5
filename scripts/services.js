import usersAPI from "./config.js"
import { renderHtml } from "./utils.js"

export async function getUsers() {

    let users
    await $.get(usersAPI, (data) => {
        users = data.map((user) => renderHtml(user)).join('')
    })
    return users
}

export async function getUserById(id) {

    let user
    await $.get((usersAPI + id), (data) => {
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
        $("#close").trigger("click")
        alert('Update Success')
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
        $("#close").trigger("click")
        alert('Create Success')
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