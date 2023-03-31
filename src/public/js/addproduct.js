


const addProduct = (id) => {
    console.log(id)
    let url = "/api/carrito/" + id ; 
    console.log(url)
    fetch(url,{
        method: "GET"
    })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            if (data.code == 400 || data.code == 500) {
                alert("Se ha generado el siguiente problema: " + data.message)
            } else {
             
                location.href = '/carrito'  
           
            }
        }).catch(error => console.log(error))
}
