const precio = {"Euro" : 100}
const banda = "Linking Park";
const genero = "Rock Alternativo";
const canciones = ["Numb", "In the end", "One More Night"];

const album = {banda, genero, canciones, precio};
console.log(album);

const nuevoAlbum = {
    coste : {"Euro" : 100},
    exitos : ["Numb", "In the end", "One More Night"]
}

//Destructuring:
let {coste, exitos} = nuevoAlbum;
console.log(coste, exitos);


//Ajax:

const descargaUsuarios = usuarios => new Promise((resolve, reject) =>{
    const api = `https://randomuser.me/api/?results=${usuarios}&nat=es`;

    const xhr = new XMLHttpRequest();

    xhr.open('GET', api, true);

    xhr.onload = () => {
        if(xhr.status === 200) {
            resolve(JSON.parse(xhr.responseText).results);
        } else {
            reject(Error(xhr.statusText));
        }
    }

    //opcional:
    xhr.onerror = (error) => reject(error);

    xhr.send()
});

descargaUsuarios(10)
    .then(
        miembros => imprimirResultados(miembros),
        error => console.error(
            new Error('Error ajax:' + error)
        )
    );

function imprimirResultados(users){
    users.forEach(user => {
        let {location: {city,state} , id: {name, value}} = user;
        console.log(city, state, name, value);
    });
}