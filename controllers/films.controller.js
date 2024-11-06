const apiKey = process.env.API_KEY // Almacenamos la api_key en una variable de entorno para que no se pueda visualizar

// Funcion renderHome: Al hacer una llamada a la funcion, renderizamos la plantilla home.pug
const renderHome = async (req, res) => {
    res.render('home.pug')
}

// Funcion getfilms: 
const getfilms = async (req, res) => {
    const title = req.params.title;  // Obtenemos el titulo de la pelicula por params (texto que se le añade a la url ej: localhost:3000/film/BATMAN)

    try {
        const response = await fetch(`http://www.omdbapi.com/?t=${title}&apikey=${apiKey}`); // con el title y la apy_key, hacemos un fecth a la api
        const data = await response.json();  // Lo transformamos en formato JSON

            res.status(200).render('film.pug', { // Al hacer response 200, renderizamos la plantilla film.pug y le pasamos un objeto con  
                title: data.Title,               // distintas claves valor, que en se imprimiran en la plantilla 'film.pug'. Este objeto se importa y lo 
                year: data.Year,                // recibe la plantilla, pudiendo utilizar los claves para imprimir valores.
                img: data.Poster,
                director: data.Director,
                genre: data.Genre,
                description: data.Plot
            })
            
    } catch (error) {
        console.error('Error loading films', error);
    }
};

// Funcion postfimls:
const postfilms = async (req, res) => {     // Recibimos el titulo de la pelicula a traves del body. 
    const title = req.body.film;        // Este titulo lo recibimos mediante el method: POST, action:'/' de nuestro formulario en home.pug. Al intodicir
    res.redirect(`/film/${title}`)      // La funcion nos redirige al enlace localhost:3000/film/TITULO QUE LE HAYAMOS PASADO AL FORMULARIO
};

// Exportamos las funciones
module.exports = {
    renderHome,
    getfilms,
    postfilms
};