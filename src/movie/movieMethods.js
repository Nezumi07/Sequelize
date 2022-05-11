const Movie = require ("./movieTable");

exports.addMovie = async (movieObj) => {
    try {
        await Movie.create(movieObj)
    } catch (error) {
        console.log(error)
    }
} ;

exports.listMovies = async () => {
    try {
        return await Movie.findAll();
    } catch (error) {
        console.log(error)
    }
};

exports.updateMovie = async (movieObj) => {
    try {
        await Movie.update(
            {title: movieObj.newTitle, actor: movieObj.newActor},
            {where: {title: movieObj.title}}
            );
    } catch (error) {
        console.log(error)
    }

};

exports.deleteMovie = async (movieObj) => {
    try {
        await Movie.destroy(
            {where: {title: movieObj.title}},
        );
    
    } catch (error) {
        console.log(error)
    }

};

// node src/server.js --add --title="The Matrix" --update="Waynes world"
// node src/server.js --list
// node src/server.js --destroy

// node src/server.js --destroy --title="The Matrix"
// node src/server.js --title="The Matrix" --destroy 