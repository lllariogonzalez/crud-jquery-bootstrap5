import usersAPI from "./config.js"

export default function handleDelete(id) {

    let usersIdAPI = usersAPI + id

    $.ajax({
        type: 'DELETE',
        url: usersIdAPI,
    })
    .done(function(){
        alert('Delete Success')
        location.reload()
    })
    .fail(function(error){
        console.log('Respuesta del sevidor:', error)
    })
}
