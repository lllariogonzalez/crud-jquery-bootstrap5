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