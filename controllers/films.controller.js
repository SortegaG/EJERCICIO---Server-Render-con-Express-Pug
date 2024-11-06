//const apiKey = process.env.API_KEY

const renderHome = async (req, res) => {
    res.render('home.pug')
}

// app.post('/film', function (req, res) {
//     let film = req.body.film; // este city viene del formulario name='city'
//     let url = `https://www.omdbapi.com/?t=${film}&apikey=${apiKey}`

//     request(url, function (err, response, body) {
//         if (err) {
//             res.render('index', { weather: null, error: 'Error, please try again' });
//         } else {
//             let weather = JSON.parse(body)
//             if (weather.main == undefined) {
//                 res.render('index', { weather: null, error: 'Error, please try again' });
//             } else {
//                 let weatherText = `It's ${weather.main.temp} degrees in ${weather.name}!`;
//                 res.render('index', { weather: weatherText, error: null });
//             }
//         }
//     });
// })


module.exports = {
    renderHome,

};
