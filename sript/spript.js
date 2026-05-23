// Configuración para sincronizar el sonido con la imagen
const DURACION_ANIMACION_MS = 500; 
// Si tu gatito abre la boca a la mitad de la animación (frame 2 o 3):
const RETRASO_BOCA_ABIERTA_MS = 250; 

// Nuestra partitura. Asignamos un gato y un audio a cada paso.
// 'tiempoHastaSiguiente' dicta el ritmo de la canción.
const melodia = [
    { gatoId: 'gato1', archivoAudio: '/audio/quelosplas.mp3', tiempoHastaSiguiente: 300 },
    { gatoId: 'gato5', archivoAudio: '/audio/quelosplas.mp3', tiempoHastaSiguiente: 250 },
    { gatoId: 'gato2', archivoAudio: '/audio/cum.mp3',   tiempoHastaSiguiente: 500 },
    { gatoId: 'gato1', archivoAudio: '/audio/quelosplas.mp3', tiempoHastaSiguiente: 500 },
    { gatoId: 'gato4', archivoAudio: '/audio/fe.mp3', tiempoHastaSiguiente: 400 },
    { gatoId: 'gato3', archivoAudio: '/audio/liz.mp3', tiempoHastaSiguiente: 900 },

    { gatoId: 'gato1', archivoAudio: '/audio/quelosplas.mp3', tiempoHastaSiguiente: 300 },
    { gatoId: 'gato5', archivoAudio: '/audio/quelosplas.mp3', tiempoHastaSiguiente: 250 },
    { gatoId: 'gato2', archivoAudio: '/audio/cum.mp3',   tiempoHastaSiguiente: 500 },
    { gatoId: 'gato1', archivoAudio: '/audio/quelosplas.mp3', tiempoHastaSiguiente: 500 },
    { gatoId: 'gato5', archivoAudio: '/audio/fe(2).mp3', tiempoHastaSiguiente: 400 },
    { gatoId: 'gato3', archivoAudio: '/audio/liz(2).mp3', tiempoHastaSiguiente: 400 },

    // ... agrega toda la canción aquí
];

// Función para hacer cantar a un solo gatito
function cantarNota(gatoId, archivoAudio) {
    const gatito = document.getElementById(gatoId);
    
    // 1. Iniciamos la animación de CSS
    gatito.classList.add('cantando');

    // 2. Esperamos hasta el frame de la boca abierta para el sonido
    setTimeout(() => {
        const audio = new Audio(archivoAudio);
        audio.play();
    }, RETRASO_BOCA_ABIERTA_MS);

    // 3. Reseteamos el gatito cuando termina su animación para que pueda volver a cantar
    setTimeout(() => {
        gatito.classList.remove('cantando');
    }, DURACION_ANIMACION_MS);
}

// Función que lee la partitura paso a paso
async function tocarCancion() {
    for (const paso of melodia) {
        cantarNota(paso.gatoId, paso.archivoAudio);
        
        // Esperamos el tiempo indicado antes de pasar a la siguiente nota
        await new Promise(resolve => setTimeout(resolve, paso.tiempoHastaSiguiente));
    }
}

// Asignamos el evento al botón
document.getElementById('btn-empezar').addEventListener('click', () => {
    tocarCancion();
});