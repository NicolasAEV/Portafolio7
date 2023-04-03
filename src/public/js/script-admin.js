// navbar responsive active button 
const linkInventario = document.getElementById('linkInventario')
const linkVentas = document.getElementById('linkVentas')

const btnLogin = document.getElementById('btnLogin')
const btnLogout = document.getElementById('btnLogout')
const btnNavbar = document.querySelector('#btnnavbar');
const menu = document.querySelector('#navbar-sticky');
btnNavbar.addEventListener('click',()=>{
    menu.classList.toggle('hidden')
})

let token = localStorage.getItem('jwtVendedor');
if (token) {
    btnLogin.style.display = "none";
    // registro.style.display = "none";

} else {
    btnLogout.style.display = "none";
    // btnCarrito.style.display = "none";
}

linkInventario.addEventListener("click", (event) => {
    event.preventDefault();
    if(token){
        location.href = "/inventario?token="+token
    }else{
        location.href = "/loginadmin"
    }
})
linkVentas.addEventListener("click", (event) => {
    event.preventDefault();
    if(token){
        location.href = "/ventas?token="+token
    }else{
        location.href = "/loginadmin"
    }
})
btnLogout.addEventListener("click", (event) => {
    localStorage.clear();
    location.href = "/loginadmin";
})

const permiso  = () =>{
    if(token){
        console.log('usuario con permisos')
    }else{
        location.href = "/loginadmin"
    }
}
permiso()