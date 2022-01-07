const area = document.querySelector("#area")

area.addEventListener("mouseenter", () => entrar())
area.addEventListener("click", clicar)
area.addEventListener("mouseout", sair)

const entrar = () => {area.innerText = "Entrou!"};

function clicar()
{
    area.innerText = "Clicou!"
    area.style.background = "#f00"
}

function sair()
{
    area.innerText = "Saiu!"
    area.style.background = "#060"
}