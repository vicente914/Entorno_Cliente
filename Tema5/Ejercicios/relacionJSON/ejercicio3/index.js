const contenedorPeliculas = document.getElementById("contenedorPeliculas");
const btnBuscar = document.getElementById("btnBuscar");
const inputBuscar = document.getElementById("inputBuscar");
const API_KEY =  '93045f04';


let controladorActual = null; //Variable global para guardar el controlador

async function maquetarPeliculas(busqueda = 'star wars'){
    //Limpiamos el contenedor de resultados anteriores
    contenedorPeliculas.innerHTML = '';


    // Si había una petición anterior en curso, la cancelamos
    if (controladorActual) {
        controladorActual.abort();
    }
    // Creamos un nuevo controlador para esta petición
    controladorActual = new AbortController();

    try{
        const url = `https://www.omdbapi.com/?s=${encodeURIComponent(busqueda)}&apikey=${API_KEY}`;

        const respuesta = await fetch(url, {signal: controladorActual.signal});
        const datos = await respuesta.json();

        // OMDb responde {"Response":"False","Error":"..."} si no hay resultados
        if (datos.Response === "False") {
            contenedorPeliculas.innerHTML = `<p>No hay resultados para "${busqueda}": ${datos.Error}</p>`;
            return;
        }

        //iteramos sobre datos.search porque es el array de peliculas
        for(const pelicula of datos.Search){
            const contenedor = document.createElement("div");
            contenedor.classList.add("pelicula");

            for(const [atributo, valor] of Object.entries(pelicula)){
                //Si el atributo es el poster, creamos la imagen y la añadimos al div
                if (atributo === "Poster") {
                    const img = document.createElement("img");
                    
                    //Si no hay poster, se devuelve N/A
                    img.src = valor === "N/A" ? "https://via.placeholder.com/300x450?text=Sin+poster":valor;
                    img.alt = pelicula.Title;
                    contenedor.appendChild(img);
                }
                //en de ser otro atributo, añadimos al div la informacion como
                //de manera normal con parrafos
                else{
                    const p = document.createElement("p");
                    p.textContent = `${atributo}: ${valor}`;
                    contenedor.appendChild(p);
                }
            }
            contenedorPeliculas.appendChild(contenedor);
        }
    }
    catch(error){
        // Si el error es porque cancelamos la petición, no mostramos alerta
        if (error.name === 'AbortError') {
            console.log('Búsqueda cancelada porque se escribió otra letra');
            return; 
        }
        console.error("Error al conectar con la API:", error);
        contenedorPeliculas.innerHTML = "<p>Hubo un error al cargar las películas.</p>";
    }

    
}

let temporizadorBusqueda;

btnBuscar.addEventListener("click", () => {
    clearTimeout(temporizadorBusqueda);
    const texto = inputBuscar.value.trim();
    if (texto) maquetarPeliculas(texto);
});




inputBuscar.addEventListener("input", () => {
    // Cancelamos el temporizador anterior si el usuario sigue escribiendo
    clearTimeout(temporizadorBusqueda);

    // Iniciamos un nuevo temporizador
    temporizadorBusqueda = setTimeout(() => {
        const texto = inputBuscar.value.trim();
        
        // Si el input está vacío, podríamos limpiar la pantalla o buscar "star wars"
        if (texto.length > 0) {
            maquetarPeliculas(texto);
        } else {
            contenedorPeliculas.innerHTML = '';
        }
    }, 500); // 500ms de espera
});

maquetarPeliculas("star wars");