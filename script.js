$(document).ready(() =>{

    $('.dropdown').on('show.bs.dropdown',() => {
        console.log('show')
    })
    $('.dropdown').on('hide.bs.dropdown',() => {
        console.log('hide')
    })
})
