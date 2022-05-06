const Movie = require ("./movieTable");

exports.addMovie = async (movieObj) => {
    try {
        await Movie.create(movieObj);
    } catch (error) {
        console.log(error)
    }
}


exports.listMovies = async (movieObj) => {
    try {
        return await Movie.findAll(movieObj);
    } catch (error) {
            console.log(error)
        }
    }


    exports.updateMovie = async (movieObj) => {
        try {
            await Movie.update(
            {title: movieObj.title, actor: movieObj.actor},
            {where: {title: movieObj.title}}
            );



        exports.deleteMovie = async (movieObj) => {
            await Movie.destroy({
                where: {title: movieObj.title}
                })
            }


        } catch (error) {
                console.log(error)
            }
        }

        //node src/server.js --add --title="Rushmore" --actor="Jason Schwartzman"
        //node src/server.js --list