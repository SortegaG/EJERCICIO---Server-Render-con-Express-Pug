const apiKey = process.env.API_KEY


const renderHome = async (req, res) => {
    res.render('home.pug')
}

const getfilms = async (req, res) => {
    const title = req.params.title;

    try {
        const response = await fetch(`http://www.omdbapi.com/?t=${title}&apikey=${apiKey}`);
        const data = await response.json();
        console.log(data)
        console.log(data.Poster)

            res.status(200).render('film.pug', {
                title: data.Title,
                year: data.Year,
                img: data.Poster,
                director: data.Director,
                genre: data.Genre,
                description: data.Plot
            })
            
    } catch (error) {
        console.error('Error loading films', error);
    }
};

const postfilms = async (req, res) => {
    const title = req.body.film;
    res.redirect(`/film/${title}`)
    // console.log(title)

    // try {
    //     const response = await fetch(`http://www.omdbapi.com/?t=${title}&apikey=${apiKey}`);
    //     const data = await response.json();
    //     console.log(data)
    //     console.log(data.Poster)

    //         res.status(200).render('film.pug', {
    //             title: data.Title,
    //             year: data.Year,
    //             img: data.Poster,
    //             director: data.Director,
    //             genre: data.Genre,
    //             description: data.Plot
    //         })
            
    // } catch (error) {
    //     console.error('Error loading films', error);
    // }
};




module.exports = {
    renderHome,
    getfilms,
    postfilms
};