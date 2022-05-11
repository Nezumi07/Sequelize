const yargs = require("yargs");
const { sequelize } = require("./db/connection");
// imports for CRUD functions
const { addMovie, listMovies, updateMovie, deleteMovie } = require("./movie/movieMethods");
const Movie = require("./movie/movieTable");

const app = async (yargsObj) => {
    try {
            await sequelize.sync();
        if (yargsObj.add) {
            // add movie to database
            await addMovie ({title:yargsObj.title, actor: yargsObj.actor });
        } else if  (yargsObj.list) {
            // list all movies
            console.log(await listMovies());
        } else if (yargsObj.update) {
            //update one movie
            await updateMovie (yargsObj);
            console.log("update successful")
           
        } else if (yargsObj.delete) {
            // delete one movie
            await deleteMovie (yargsObj)
            console.log("DELETE DELETE")
            

        }   else {
            console.log("Incorrect command");
        }
    } catch (error) {
        console.log(error);
    }

}

app(yargs.argv);