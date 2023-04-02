// navbar responsive active button 
const btnCarrito = document.getElementById('btnCarrito')
const btnLogin = document.getElementById('btnLogin')
const btnLogout = document.getElementById('btnLogout')
const btnNavbar = document.querySelector('#btnnavbar');
const menu = document.querySelector('#navbar-sticky');
btnNavbar.addEventListener('click',()=>{
    menu.classList.toggle('hidden')
})

let token = localStorage.getItem('jwt');
if (token) {
    btnLogin.style.display = "none";
    // registro.style.display = "none";

} else {
    btnLogout.style.display = "none";
    // btnCarrito.style.display = "none";

}

btnCarrito.addEventListener("click", (event) => {
    event.preventDefault();
    if(token){
        location.href = "/carrito?token="+token
    }else{
        location.href = "/login"
    }
})
btnLogout.addEventListener("click", (event) => {
    localStorage.clear();
    location.href = "/";
})