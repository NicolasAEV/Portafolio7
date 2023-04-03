let formularioLogin = document.getElementById('formularioLogin')
let rut = document.getElementById('rut')
let password = document.getElementById('password')

formularioLogin.addEventListener("submit", (event) => {
    event.preventDefault();
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    let raw = JSON.stringify({
    rut: rut.value,
    password: password.value
    });
    console.log(raw)
    let requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };
    fetch("/api/login/admin", requestOptions)
    .then(response => response.json())
    .then(result => {
        if(result.code == 200){
            alert("Usuario autenticado con éxito.")
            console.log(result.token)
            localStorage.setItem("jwtVendedor", result.token)
            let token = localStorage.getItem('jwtVendedor');
            location.href = "/inventario?token="+token;
        }else if(result.code == 401){
            alert(result.message)
        }else{
            alert("Login fallido.")
        }
    })
    .catch(error => console.log('error', error));
})

