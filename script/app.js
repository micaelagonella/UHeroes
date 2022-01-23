window.addEventListener('load', function(){


    fetch('https://superheroapi.com/api/4687665501309604')
        .then(respuesta => respuesta.json())
        .then(datos => {
            console.log(datos);
        })

});
