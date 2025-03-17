const inputAmigo = document.getElementById('amigo'); //para tomar texto
const arrayAmigos = []; //array vacio
const ulListaAmigos = document.getElementById('listaAmigos'); 

function agregarAmigo() {
    if (inputAmigo.value == ''){
        alert('Por favor, inserte un nombre.') //mensaje que sale si no se escribe nada
    }
    arrayAmigos.push(inputAmigo.value);
    inputAmigo.value = '';
    //console.log(listaAmigos);
//ulListaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`; 
actualizarLista();
}

function actualizarLista() {
    ulListaAmigos.innerHTML = ''; // Limpiar la lista antes de actualizar

    for (let i = 0; i < arrayAmigos.length; i++) {
        const nuevoAmigo = document.createElement('li');
        nuevoAmigo.textContent = arrayAmigos[i];
        ulListaAmigos.appendChild(nuevoAmigo);
}
}
