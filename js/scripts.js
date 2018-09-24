window.addEventListener("load", function () {
    let buttons = document.querySelectorAll(".vermas")
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            let id_equipo = this.dataset.equipo
            let fichas = document.querySelector(id_equipo)
            fichas.classList.toggle("visible")
    
            setTimeout(() => {
                fichas.scrollIntoView()
            }, 700);
            
        })
    })    
})


