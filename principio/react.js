// esto se llama codigo imperativo, describiendo como debe hacer las cosas, con react es declarativo

// vanilla javascript

// recuperamos el boton
const button = document.querySelector('button');

// al hacer clic ejecutamos un funcion
button.addEventListener('click', function() {
    // recuperar la id del atributo
    const id = this.getAttribute('data-id');

    // llamar a un servicio para actualizar si me gusta
    // toggleLike(id);

    if (this.classList.contains('liked')) {
        this.classList.remove('liked');
        this.innerText = 'Me gusta';
    } else {
        this.classList.add('liked');
        this.innerText = ' Quitar me gusta';
    }
})