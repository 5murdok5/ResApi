const {
    Router
} = require('express');
const router = Router();
//funcionalidad para procesar datos
const _ = require('underscore');
const movies = require('../sample.json');

router.get('/', (req, res) => {
    res.json(movies);
});
//guardar datos
router.post('/', (req, res) => {
    const {
        title,
        director,
        year,
        rating
    } = req.body;

    if (title && director && year && rating) {
        const id = movies.length + 1
        const newMovie = {
            ...req.body,
            id
        };
        movies.push(newMovie);
        res.json(movies);
        res.send('saved');
    } else {
        res.status(500).json({
            "error": "hay un error"
        });
    }

});
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    _.each(movies, (movie, i) => {
        if (movie.id == id) {
            movies.splice(i, 1);
        }
    });

    res.send(movies);
});


router.put('/:id', (req, res) => {
    const { id } = req.params;
    const {
        title,
        director,
        year,
        rating
    } = req.body;
    if (title && director && year && rating) {
        _.each(movies, (movie, i) => {
            if (movie.id == id) {
                movies.title =title;
                movies.director =director;
                movies.year =year;
                movies.rating =rating;
                
            }
        });
        res.json(movies);

    }else{
        res.status(500).json({
            "error": "hay un error"
        });
    }

});
module.exports = router;