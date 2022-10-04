
// Ciclo de vida del SW

self.addEventListener('install', event => {

    //Descargar Assets
    //creamos cache
    console.log('Instalando SW');

    const instalacion = new Promise((resolve, reject) => {
         //self.skipWaiting();
    setTimeout(() => {
        console.log('SW: Instalaciones terminadas');
        self.skipWaiting();
        resolve();
    }, 1000);

    });

   


    event.waitUntil(instalacion);


});


//Cuando el SW toma el control de la aplicación
self.addEventListener('activate', event => {

    //Borrar cache viejo

    console.log('SW2: Activo y listo para controlar app');


});
