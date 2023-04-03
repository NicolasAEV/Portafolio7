let formulario = document.querySelector('#formulario')
// let nombre = document.querySelector('#nombre')
// let precio = document.querySelector('#precio')
// let stock = document.querySelector('#stock')
// let imagen = document.querySelector('#imagen')
// let categoria = document.querySelector('#Categoria')
// let descripcion = document.querySelector('#descripcion')
formulario.addEventListener('submit',(e)=>{
    e.preventDefault();
    
    // let productoActualizado = {
    //     nombre:nombre.value,
    //     precio:precio.value,
    //     stock:stock.value,
    //     imagen : imagen.value,
    //     categoria:categoria.value,
    //     descripcion : descripcion.value
    // }
    let myHeaders = new Headers();
    myHeaders.append("authorization", "Bearer " + localStorage.getItem("jwtVendedor"));
    // myHeaders.append("Content-Type", "application/json");
    let requestOptions = {
        method: 'post',
        headers: myHeaders,
        // body: JSON.stringify(productoActualizado),
        body: new FormData(formulario),
        redirect: 'follow'

        };
      fetch("/api/inventario",requestOptions)
     .then(response => response.json())
     .then(data =>{
        if(data.code == 500 || data.code == 400){
            console.log(data.message)
        }else if  (data.code == 401) {
            console.log(data.message)     
        } else { 
            location.reload();
        }
    })
    .catch(error => {
        console.log(error.stack)

        console.log(error)
        alert("Algo ha salido mal al cargar los productos.")
    })

})


const eliminarProducto = (id) => {
    console.log(id)
    let myHeaders = new Headers();
    myHeaders.append("authorization", "Bearer " + localStorage.getItem("jwtVendedor"));
    console.log(myHeaders)
    const requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        // body: JSON.stringify(objeto),
    };
    fetch("/api/inventario/"+id,requestOptions)
     .then(response => response.json())
     .then((data) => {
        if(data.code == 400 || data.code == 500 ){
            console.log(data.message)
        }else if  (data.code == 401) {
            console.log(data.message)
            
        }
        else{
            location.reload();
        }
    })
    .catch(error => {
        console.log(error.stack)
        alert("Algo ha salido mal al cargar los productos.")
    })
}


const rutaActualizar = (id) =>{
    if (token) {
        location.href = `/actualizar/${id}?token=`+token
    } else {
        location.href = '/loginadmin'
    }
}