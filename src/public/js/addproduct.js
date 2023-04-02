


const addProduct = (id) => {
    let myHeaders = new Headers();
    myHeaders.append("authorization", "Bearer " + localStorage.getItem("jwt"));
    console.log(myHeaders)
    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        // body: JSON.stringify(objeto),
        redirect: 'follow'
    };
    let url = "/api/carrito/" + id ; 
    console.log(url)
    fetch(url,requestOptions)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            if (data.code == 400 || data.code == 500) {
                alert("Se ha generado el siguiente problema: " + data.message)
            } else if (data.code == 401) {
                location.href = '/login'
            } else {
                location.href = '/carrito?token='+token
                
            } 
        }).catch(error => console.log(error))
}
