let formulario = document.querySelector('#formulario')

formulario.addEventListener('submit',(e)=>{
    e.preventDefault();

    let myHeaders = new Headers();
    myHeaders.append("authorization", "Bearer " + localStorage.getItem("jwtVendedor"));
    // myHeaders.append("Content-Type", "application/json");
    const requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: new FormData(formulario),
        redirect: 'follow'
    };
    fetch("/api/inventario",requestOptions)
     .then(response => response.json())
     .then(data =>{
        if(data.code == 500 || data.code == 400){
            console.log(data.message)
        }else{
            console.log('aca')
            location.href = "/inventario?token="+token
        }
    })
    .catch(error => {
        console.log(error)
        alert("Algo ha salido mal al cargar los productos.")
    })
})