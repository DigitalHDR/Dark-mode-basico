//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*     | Dark mode com arrow function |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
let darkMode = document.querySelector('#darkMode')

darkMode.onclick = () => {
    if(darkMode.classList.toggle('true')) {
        document.body.classList.add('active')
    } else {
        document.body.classList.remove('active')
    }
}




//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*     | Dark mode com function |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// let darkMode = document.querySelector('#darkMode')

// darkMode.addEventListener('click', alterarTemaDeCores)

// function alterarTemaDeCores() {
//     if(darkMode.classList.toggle(true)) {
//         document.body.classList.add('active')
//     } else {
//         document.body.classList.remove('active')
//     }
// }
