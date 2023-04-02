let formularioRegstro = document.getElementById("formularioRegstro");

formularioRegstro.addEventListener("submit", (event) => {

    event.preventDefault();
    let myHeaders = new Headers();

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: new FormData(formularioRegstro),
        redirect: 'follow'
    };

    fetch("/api/regitro", requestOptions)
    .then(response =>  response.json() )
    .then(result => {
        console.log(result.code,result.message)
        if(result.code ==200){
            alert(result.message)
            location.href = '/login'
        }else{
            alert(result.message)
        }
    })
    .catch(error => console.log('error', error));
})
